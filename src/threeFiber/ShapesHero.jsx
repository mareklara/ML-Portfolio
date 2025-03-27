import React, { useRef, useState, useEffect } from "react";
import { Canvas, useFrame } from "@react-three/fiber";
import {
  OrbitControls,
  Environment,
  MeshWobbleMaterial,
  Sparkles,
  EffectComposer,
  DepthOfField,
  shaderMaterial,
} from "@react-three/drei";
import { Bloom } from "@react-three/postprocessing";
import * as THREE from "three";
import { Leva, useControls } from "leva";

// Custom Shader Material
const CustomShaderMaterial = shaderMaterial(
  { time: 0, color: new THREE.Color("hotpink") },
  `
    varying vec2 vUv;
    void main() {
      vUv = uv;
      gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
    }
  `,
  `
    varying vec2 vUv;
    uniform float time;
    uniform vec3 color;
    void main() {
      vec2 distortedUV = vUv;
      distortedUV.x += sin(distortedUV.y * 10.0 + time) * 0.05;
      vec3 finalColor = color * (1.0 - length(distortedUV - vec2(0.5)));
      gl_FragColor = vec4(finalColor, 1.0);
    }
  `
);

const CustomShape = ({
  position,
  color,
  wobbleSpeed,
  wobbleIntensity,
  hasShader,
}) => {
  const mesh = useRef();
  const materialRef = useRef();
  const [hovered, setHovered] = useState(false);
  const [active, setActive] = useState(false);

  useFrame((state, delta) => {
    if (hovered) {
      mesh.current.rotation.x += delta * 0.5;
      mesh.current.rotation.y += delta * 0.5;
    }
    mesh.current.position.y =
      position[1] + Math.sin(state.clock.elapsedTime) * 0.2;
    if (materialRef.current) {
      materialRef.current.uniforms.time.value = state.clock.elapsedTime;
    }
  });

  return (
    <mesh
      ref={mesh}
      position={position}
      scale={active ? 1.5 : 1}
      onClick={() => setActive(!active)}
      onPointerOver={(e) => {
        e.stopPropagation();
        setHovered(true);
      }}
      onPointerOut={() => setHovered(false)}
    >
      <sphereGeometry args={[1, 64, 64]} />
      {hasShader ? (
        <CustomShaderMaterial ref={materialRef} color={color} transparent />
      ) : (
        <MeshWobbleMaterial
          color={color}
          factor={wobbleIntensity}
          speed={wobbleSpeed}
        />
      )}
      {hovered && (
        <Sparkles
          size={2}
          scale={[1, 1, 1]}
          position={[0, 0, 1.5]}
          color={color}
        />
      )}
    </mesh>
  );
};

function Scene() {
  const { blur, focus, luminanceThreshold, smoothness, brightness } =
    useControls("dof", {
      blur: { value: 2.3, min: 0, max: 5, step: 0.01 },
      focus: { value: 3.8, min: 0, max: 10, step: 0.01 },
      luminanceThreshold: { value: 0.9, min: 0, max: 1, step: 0.01 },
      smoothness: { value: 1.5, min: 0, max: 5, step: 0.01 },
      brightness: { value: 0.9, min: 0, max: 2, step: 0.01 },
    });

  return (
    <>
      <Environment preset="sunset" background blur={0.5} />
      <ambientLight intensity={0.3} />
      <directionalLight position={[5, 5, 5]} intensity={0.5} />
      <directionalLight position={[-5, 5, -5]} intensity={0.3} />
      <CustomShape
        position={[-2, 0, 0]}
        color="#FF5733"
        wobbleSpeed={1.5}
        wobbleIntensity={0.3}
        hasShader={false}
      />
      <CustomShape
        position={[2, 0, 0]}
        color="#3498DB"
        wobbleSpeed={2}
        wobbleIntensity={0.5}
        hasShader={true}
      />
      <CustomShape
        position={[0, 0, -3]}
        color="#2ecc71"
        wobbleSpeed={1}
        wobbleIntensity={0.2}
        hasShader={false}
      />
      <EffectComposer>
        <DepthOfField
          focusDistance={focus}
          focalLength={0.07}
          bokehScale={blur}
          height={480}
        />
        <Bloom
          intensity={brightness}
          width={512}
          height={512}
          kernelSize={5}
          luminanceThreshold={luminanceThreshold}
          luminanceSmoothing={smoothness}
        />
      </EffectComposer>
    </>
  );
}

const ShapesHero = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  return (
    <div
      style={{
        width: "100%",
        height: "100vh",
        position: "relative",
        overflow: "hidden",
      }}
    >
      <Canvas
        style={{
          background: "linear-gradient(to bottom, #1a2a6c, #b21f1f, #fde725)",
        }}
        dpr={[1, 2]}
        camera={{ fov: 55, near: 0.1, far: 20 }}
      >
        <Scene />
        {!isMobile && <OrbitControls />}
      </Canvas>
      <Leva collapsed />
      <div
        style={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          color: "white",
          textAlign: "center",
          zIndex: 1,
        }}
      >
        <h1>Welcome to My Portfolio</h1>
        <p>Check out my cool projects!</p>
      </div>
    </div>
  );
};

export default ShapesHero;

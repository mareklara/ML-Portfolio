import React from "react";
import { Link } from "react-scroll";

const AboutMetext = () => {
  return (
    <div className="flex flex-col md:items-start sm:items-center md:text-left sm:text-center">
      <h2 className="text-6xl text-cyan mb-10">About Me</h2>
      <p className="text-white">
        I'm a driven web developer on track to earn my Bachelor's degree in
        Software Development. With a strong foundation built upon a certificate
        in Software Development from the California Institute of Technology and
        a Web Development certification from Brainnest Germany, I bring a blend
        of theoretical knowledge and practical skills to every project. My focus
        lies in crafting clean, efficient, and user-friendly solutions using
        React and frontend technologies. I'm passionate about creating
        innovative web applications that solve real-world problems and deliver
        seamless experiences.
      </p>
      <Link
        to="projects"
        smooth={true}
        duration={500}
        offset={-100}
        className="cursor-pointer"
      >
        <button className="border border-orange rounded-full py-2 px-4 text-lg flex items-center mt-10 hover:bg-orange transition-all duration-500 cursor-pointer md:self-start sm:self-center text-white hover:text-cyan">
          My Projects
        </button>
      </Link>
    </div>
  );
};

export default AboutMetext;

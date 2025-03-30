import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const projects = [
  {
    name: "Products Warehouse",
    year: "2025",
    align: "righ",
    image: "./src/assets/images/productCatalog.png",
    link: "https://mareklara.github.io/product-catalog/",
  },
  {
    name: "Web-Blocks",
    year: "2025",
    align: "left",
    image: "./src/assets/images/webblocks.png",
    link: "https://mareklara.github.io/Web-Blocks/",
  },
  {
    name: "Code Editor",
    year: "2025",
    align: "righ",
    image: "./src/assets/images/codeeditor.png",
    link: "https://mareklara.github.io/CodeEditor-Frontend/",
  },
  {
    name: "Mastery Courses",
    year: "2025",
    align: "left",
    image: "./src/assets/images/masterycourses.png",
    link: "https://mareklara.github.io/MasteryPlan/",
  },
  {
    name: "PaySheet",
    year: "2025",
    align: "right",
    image: "./src/assets/images/paysheet.png",
    link: "https://mareklara.github.io/ARS-PaySheet/",
  },
];

const ProjectsMain = () => {
  return (
    <div id="projects" className="max-w-[1200px] mx-auto px-4">
      <motion.div
        variants={fadeIn("up", 0.2)}
        initial={"hidden"}
        whileInView="show"
        viewport={{ once: false, amount: 0 }}
      >
        <ProjectsText />
      </motion.div>
      <div className="flex flex-col gap-20 max-w-[900px] mx-auto mt-12">
        {projects.map((item, index) => {
          return (
            <SingleProject
              key={index}
              name={item.name}
              year={item.year}
              align={item.align}
              image={item.image}
              link={item.link}
            />
          );
        })}
      </div>
    </div>
  );
};

export default ProjectsMain;

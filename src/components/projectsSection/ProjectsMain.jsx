import React from "react";
import ProjectsText from "./ProjectsText";
import SingleProject from "./SingleProject";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import productCatalog from "../../../public/images/productCatalog.png";
import webBlocks from "../../../public/images/webblocks.png";
import codeEditor from "../../../public/images/codeEditor.png";
import masteryCourses from "../../../public/images/masterycourses.png";
import paySheet from "../../../public/images/paysheet.png";
import pomodoro from "../../../public/images/pomodorofocus.png";

const projects = [
  {
    name: "Pomodoro Focus",
    year: "2025",
    align: "left",
    image: pomodoro,
    link: "https://mareklara.github.io/PomodoroFocus/",
  },
  {
    name: "Products Warehouse",
    year: "2025",
    align: "righ",
    image: productCatalog,
    link: "https://mareklara.github.io/product-catalog/",
  },
  {
    name: "Web-Blocks",
    year: "2025",
    align: "left",
    image: webBlocks,
    link: "https://mareklara.github.io/Web-Blocks/",
  },
  {
    name: "Code Editor",
    year: "2025",
    align: "righ",
    image: codeEditor,
    link: "https://mareklara.github.io/CodeEditor-Frontend/",
  },
  {
    name: "Mastery Courses",
    year: "2025",
    align: "left",
    image: masteryCourses,
    link: "https://mareklara.github.io/MasteryPlan/",
  },
  {
    name: "PaySheet",
    year: "2025",
    align: "right",
    image: paySheet,
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

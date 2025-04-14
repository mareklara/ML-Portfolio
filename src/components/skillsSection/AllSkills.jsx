import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJest } from "react-icons/si";
import SingleSkill from "./SingleSkill";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icons: <FaHtml5 />,
  },
  {
    skill: "CSS",
    icons: <FaCss3 />,
  },
  {
    skill: "JS",
    icons: <IoLogoJavascript />,
  },
  {
    skill: "ReactJS",
    icons: <FaReact />,
  },
  {
    skill: "Tailwind",
    icons: <RiTailwindCssFill />,
  },
  {
    skill: "Jest Testing",
    icons: <SiJest />,
  },
  {
    skill: "React 3D",
    icons: <FaReact />,
  },
];

const AllSkills = () => {
  return (
    // <div>
    //   <div className="flex items-center justify-center relative gap-2 max-w-[1200px] mx-auto">
    //     {skills.map((item, index) => {
    //       return (
    //         <motion.div
    //           variants={fadeIn("up", `0.${index}`)}
    //           initial={"hidden"}
    //           whileInView="show"
    //           viewport={{ once: false, amount: 0 }}
    //         >
    //           <SingleSkill key={index} text={item.skill} imgSvg={item.icons} />
    //         </motion.div>
    //       );
    //     })}
    //   </div>
    // </div>

    //updated

    <div>
      <div className="flex flex-wrap items-center justify-center gap-8 w-full">
        {skills.map((item, index) => (
          <motion.div
            key={index}
            variants={fadeIn("up", `0.${index}`)}
            initial="hidden"
            whileInView="show"
            viewport={{ once: false, amount: 0 }}
          >
            <SingleSkill text={item.skill} imgSvg={item.icons} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default AllSkills;

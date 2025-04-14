import React from "react";
import { FaHtml5 } from "react-icons/fa";
import { FaCss3 } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io5";
import { FaReact } from "react-icons/fa";
import { RiTailwindCssFill } from "react-icons/ri";
import { SiJest } from "react-icons/si";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const skills = [
  {
    skill: "HTML",
    icons: FaHtml5,
  },
  {
    skill: "CSS",
    icons: FaCss3,
  },
  {
    skill: "JS",
    icons: IoLogoJavascript,
  },
  {
    skill: "ReactJS",
    icons: FaReact,
  },
  {
    skill: "Tailwind",
    icons: RiTailwindCssFill,
  },
  {
    skill: "Jest Testing",
    icons: SiJest,
  },
];

const AllSkillsSM = () => {
  return (
    <div className="grid md:grid-cols-4 sm:grid-cols-2 gap-12 my-12">
      {skills.map((item, index) => {
        const IconComponent = item.icons;
        return (
          <motion.div
            variants={fadeIn("up", 0.2)}
            initial={"hidden"}
            whileInView="show"
            viewport={{ once: false, amount: 0.7 }}
            key={index}
            className="flex flex-col items-center"
          >
            <IconComponent className="text-6xl sm:text-7xl text-orange" />
            <p className="text-center mt-4 text-white">{item.skill}</p>
          </motion.div>
        );
      })}
    </div>
  );
};

export default AllSkillsSM;

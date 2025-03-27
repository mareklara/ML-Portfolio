import React from "react";
import SingleExperience from "./SingleExperience";
import { FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const experiences = [
  {
    job: "HVAC Technician",
    company: "ARS Rescue Rooter",
    date: "2024 - Present",
    resposabilities: [
      " Diagnose hvac units",
      "Troubleshoot AC Units",
      "Install AC Units",
    ],
  },
  {
    job: "HVAC Technician",
    company: "Christianson",
    date: "2020 - 2022",
    resposabilities: [
      " Diagnose hvac units",
      "Troubleshoot AC Units",
      "Install AC Units",
    ],
  },
  {
    job: "Web Developer",
    company: "God-Oy",
    date: "2024 - 2025",
    resposabilities: [
      " Created an Ecommerce site",
      "I upgrade and modify their website",
      "I make sure it does not brake and maintanance",
    ],
  },
  {
    job: "React",
    company: "God-Oy",
    date: "2024 - 2025",
    resposabilities: [
      "A small feature with React to keep",
      "track all their products, ingredients, links",
      "so they know where to buy each ingredient.",
    ],
  },
];

const AllExperience = () => {
  return (
    <div className="flex md:flex-row sm:flex-col items-center justify-between">
      {experiences.map((experience, index) => {
        return (
          <>
            <SingleExperience key={index} experience={experience} />
            {index < 3 ? (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial={"hidden"}
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
              >
                <FaArrowRight className="text-6xl text-orange lg:block sm:hidden" />
              </motion.div>
            ) : (
              ""
            )}
          </>
        );
      })}
    </div>
  );
};

export default AllExperience;

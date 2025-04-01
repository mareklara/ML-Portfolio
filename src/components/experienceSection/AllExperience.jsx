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

// const AllExperience = () => {
//   return (
//     <div className="flex flex-col md:flex-row items-center justify-between gap-6">
//       {experiences.map((experience, index) => {
//         return (
//           <>
//             <SingleExperience key={index} experience={experience} />
//             {index < 3 ? (
//               <motion.div
//                 variants={fadeIn("right", 0.2)}
//                 initial={"hidden"}
//                 whileInView="show"
//                 viewport={{ once: false, amount: 0 }}
//               >
//                 <FaArrowRight className="text-6xl text-orange hidden lg:block" />
//               </motion.div>
//             ) : (
//               ""
//             )}
//           </>
//         );
//       })}
//     </div>
// );
// };

const AllExperience = () => {
  const isFlexWrap = experiences.length > 4; // Enable flex-wrap only if there are more than 4 items

  return (
    <div
      className={`flex flex-col md:flex-row items-center justify-center gap-6 ${
        isFlexWrap ? "flex-wrap" : ""
      }`}
    >
      {experiences.map((experience, index) => {
        return (
          <React.Fragment key={index}>
            <div className="w-full md:w-1/4 flex-shrink-0">
              <SingleExperience experience={experience} />
            </div>
            {index < experiences.length - 1 ? (
              <motion.div
                variants={fadeIn("right", 0.2)}
                initial={"hidden"}
                whileInView="show"
                viewport={{ once: false, amount: 0 }}
                className="hidden lg:block"
              >
                <FaArrowRight className="text-6xl text-orange" />
              </motion.div>
            ) : null}
          </React.Fragment>
        );
      })}
    </div>
  );
};

export default AllExperience;

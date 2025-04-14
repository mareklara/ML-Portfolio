// import React from "react";
// import AboutMeImage from "./AboutMeImage";
// import AboutMetext from "./AboutMetext";
// import { motion } from "framer-motion";
// import { fadeIn } from "../../framerMotion/variants";

// const AboutMeMain = () => {
//   return (
//     <div
//       id="about"
//       className="flex md:flex-row sm:flex-col gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
//       className="flex flex-col md:flex-row flex-wrap gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] justify-between items-center"
//     >
//       <motion.div
//         variants={fadeIn("right", 0.2)}
//         initial={"hidden"}
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <AboutMetext />
//       </motion.div>
//       <motion.div
//         variants={fadeIn("left", 0.2)}
//         initial={"hidden"}
//         whileInView="show"
//         viewport={{ once: false, amount: 0.7 }}
//       >
//         <AboutMeImage />
//       </motion.div>
//     </div>
//   );
// };

// export default AboutMeMain;

//Updated
import React from "react";
import AboutMeImage from "./AboutMeImage";
import AboutMetext from "./AboutMetext";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";

const AboutMeMain = () => {
  return (
    <div
      id="about"
      className="flex flex-col md:flex-row gap-12 px-4 max-w-[1200px] mx-auto mt-[100px] items-center"
    >
      <motion.div
        variants={fadeIn("right", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="w-full md:w-1/2"
      >
        <AboutMetext />
      </motion.div>

      <motion.div
        variants={fadeIn("left", 0.2)}
        initial="hidden"
        whileInView="show"
        viewport={{ once: false, amount: 0.7 }}
        className="w-full md:w-1/2 flex justify-center"
      >
        <AboutMeImage />
      </motion.div>
    </div>
  );
};

export default AboutMeMain;

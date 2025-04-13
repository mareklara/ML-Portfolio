import React from "react";
import { LuLoaderCircle } from "react-icons/lu";
// import { PiHexagonThin } from "react-icons/pi";
import { motion } from "framer-motion";
import { fadeIn } from "../../framerMotion/variants";
import frontend from "../../../public/images/frontend.png";

const HeroPic = () => {
  return (
    <motion.div
      variants={fadeIn("left", 0.2)}
      initial={"hidden"}
      whileInView="show"
      viewport={{ once: false, amount: 0 }}
      className="h-full flex items-center justify-center overflow-hidden"
    >
      <img src={frontend} alt="Hero pic" className="max-h-[450px] w-auto" />
      {/* <div className="absolute -z-10 flex justify-center items-center animate-pulse overflow-hidden">
        <LuLoaderCircle className="md:h-[90%] sm:h-[120%] min-h-[600px] w-auto text-cyan blur-md animate-[spin_20s_linear_infinite]" />
      </div> */}
    </motion.div>
  );
};

export default HeroPic;

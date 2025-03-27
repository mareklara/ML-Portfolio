import React from "react";
import ExperienceInfo from "./ExperienceInfo";

const ExperienceTopLeft = () => {
  return (
    <div className="flex flex-col gap-6 w-[300px] ">
      <p className="text-orange font-bold uppercase text-3xl font-special text-center">
        Since 2022
      </p>
      <div className="flex justify-center items-center gap-4">
        <ExperienceInfo number={3} text={"Years"} />
        <p className="font-bold text-6xl text-lightBrown"></p>
        <ExperienceInfo number={8} text={"Projects"} />
      </div>
      <p className="text-center text-white">
        A short trajectory but with a lot passion to become a front-end
        architect and master web develoment technologies to create the most
        astonishing projects{" "}
      </p>
      {/* <ExperienceInfo number={"100k"} text={"Max  Budget"} /> */}
    </div>
  );
};

export default ExperienceTopLeft;

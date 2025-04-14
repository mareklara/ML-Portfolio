import React from "react";
import ExperienceTopRight from "./ExperienceTopRight";
import ExperienceTopLeft from "./ExperienceTopLeft";
import ExperienceTopMiddle from "./ExperienceTopMiddle";

const ExperienceTop = () => {
  return (
    <div className="flex flex-col lg:flex-row flex-wrap gap-6 items-center justify-center">
      <ExperienceTopLeft />
      <ExperienceTopMiddle />
      <ExperienceTopRight />
    </div>
  );
};

export default ExperienceTop;

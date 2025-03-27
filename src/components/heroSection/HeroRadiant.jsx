import React from "react";

const HeroRadiant = () => {
  return (
    <div>
      <div className="shadow-[var(--boxShadow-cyanMediumShadow)] absolute top-0 right-[400px] -z-10 animate-pulse"></div>
      <div className="shadow-[var(--boxShadow-orangeMediumShadow)] absolute top-0 right-0 -z-10 animate-pulse"></div>
      <div className="shadow-[var(--boxShadow-cyanMediumShadow)] absolute top-[300px] lef-0 -z-10 opacity-50"></div>
      <div className="shadow-[var(--boxShadow-orangeMediumShadow)] absolute top-[500px] lef-0 -z-10 opacity-50"></div>
    </div>
  );
};

export default HeroRadiant;

// import React from "react";
// import download from "../../../public/images/download.gif";

// const AboutMeImage = () => {
//   return (
//     <div className="h-[500px] w-[300px] relative">
//       <div className="h-[500px] w-[300px] rounded-[50px] absolute overflow-hidden">
//         <img
//           src={download}
//           alt="about img"
//           className="h-full w-auto object-cover"
//         />
//       </div>
//       <div className="shadow-[var(--boxShadow-cyanMediumShadow)] animate-pulse h-[500px] w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
//     </div>

//   );
// };

// export default AboutMeImage;

//updated

import React from "react";
import download from "../../../public/images/download.gif";

const AboutMeImage = () => {
  return (
    <div className="relative w-full max-w-[280px] sm:max-w-[300px] h-[400px] sm:h-[500px]">
      <div className="w-full h-full rounded-[50px] absolute overflow-hidden">
        <img
          src={download}
          alt="about img"
          className="h-full w-auto object-cover"
        />
      </div>
      <div className="shadow-[var(--boxShadow-cyanMediumShadow)] animate-pulse h-full w-[250px] bg-orange absolute bottom-[-30px] left-[-30px] rounded-bl-[120px] rounded-tr-[120px] rounded-br-[20px] rounded-tl-[20px] -z-10"></div>
    </div>
  );
};

export default AboutMeImage;

// import React from "react";
// import NavbarLogo from "./NavbarLogo";
// import NavbarLinks from "./NavbarLinks";
// import NavbarBtn from "./NavbarBtn";
// import { useState } from "react";
// import { GiHamburgerMenu } from "react-icons/gi";

// const NavbarMain = () => {
//   const [menuOpen, setMenuOpen] = useState(false);
//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <nav className="w-full fixed top-0 z-50 bg-black">
//       <div className="flex justify-between w-full max-w-[1200px] mx-auto bg-black items-center p-6 rounded-r-full rounded-l-full border-[0.5px] border-orange">
//         <NavbarLogo />
//         <div className={`${menuOpen ? "block" : "hidden"} lg:block`}>
//           <NavbarLinks />
//         </div>
//         <NavbarBtn />
//       </div>
//       <div className="flex lg:hidden sm:block p-6 bg-black items-center justify-center rounded-full border-[0.5px] border-orange">
//         <button
//           className="text-2xl p-3 border border-orange rounded-full text-white cursor-pointer"
//           onClick={toggleMenu}
//         >
//           <GiHamburgerMenu />
//         </button>
//       </div>
//     </nav>
//   );
// };

// export default NavbarMain;

//ner version

import React, { useState } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <nav className="w-full fixed top-0 z-50 bg-black border-b border-orange">
      <div className="max-w-6xl mx-auto px-4 py-4 flex justify-between items-center">
        {/* Logo */}
        <NavbarLogo />

        {/* Desktop Nav Links + Button */}
        <div className="hidden lg:flex items-center gap-6">
          <NavbarLinks />
          <NavbarBtn />
        </div>

        {/* Mobile Hamburger Button */}
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-white text-3xl p-2 border border-orange rounded-full"
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden bg-black border-t border-orange px-4 py-6 space-y-6">
          <NavbarLinks onLinkClick={() => setMenuOpen(false)} />
          <div className="flex justify-center">
            <NavbarBtn />
          </div>
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;

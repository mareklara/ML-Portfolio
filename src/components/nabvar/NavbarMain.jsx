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

import React, { useState, useEffect } from "react";
import NavbarLogo from "./NavbarLogo";
import NavbarLinks from "./NavbarLinks";
import NavbarBtn from "./NavbarBtn";
import { GiHamburgerMenu } from "react-icons/gi";

const NavbarMain = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  // Prevent background scroll when menu is open
  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "auto";
  }, [menuOpen]);

  return (
    <nav className="w-full fixed top-0 z-50 bg-black border-b border-orange">
      <div className="max-w-6xl mx-auto px-4 flex justify-between items-center py-4">
        {/* Logo */}
        <NavbarLogo />

        {/* Desktop Nav Links */}
        <div className="hidden lg:block">
          <NavbarLinks />
        </div>

        {/* Call-to-Action Button */}
        <NavbarBtn />

        {/* Mobile Menu Toggle */}
        <div className="lg:hidden">
          <button
            className="text-2xl p-3 border border-orange rounded-full text-white cursor-pointer"
            onClick={toggleMenu}
          >
            <GiHamburgerMenu />
          </button>
        </div>
      </div>

      {/* Mobile Dropdown Menu */}
      {menuOpen && (
        <div className="lg:hidden w-full bg-black border-t border-orange">
          <NavbarLinks />
        </div>
      )}
    </nav>
  );
};

export default NavbarMain;

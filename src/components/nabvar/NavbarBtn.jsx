import React from "react";
import { LuArrowDownRight } from "react-icons/lu";
import { Link } from "react-scroll";

const NavbarBtn = () => {
  return (
    <Link
      to="contact"
      smooth={true}
      duration={500}
      offset={-100}
      className="cursor-pointer"
    >
      <button className="cursor-pointer px-4 py-2 rounded-full text-xl font-bold text-white border-cyan border flex items-center gap-1 bg-gradient-to-r from-cyan to-orange hover:border-orange hover:scale-110 transition-all duration-500 hover:shadow-[var(--boxShadow-cyanShadow)]">
        Hire Me
        <div className="sm:hidden md:block">
          <LuArrowDownRight />
        </div>
      </button>
    </Link>
  );
};

export default NavbarBtn;

import React from "react";
import { FiGithub } from "react-icons/fi";
import { FaLinkedinIn } from "react-icons/fa";
import SingleFileSocial from "./SingleFileSocial";

const ContactSocial = () => {
  return (
    <div className="flex gap-4">
      <SingleFileSocial Link="https://github.com/mareklara" Icon={FiGithub} />
      <SingleFileSocial
        Link="https://www.linkedin.com/in/marcotrejolara/"
        Icon={FaLinkedinIn}
      />
    </div>
  );
};

export default ContactSocial;

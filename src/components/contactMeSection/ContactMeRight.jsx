import React from "react";
import ContactInfo from "./ContactInfo";
import ContactSocial from "./ContactSocial";
import email from "../../../public/images/email.gif";

const ContactMeRight = () => {
  return (
    <div className="flex flex-col items-center justify-center gap-12">
      <img src={email} alt="contact me" className="max-w-[300px]" />
      <ContactInfo />
      <ContactSocial />
    </div>
  );
};

export default ContactMeRight;

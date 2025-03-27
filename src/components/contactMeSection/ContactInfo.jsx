import React from "react";
import { HiOutlineMail } from "react-icons/hi";
import { FiPhone } from "react-icons/fi";
import { IoLocationOutline } from "react-icons/io5";
import SingleInfo from "./SingleInfo";

const ContactInfo = () => {
  return (
    <div className="flex flex-col gap-4 text-white">
      <SingleInfo text="marek_lara@hotmail.com" Image={HiOutlineMail} />
      <SingleInfo text="512-773-9070" Image={FiPhone} />
      <SingleInfo text="USA, Texas" Image={IoLocationOutline} />
    </div>
  );
};

export default ContactInfo;

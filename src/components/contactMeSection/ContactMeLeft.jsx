import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import ContactForm from "./ContactForm";

const ContactMeLeft = () => {
  return (
    <div className="flex flex-col gap-8 w-full">
      <div>
        <h2 className="text-orange text-3xl mb:4">Get In Touch</h2>
        <p className="text-white">
          Feel free to reach out if you'd like to collaborate you are just a few{" "}
          <br />
          clicks away from getting in touch with me.
        </p>
      </div>
      <ContactForm />
    </div>
  );
};

export default ContactMeLeft;

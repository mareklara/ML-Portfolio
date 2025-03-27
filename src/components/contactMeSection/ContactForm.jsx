import React from "react";
import { useRef } from "react";
import emailjs from "@emailjs/browser";
import { useState } from "react";

const ContactForm = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [success, setSuccess] = useState("");

  const handleName = (e) => {
    setName(e.target.value);
  };

  const handleEmail = (e) => {
    setEmail(e.target.value);
  };

  const handleMessage = (e) => {
    setMessage(e.target.value);
  };

  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm("service_g2ztb8s", "template_lzkm7g6", form.current, {
        publicKey: "NLvNzl2x68BVhCKac",
      })
      .then(
        () => {
          setName("");
          setEmail("");
          setMessage("");
          setSuccess("Message sent successfully!");
        },
        (error) => {
          console.log("FAILED...", error.text);
        }
      );
  };

  return (
    <div>
      <p className="text-cyan">{success}</p>
      <form className="flex flex-col gap-4 " ref={form} onSubmit={sendEmail}>
        <input
          name="name"
          type="text"
          placeholder="Your Name"
          required
          className="h-12 rounded-lg bg-lightBrown px-2 text-white"
          value={name}
          onChange={handleName}
        />
        <input
          name="from_email"
          type="email"
          placeholder="Your Email"
          required
          className="h-12 rounded-lg bg-lightBrown px-2 text-white"
          value={email}
          onChange={handleEmail}
        />
        <textarea
          name="message"
          className="rounded-lg bg-lightBrown p-2 text-white"
          type="text"
          placeholder="Message"
          rows={9}
          cols={50}
          required
          value={message}
          onChange={handleMessage}
        ></textarea>
        <button className="w-full rounded-lg border border-cyan text-white h-12 font-bold text-xl hover:bg-darkCyan bg-cyan transtion-all duration-500">
          Send
        </button>
      </form>
    </div>
  );
};

export default ContactForm;

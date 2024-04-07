import React, { useRef } from "react";
import emailjs from "@emailjs/browser";

function Contact() {
  const form = useRef();

  const sendEmail = (e) => {
    e.preventDefault();

    emailjs
      .sendForm(
        "service_lqj8vob",
        "template_2vjjrme",
        form.current,
        "GXpwBY9793a4sA9jn"
      )
      .then(
        (result) => {
          console.log(result.text);
          console.log("Message Sent");

          e.target.reset();
        },
        (error) => {
          console.log(error.text);
        }
      );
  };

  return (
    <div
      id="contact"
      className="p-[2rem] flex-col sm:px-[1.25rem] mt-10 ml-10 mr-10 flex tm:py-0 sm:py-0 sm:mt-14 tm:flex-col gap-[80px] sm:gap-[20px] tm:gap-[20px] sm:flex-col"
    >
      <div className="flex w-[36rem] tm:pt-4 lg:pt-4 sm:pt-0 tm:w-full sm:w-full tm:mb-[20px] sm:mb-[20px]">
        <h1 className="tracking-wider font-[600] text-center text-[1.4rem] lg:text-[2rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1rem] sm:w-[100%]">
          Contact Me
        </h1>
      </div>
      <div className="flex justify-center">
        <form
          className="flex flex-col gap-4 tm:w-full sm:w-full lg:w-[88%] "
          ref={form}
          onSubmit={sendEmail}
        >
          <label>Name</label>
          <input
            className="p-4 rounded-[4px] bg-[#e4e1e1fa] dark:bg-[#3d3e4b] h-[58px]"
            placeholder="Name"
            type="text"
            name="user_name"
            required
          />

          <label>Email</label>
          <input
            className="p-4 rounded-[4px]  bg-[#e4e1e1fa] dark:bg-[#3d3e4b] h-[58px]"
            placeholder="Email"
            type="email"
            name="user_email"
            required
          />

          <label>Your Message</label>
          <textarea
            className="p-4 resize-none rounded-[4px] input bg-[#e4e1e1fa] dark:bg-[#343541] h-[198px] "
            placeholder="Your message"
            type="text"
            name="message"
            required
          />

          <div className="flex justify-start mt-5 mb-8">
            <button
              type="submit"
              className="px-[1.6em] py-[.8em] bg-[#e9ba22] coursor-pointer rounded-[4px] flex justify-start items-center gap-1 border-[#e9ba22] border-2 lg:text-[.8rem] sm:text-[.8rem]"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </div>
  );
}

export default Contact;

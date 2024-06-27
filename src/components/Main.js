import React from "react";
// import Typed from 'react-typed';
import myImage from "./../assets/main_image.png";
import { AiFillLinkedin, AiFillGithub } from "react-icons/ai";
import { SiLeetcode } from "react-icons/si";
import Typewriter from "./Typewriter";

function Main() {
  return (
    <div
      id="main"
      className="flex flex-col sm:min-h-0 min-h-[calc(100vh-6.4rem)] pl-[3rem] lg:mt-2 lg:m-16 lg:pt-0 pr-[1rem] py-[0rem] md:mt-0 md:pt-0 tm:flex-col sm:flex-row sm:px-[1.5rem] sm:mt-0"
    >
      <div className="flex flex-col sm:flex-row sm:items-center pt-0 justify-center w-full min-h-[58vh] tm:min-h-min tm:w-full sm:min-h-min sm:w-full sm:pt-0 tm:pt-0">
        <div className="flex flex-col justify-center sm:w-[70%] w-full sm:mr-5">
          <h1 className="font-[400] text-[2rem] md:text-[1.7rem] tm:text-[2rem] sm:text-[1.6rem]">
            Hi,
          </h1>
          <blockquote className="font-[800] text-[2rem] text-[#e9ba22;] mt-[-10px] lg:text-[2.4rem] md:text-[2rem] tm:text-[2.5rem] sm:text-[1rem]">
            I'm
            <span className="before:block mx-4 mb-6 mt-4 before:absolute before:-inset-2 before:-skew-y-[3deg] before:bg-[#e9ba22;] relative inline-block">
              <span className="relative text-[#fffffff0] dark:text-[#20262E]">
                Sai Shashank
              </span>
            </span>
          </blockquote>
          <div className="h-10 mt-4">
            <Typewriter />
          </div>
          <p className="dark:text-[#ccc] text-justify leading-loose pt-5 font-[400] mt-[-.8rem] text-custom-18 sm:text-[1rem] w-[90%] md:w-[95%] tm:w-full sm:w-full sm:mt-0">
            Graduated with a Masters in Computer Science from the University of
            Missouri-Kansas City, I bring 3 years of software development
            experience. Skilled in Spring Boot, ReactJS, and Node.js, I have
            developed full-stack applications, implemented microservices,
            optimized SQL Server operations, and created RESTful APIs. With a
            strong foundation in algorithms and data structures, I approach
            coding challenges with enthusiasm and a growth mindset. Explore my
            projects and experience to see how I can contribute to your team!
          </p>
          <div className="flex justify-start mt-5 mb-8">
            <button className="px-[1.6em] py-[.8em] bg-[#e9ba22] coursor-pointer rounded-[4px] flex justify-start items-center gap-1 border-[#e9ba22] border-2 lg:text-[.8rem] sm:text-[.8rem]">
              <a
                className="text-white font-bold font-sans font-[400]"
                href="https://drive.google.com/file/d/1l3-Thn_HdvKvtuJGw4Ni0b_3xbGER24d/view?usp=sharing"
                target="blank"
                download="my_cv.pdf"
              >
                Resume
              </a>
            </button>
          </div>
        </div>
        <div className="flex py-[10px] tm:mt-[40px] items-start mt-[-30px] tm:pr-0 sm:pr-0 sm:justify-between sm:flex-col">
          <div className="box">
            <div className="h-full justify-end flex items-center sm:justify-center">
              <img
                src={myImage}
                alt="main"
                className="h-[80%] min-h-[100px] min-w-[100px] tm:h-[36px] tm:mt-[200px] sm:min-h-[100px] sm:min-w-[100px] sm:ml-[30px]"
              />
            </div>
          </div>
        </div>
        <div className="flex place-content-center mt-7 ">
          <div className="flex flex-row sm:flex-col gap-4">
            <a
              rel="noreferrer"
              href="https://www.linkedin.com/in/sai-shashank-akkapelli"
              target="_blank"
            >
              <AiFillLinkedin size={40} className="cursor-pointer" />
            </a>
            <a
              rel="noreferrer"
              href="https://github.com/shashankk19"
              target="_blank"
            >
              <AiFillGithub size={40} className="cursor-pointer" />
            </a>
            <a
              rel="noreferrer"
              href="https://leetcode.com/shashankakkapelli"
              target="_blank"
            >
              <SiLeetcode size={40} className="cursor-pointer" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Main;

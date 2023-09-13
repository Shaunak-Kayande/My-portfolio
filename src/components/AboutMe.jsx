import React from "react";
import { Frontend, Backend, Languages } from "../assets/data/Skills.js";

const AboutMe = () => {
  console.log(Frontend);
  return (
    <div className="w-full md:h-screen pt-24">
      <h1 className="text-3xl md:text-4xl text-center font-semibold underline underline-offset-8 decoration-4 decoration-violet-700">
        About Me
      </h1>
      <div className="flex flex-col md:flex-row mt-14 md:space-x-36 justify-center px-5 md:px-0">
        <div className="md:w-1/3 ">
          <h1 className="text-xl md:text-3xl font-semibold mb-5">
            Get to know me
          </h1>
          <p className="text-justify text-sm md:text-base">
            I am a highly motivated and results-driven{" "}
            <span className="font-bold">Full-stack Developer</span> with a
            strong foundation in computer engineering. I hold a Bachelor's
            degree in{" "}
            <span className="font-bold">
              {" "}
              Computer Engineering from VIIT, Pune,
            </span>{" "}
            where I achieved an outstanding CGPA of 9.32. <br /> My journey into
            the world of software development has equipped me with a versatile
            skill set that encompasses both front-end and back-end technologies.
            I am deeply passionate about creating exceptional web experiences
            and thrive on solving complex problems with elegant solutions. I am
            a dedicated problem solver who excels in collaborative environments.{" "}
            <br /> Please feel free to contact me at{" "}
            <a
              href="mailto: shaunakk.2801@gmail.com"
              className="text-violet-700 font-bold"
            >
              shaunakk.2801@gmail.com
            </a>{" "}
            for collaboration or to discuss potential opportunities. Let's work
            together to create exceptional digital experiences!
          </p>
        </div>
        <div className="md:w-1/3 mt-10 md:mt-0">
          <h1 className="text-xl md:text-3xl font-semibold mb-5">Skills</h1>
          {/* Front-End */}
          <h1 className="text-base md:text-xl font-semibold mb-3">
            Front-End:
          </h1>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {Frontend.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-violet-700 p-1 md:p-2 text-sm md:text-base text-center rounded-md text-violet-700 font-semibold"
                >
                  {item}
                </div>
              );
            })}
          </div>
          {/* Back-End */}
          <h1 className="text-base md:text-xl font-semibold mb-3 mt-5">
            Back-End:
          </h1>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {Backend.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-violet-700 p-1 md:p-2 text-sm md:text-base text-center rounded-md text-violet-700 font-semibold"
                >
                  {item}
                </div>
              );
            })}
          </div>
          {/* Programming Languages */}
          <h1 className="text-base md:text-xl font-semibold mb-3 mt-5">
            Programming Languages:
          </h1>
          <div className="grid grid-cols-3 md:grid-cols-4 gap-4">
            {Languages.map((item, index) => {
              return (
                <div
                  key={index}
                  className="bg-white border-2 border-violet-700 p-1 md:p-2 text-sm md:text-base text-center rounded-md text-violet-700 font-semibold"
                >
                  {item}
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;

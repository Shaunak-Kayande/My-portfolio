import React from "react";
import bg1 from "../assets/img/bg.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";
import { IoIosArrowDown } from "react-icons/io";

const Home = ({ projectsRef }) => {
  return (
    <div
      className="relative w-full h-screen bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="text-3xl md:text-6xl text-center font-bold">
          Hello, I am Shaunak Kayande
        </div>
        <div className="text-xl text-white md:text-black md:text-2xl text-center w-2/3 mt-14 ">
          I am a passionate Fullstack Developer with a strong foundation in web
          development technologies.
        </div>
      </div>

      {/* See more about me */}
      <div
        onClick={() => {
          if (projectsRef && projectsRef.current) {
            projectsRef.current.scrollIntoView({ behavior: "smooth" });
          }
        }}
        className="absolute cursor-pointer flex flex-col justify-center items-center bottom-14 bg-purple-700 rounded-lg shadow-md px-3 py-1"
      >
        <h1 className=" text-white ">See my projects</h1>
        <IoIosArrowDown color="white" />
      </div>

      {/* Links */}
      <div className="hidden absolute md:flex flex-col left-0 space-y-3 p-2 rounded-md bg-white shadow-md">
        <a href="https://www.linkedin.com/in/shaunak-kayande-82790718b/">
          <FaLinkedin
            className="hover:bg-violet-300  py-3 rounded-md"
            size={"3rem"}
          />
        </a>
        <a href="https://github.com/Shaunak-Kayande">
          <FaGithub
            className="hover:bg-violet-300  py-3 rounded-md"
            size={"3rem"}
          />
        </a>
        <a href="mailto: shaunakk.2801@gmail.com">
          <BiLogoGmail
            className="hover:bg-violet-300  py-3 rounded-md"
            size={"3rem"}
          />
        </a>
      </div>
    </div>
  );
};

export default Home;

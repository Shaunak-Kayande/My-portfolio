import React from "react";
import bg1 from "../assets/img/bg.jpg";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { BiLogoGmail } from "react-icons/bi";

const Home = () => {
  return (
    <div
      className="w-full h-screen bg-cover flex items-center justify-center"
      style={{ backgroundImage: `url(${bg1})` }}
    >
      <div className="flex flex-col items-center justify-center">
        <div className="text-6xl text-center font-bold">
          Hello, I am Shaunak Kayande
        </div>
        <div className="text-2xl text-center w-2/3 mt-14 ">
          I am a passionate Fullstack Developer with a strong foundation in web
          development technologies.
        </div>
      </div>
      <div className="absolute flex flex-col left-0 space-y-3 p-2 rounded-md bg-white shadow-md">
        <FaLinkedin
          className="hover:bg-violet-300  py-3 rounded-md"
          size={"3rem"}
        />
        <FaGithub
          className="hover:bg-violet-300  py-3 rounded-md"
          size={"3rem"}
        />
        <BiLogoGmail
          className="hover:bg-violet-300  py-3 rounded-md"
          size={"3rem"}
        />
      </div>
    </div>
  );
};

export default Home;

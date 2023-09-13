import React from "react";
import logo from "../assets/img/logo.png";

const Navbar = ({ homeRef, aboutMeRef, projectsRef, footerRef }) => {
  return (
    <div className="fixed w-full h-24 md:h-20 md:flex items-center justify-between bg-white shadow-sm z-50">
      <div className="flex items-center md:justify-center overflow-hidden">
        <img
          src={logo}
          className="w-10 md:w-14 overflow-hidden object-contain ml-3 md:ml-10 mr-5 cursor-pointer"
          alt=""
          onClick={() => {
            if (homeRef && homeRef.current) {
              homeRef.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
        />
        <div className="text-lg md:text-2xl font-semibold">Shaunak Kayande</div>
      </div>
      <div className="flex items-center justify-center space-x-5 md:space-x-20 md:mr-28 md:text-xl text-violet-700 md:text-black font-semibold md:font-medium">
        <div
          onClick={() => {
            if (homeRef && homeRef.current) {
              homeRef.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="hover:text-violet-700 cursor-pointer"
        >
          Home
        </div>
        <div
          onClick={() => {
            if (aboutMeRef && aboutMeRef.current) {
              aboutMeRef.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="hover:text-violet-700 cursor-pointer"
        >
          About
        </div>
        <div
          onClick={() => {
            if (projectsRef && projectsRef.current) {
              projectsRef.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="hover:text-violet-700 cursor-pointer"
        >
          Projects
        </div>
        <div
          onClick={() => {
            if (footerRef && footerRef.current) {
              footerRef.current.scrollIntoView({ behavior: "smooth" });
            }
          }}
          className="hover:text-violet-700 cursor-pointer"
        >
          Contact
        </div>
      </div>
    </div>
  );
};

export default Navbar;

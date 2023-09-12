import React from "react";
import logo from "../assets/img/logo.png";

const Navbar = () => {
  return (
    <div className="fixed w-full h-20 flex items-center justify-between bg-white shadow-sm z-50">
      <div className="flex items-center justify-center overflow-hidden">
        <img
          src={logo}
          className="w-14 overflow-hidden object-contain ml-10 mr-5"
          alt=""
        />
        <div className="text-2xl font-semibold">Shaunak Kayande</div>
      </div>
      <div className="flex items-center justify-center space-x-20 mr-28 text-xl font-medium">
        <div className="hover:text-violet-700 cursor-pointer">Home</div>
        <div className="hover:text-violet-700 cursor-pointer">About</div>
        <div className="hover:text-violet-700 cursor-pointer">Projects</div>
        <div className="hover:text-violet-700 cursor-pointer">Contact</div>
      </div>
    </div>
  );
};

export default Navbar;

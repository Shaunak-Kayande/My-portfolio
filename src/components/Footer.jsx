import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-black text-white py-6">
      <div className="w-full  flex flex-col items-center">
        <div className="mb-14 mt-10 flex items-center justify-around w-full  px-12">
          <p className="text-sm">
            Made with React, JavaScript, Tailwind CSS, <br /> deployed on Vercel
          </p>
          <div className="flex space-x-4 items-center justify-center">
            <a
              href="https://www.linkedin.com/in/shaunak-kayande-82790718b/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaLinkedin className="text-3xl" />
            </a>
            <a
              href="https://github.com/Shaunak-Kayande"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaGithub className="text-3xl" />
            </a>
            <a
              href="mailto: shaunakk.2801@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
            >
              <FaEnvelope className="text-3xl" />
            </a>
          </div>
        </div>
        <div>
          <p className="text-sm">&copy; 2023 Made by Shaunak Kayande</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

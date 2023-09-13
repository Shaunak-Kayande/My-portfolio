import React from "react";
import projects from "../assets/data/Projects";

const Projects = () => {
  return (
    <div className="w-full flex flex-col justify-center items-center pt-24 pb-20 px-5 md:px-0">
      <h1 className="text-3xl md:text-4xl text-center font-semibold border-b-4 w-fit h-fit pb-2 border-violet-700">
        Projects
      </h1>
      <div className="space-y-20 mt-14">
        {projects.map((item, index) => {
          return (
            <div
              className="md:flex justify-center items-center md:space-x-20"
              key={index}
            >
              <div className="img-wrapper md:w-2/5 overflow-hidden relative border-4 border-gray-500 shadow-md">
                <img
                  src={item.img}
                  className="object-cover object-center "
                  alt=""
                />
                <a
                  href={item.link}
                  className="absolute inset-0 flex justify-center items-center font-bold text-lg "
                >
                  View Website
                </a>
              </div>
              <div className="md:w-1/4 space-y-5 mt-5 md:mt-0">
                <a
                  href={item.link}
                  className="text-xl md:text-2xl font-semibold text-violet-700 underline "
                >
                  {item.name}
                </a>
                <p className="text-justify text-sm md:text-base">
                  {item.description}
                </p>
                <div className="grid grid-cols-3 gap-3">
                  {item.techStack.map((item2, index2) => {
                    return (
                      <div
                        className="bg-white border-2 border-violet-700 p-1 text-sm text-center rounded-md text-violet-700 font-semibold"
                        key={index2}
                      >
                        {item2}
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default Projects;

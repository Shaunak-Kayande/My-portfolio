import { useRef, useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";
import Footer from "./components/Footer";

function App() {
  const homeRef = useRef(null);
  const aboutMeRef = useRef(null);
  const projectsRef = useRef(null);
  const footerRef = useRef(null);
  return (
    <div className="bg-gray-100">
      <Navbar
        homeRef={homeRef}
        aboutMeRef={aboutMeRef}
        projectsRef={projectsRef}
        footerRef={footerRef}
      />
      <div ref={homeRef}>
        <Home aboutMeRef={aboutMeRef} />
      </div>
      <div ref={aboutMeRef}>
        <AboutMe />
      </div>
      <div ref={projectsRef}>
        <Projects />
      </div>
      <div ref={footerRef}>
        <Footer />
      </div>
    </div>
  );
}

export default App;

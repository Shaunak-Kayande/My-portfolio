import { useState } from "react";
import "./App.css";
import Navbar from "./components/Navbar";
import Home from "./components/Home";
import AboutMe from "./components/AboutMe";
import Projects from "./components/Projects";

function App() {
  const [count, setCount] = useState(0);

  return (
    <div className="bg-gray-100">
      <Navbar />
      <Home />
      <AboutMe />
      <Projects />
    </div>
  );
}

export default App;

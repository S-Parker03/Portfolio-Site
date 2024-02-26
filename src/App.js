import React from "react";
import About from "./Components/About";
import Contact from "./Components/Contact";
import TechnicalProjects from "./Components/TechnicalProjects";
import CreativeProjects from "./Components/CreativeProjects";
import Skills from "./Components/Skills";
import Testimonials from "./Components/Testimonials";
import NavBar from "./Components/NavBar"
export default function MyApp() {
  return(
    <main className = "background">
      <NavBar />
      <About />
      <TechnicalProjects />
      <CreativeProjects />
      <Skills />
      <Testimonials />
      <Contact />
    </main>
  );
};

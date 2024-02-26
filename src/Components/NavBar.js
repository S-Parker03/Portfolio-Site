import React from "react";


export default function NavBar() {
    return (
      <list className="navcontainer">
        <a href = "#about" className="nav-but">About Me</a>
        <a href = "#tech" className="nav-but">My Past Work</a>
        <a href = "#creative" className="nav-but">My Creative Projects</a>
        <a href = "#skills" className="nav-but">My Skills</a>
        <a href = "#test" className="nav-but">Testimonials</a>
        <a href = "#contact" className="nav-but">Contact Me</a>
      </list>
    );
}

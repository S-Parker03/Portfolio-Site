import React from "react";


export default function NavBar() {
    return (
      <ul className="navcontainer">
        <li>
        <a href = "#about" className="nav-but">About Me</a>
        </li><li>
        <a href = "#tech" className="nav-but">My Past Work</a>
        </li><li>
        <a href = "#creative" className="nav-but">My Creative Projects</a>
        </li><li>
        <a href = "#skills" className="nav-but">My Skills</a>
        </li><li>
        <a href = "#test" className="nav-but">Testimonials</a>
        </li><li>
        <a href = "#contact" className="nav-but">Contact Me</a>
        </li>
      </ul>
    );
}

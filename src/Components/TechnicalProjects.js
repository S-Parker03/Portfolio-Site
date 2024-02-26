import React from "react";
import Gallery from "./Gallery"
import { technicalProjects } from "./data";

export default function TechnicalProjects(){
    return(
        <section id="tech" className = "projects">
            <h1 className="title">My Past Technical Work</h1>
            <Gallery data={technicalProjects}/>
        </section>
    );
}
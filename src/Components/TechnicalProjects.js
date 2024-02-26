import React from "react";
import {technicalProjects} from "./data";

export default function TechnicalProjects(){
    return(
        <section className = "projects">
            <h1 className="title">My Past Technical Work</h1>
            <Gallery data={technicalProjects}/>
        </section>
    );
}
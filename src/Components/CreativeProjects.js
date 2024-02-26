import React from "react";
import Gallery from "./Gallery"
import { creativeProjects } from "./data.js";

export default function CreativeProjects(){
    return(
        <section id="creative" className = "projects">
            <h1 className="title">My Creative Projects</h1>
            <Gallery data={creativeProjects}/>
        </section>
    );
}
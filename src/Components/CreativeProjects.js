import React from "react";
import {creativeProjects} from "./data";

export default function CreativeProjects(){
    return(
        <section className = "projects">
            <h1 className="title">My Past Creative Work</h1>
            <Gallery data={creativeProjects}/>
        </section>
    );
}
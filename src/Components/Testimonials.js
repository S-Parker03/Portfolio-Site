import React from "react";
import {testimonials} from "./data.js";
export default function Testimonials(){
    return(
        <section id="test" className="testimonials">
            <h1 className = "title">Testimonials</h1>
            <h2>Name</h2>
            <img className="portrait" alt ="Person goes here"></img>
            <figcaption>who they are</figcaption>
            <p className="body"></p>
        </section>
    );
}
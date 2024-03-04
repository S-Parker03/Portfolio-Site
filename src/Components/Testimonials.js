import React from "react";
import {testimonials} from "./data.js";
export default function Testimonials(){
    return(
        <section id="test" className="testimonials">
            <h1 className = "title">Testimonials</h1>
            <br></br>       
            <h2>Name</h2>
            <br></br>       
            <img className="portrait" alt ="Person goes here"></img>
            <figcaption>who they are</figcaption>
            <br></br>       
            <p className="body"></p>
        </section>
    );
}
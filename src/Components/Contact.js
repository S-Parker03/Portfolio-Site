import React from "react";

export default function Contact(){
    return(
        <section id="contact">
            <h1>Contact Me</h1>
            <br></br>
            <h2>Email</h2>
            <a>stanleyrp03@gmail.com</a>
            <br></br>
            <br></br>

            <form netlify name="contact">
                <h2>
                    Contact Form
                </h2>
                <p >
                    Lorem ipsum dolor sit amet consectetur, adipisicing elit. Illum
                    suscipit officia aspernatur veritatis. Asperiores, aliquid?
                </p>
                <br></br>
                <div>
                    <label htmlFor="name">
                        Name
                    </label>
                    <input
                    type="text"
                    id="name"
                    name="name"
                    />
                </div>
                <br></br>
                <div>
                    <label htmlFor="email">
                    Email
                    </label>
                    <input
                    type="email"
                    id="email"
                    name="email"
                    />
                </div>
                <br></br>
                <div >
                    <label htmlFor="message">
                    Message
                    </label>
                    <textarea
                    id="message"
                    name="message"
                    />
                </div>
                <br></br>
                <button type="submit">
                    Submit
                </button>
            </form>
        </section>
    );
}
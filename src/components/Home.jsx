import React, { useState, useEffect } from "react";
import '../css/Home.css'
import { BsInstagram, BsGithub, BsTwitter } from "react-icons/bs";

const Home = () => {
    const quotes = ["innovative", "useful", "incredible", "inspiring"],
    [state, setState] = useState(0);

    useEffect(() => {
        setTimeout(() => {
          setState((state) => state == 3 ? 0 : state + 1);
        }, 1000);
    });

    return (
        <div className="container">
            <div className="center">
                <p className="big-text">I design <em className="gradient-text">{quotes[state]}</em> projects.</p>
                <h3>Hi! I am Ulises; an experienced fullstack developer, focused on low-level IT and systems.</h3>
                <div className="mt-4">
                    <a href="https://cv.ulisesvina.me" className="button-primary">Get my CV</a>
                    <a href="mailto:contacto@ulisesvina.me" className="button-secondary">Email me</a>
                </div>
                <div className="mt-5">
                    <a href="https://instagram.com/ulisesvina" target="_blank" className="social-logo">
                        <BsInstagram/>
                    </a>
                    <a href="https://github.com/ulisesvina" target="_blank" className="social-logo">
                        <BsGithub/>
                    </a>
                    <a href="https://twitter.com/ulisesvina" target="_blank" className="social-logo">
                        <BsTwitter/>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Home;
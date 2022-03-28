import React, { useState, useEffect } from "react";
import '../styles/Home.module.css'
import { BsInstagram, BsGithub, BsTwitter } from "react-icons/bs";

const Home = () => {
    const quotes = ["innovative", "useful", "incredible", "inspiring"],
    [state, setState] = useState({
        quote: 1,
        char: 0
    });

    useEffect(() => {
        setTimeout(async () => {
            if(state.char == quotes[state.quote].length) {
                await new Promise(r => setTimeout(r, 1500));
                setState({
                    quote: state.quote == 3 ? 0 : state.quote + 1,
                    char: 1,
                })
            } else {
                setState({
                    quote: state.quote,
                    char: state.char + 1
                })
            }
        }, 150);
    });

    return (
        <section className="Home">
            <div className="container">
                <div className="center">
                    <p className="big-text">I design <em className="gradient-text">{quotes[state.quote].substring(0, state.char)}</em> projects.</p>
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
        </section>
    )
}

export default Home;
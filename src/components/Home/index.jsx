import React from "react";
import './home.css';
import { Link } from 'react-router-dom';
import pdf from "../Images/kenshaw_michaud_resume.pdf"

function scrollToTop(){
    window.scrollTo(0, 0)
};

function Home(){
    return(
        <main className='home-page' id='home-page'>
            <section className="hero-container">
                <h1>Hello - I’m Kenshaw.</h1>
                <h1>A Fullstack Developer, who uses <span className="indent">JavaScript</span> Frameworks to bring your ideas to life.</h1>  
                <div className="button-container">
                    <button className="view-button">
                        <div className="circle">
                            <span className="icon arrow"></span>
                        </div>
                        <Link to="/work">
                            <p className="button-text" onClick={scrollToTop}>VIEW MY WORK</p>
                        </Link>
                    </button>  
                </div> 
                <div className ="links-container">
                    <a href="https://github.com/ken862734801" target="_blank" rel="noreferrer">GitHub</a>
                    <span className="slant">/</span>
                    <a href="https://linkedin.com/in/kenshawmichaud" target="_blank" rel="noreferrer">LinkedIn</a>
                    <span className="slant">/</span>
                    <a href={pdf} target="_blank">Resume</a>
                </div>     
            </section>
        </main>
    )
}

export default Home;
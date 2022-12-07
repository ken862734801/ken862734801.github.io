import React from "react";
import './home.css';

function Home(){
    return(
        <main className='home-page' id='home-page'>
            <section className="hero-container">
                <h1>Hello - I’m Kenshaw.</h1>
                <h1>A Fullstack Developer, who uses <span className="indent">JavaScript</span> Technologies to bring your ideas to life.</h1>        
            </section>
        </main>
    )
}

export default Home;
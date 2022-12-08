import React from 'react';
import './work.css'

function Work (){
    return (
        <div className='work-page' id='work-page'>
            <div className='work-container'>
                <h1>My work.</h1>
                <div className='main-project-container'>
                    <h2>Fullstack</h2>
                    <section></section>
                </div>
                <div className='github-container'>
                    <h2>GitHub</h2>
                    <p> Here are some of the mini-projects I completed prior to enrolling in UCF's Full Stack Web Development Program.
                        Most of which were completed with the Odin Project's Fullstack JavaScript curriculum in mind.
                    </p>
                    <div className='project-list'>
                        <ul>
                            <li>
                                <span className='number'>01</span><a href="https://ken862734801.github.io/Etch-A-Sketch/" target="_blank">Etch A Sketch</a> 
                            </li>
                            <li>
                            <span className='number'>02</span><a href="https://ken862734801.github.io/Calculator/"  target="_blank">Calculator</a> 
                            </li>
                            <li>
                                <span className='number'>03</span><a href="https://ken862734801.github.io/Library-App/" target="_blank">Library App</a> 
                            </li>
                            <li>
                                <span className='number'>04</span><a href="https://ken862734801.github.io/Rock-Paper-Scissors-Game/" target="_blank">Rock Paper Scissors</a> 
                            </li>
                            <li>
                                <span className='number'>05</span><a href="https://ken862734801.github.io/restaurant-website/" target="_blank">Restaurant Website</a> 
                            </li>
                            <li>
                                <span className='number'>06</span><a href="https://ken862734801.github.io/quiz-app/" target="_blank">Quiz App</a> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;
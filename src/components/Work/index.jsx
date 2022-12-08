import React from 'react';
import './work.css'

function Work (){
    return (
        <div className='work-page' id='work-page'>
            <div className='work-container'>
                <h1>My work.</h1>
                <p>A collection of my projects, ranging from static pages to MERN applications.</p>
                <div className='main-project-container'>
                    <h2>Recent</h2>
                    <section className='project'>
                        <div className='project-text-container'>
                            <h2>E-Commerce Website</h2>
                            <p>A work in progress.</p>
                        </div>
                        <div className='project-image-container'>
                        </div>
                    </section>
                    <section className='project'>
                        <div className='project-text-container'>
                            <h2>Higher or Lower</h2>
                            <p>A work in progress.</p>
                        </div>
                        <div className='project-image-container'>
                        </div>
                    </section>
                </div>
                <div className='github-container'>
                    <h2>GitHub</h2>
                    <p> Here are some of the mini-projects I worked on before and during UCF's Full Stack Web Development Program.
                        Most of which were done with the Odin Project's Fullstack JavaScript curriculum in mind.
                    </p>
                    <div className='project-list'>
                        <ul>
                            <li>
                                <div>
                                    <span className='number'>01</span><p>Weather App</p> 
                                </div>
                                <div className='code-link-container'>
                                    <a href="https://ken862734801.github.io/weather-app/" target="_blank">DEMO</a>
                                    <a href="https://github.com/ken862734801/weather-app" target="_blank">CODE</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className='number'>02</span><p>Etch A Sketch</p> 
                                </div>
                                <div className='code-link-container'>
                                    <a href="https://ken862734801.github.io/Etch-A-Sketch/" target="_blank">DEMO</a>
                                    <a href="https://github.com/ken862734801/Etch-A-Sketch/" target="_blank">CODE</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className='number'>03</span><p>Calculator</p> 
                                </div>
                                <div className='code-link-container'>
                                    <a href="https://ken862734801.github.io/Calculator/"  target="_blank">DEMO</a>
                                    <a href="https://github.com/ken862734801/Calculator/" target="_blank">CODE</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className='number'>04</span><p>Library App</p> 
                                </div>
                                <div className='code-link-container'>
                                    <a href="https://ken862734801.github.io/Library-App/"  target="_blank">DEMO</a>
                                    <a href="https://github.com/ken862734801/Library-App/" target="_blank">CODE</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className='number'>05</span><p>Tic Tac Toe</p> 
                                </div>
                                <div className='code-link-container'>
                                    <a href="https://ken862734801.github.io/Tic-Tac-Toe/"  target="_blank">DEMO</a>
                                    <a href="https://github.com/ken862734801/Tic-Tac-Toe/" target="_blank">CODE</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className='number'>06</span><p>Quiz App</p> 
                                </div>
                                <div className='code-link-container'>
                                    <a href="https://ken862734801.github.io/quiz-app/" target="_blank">DEMO</a>
                                    <a href="https://github.com/ken862734801/quiz-app/" target="_blank">CODE</a>
                                </div>
                            </li>
                            <li>
                                <div>
                                    <span className='number'>07</span><p>Restaurant Website</p> 
                                </div>
                                <div className='code-link-container'>
                                    <a href="https://ken862734801.github.io/restaurant-website/" target="_blank">DEMO</a>
                                    <a href="https://github.com/ken862734801/restaurant-website/" target="_blank">CODE</a>
                                </div>
                            </li>
                            {/* <li>
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
                            </li> */}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;
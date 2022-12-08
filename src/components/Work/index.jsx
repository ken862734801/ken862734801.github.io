import React from 'react';
import './work.css'

function Work (){
    return (
        <div className='work-page' id='work-page'>
            <div className='work-container'>
                <h1>My work.</h1>
                <div className='github-container'>
                    <h2>GitHub</h2>
                    <p> Here are some of the projects I completed prior to enrolling in UCF's Full Stack Web Development Program.
                        Most of which were completed with the Odin Project's Fullstack JavaScript curriculum in mind.
                    </p>
                    <div className='project-list'>
                        <ul>
                            <li>
                                <span className='number'>01</span><a href="">Tic-Tac-Toe</a> 
                            </li>
                            <li>
                                <span className='number'>02</span><a href="">Calculator</a> 
                            </li>
                            <li>
                                <span className='number'>03</span><a href="">Etch-A-Sketch</a> 
                            </li>
                            <li>
                                <span className='number'>04</span><a href="">Library App</a> 
                            </li>
                            <li>
                                <span className='number'>05</span><a href="">Rock Paper Scissors</a> 
                            </li>
                            <li>
                                <span className='number'>06</span><a href="">Landing Page</a> 
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Work;
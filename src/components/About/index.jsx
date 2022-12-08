import React from 'react';
import './about.css';

function About (){
    return (
        <main className='about-page' id='about-page'>
            <div className='about-container'>
                <h1>About me.</h1>
                <div className='biography'>
                    <p> 
                        I am a Full Stack Developer, with a background in Biology, who is looking to pivot from previous healthcare aspirations towards a career in web development.
                        Earlier this year I began self-learning through the Odin Project's online curriculum and have since fallen in love with the creativity and problem-solving aspects of development.
                        I primarily use the MERN Stack, MongoDB, Express, React, and Node, to complete my projects. 
                    </p>
                    <p>
                        When I am not programming, I like to cook, listen to podcasts, and play anything made by Riot Games. I am also a HUGE fan of the NPR Tiny Desk series and even though
                        you didn't ask, my top three favorite performances were by Usher, Mac Miller, and Daniel Caesar. I highly recommend checking them out.  
                    </p>
                </div>
            </div>
        </main>
    )
}
export default About;
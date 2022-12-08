import React from 'react';
import './about.css';

function About (){
    return (
        <main className='about-page' id='about-page'>
            <div className='about-container'>
                <h1>About me.</h1>
                <div className='biography'>
                    <p> I am a Full Stack Developer, with a background in Biology, who is currently looking to pivot from my previous healthcare aspirations towards a career in web development.
                        Earlier this year I began self-learning through the Odin Project's online curriculum and have since fallen in love with the creativity and problem-solving aspects of development.
                        I primarily use the MERN Stack - MongoDB, Express, React, and Node, to complete my projects; however, I do have plans to learn other frameworks, such as React Native and Next.js, in the future.
                    </p>
                </div>
            </div>
        </main>
    )
}
export default About;
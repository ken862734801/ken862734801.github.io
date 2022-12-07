import React from 'react';
import './contact.css';


function Contact () {
    return (
        <main className='contact-page' id='contact-page'>
            <div className='contact-container'>
                <h1>Get in touch.</h1>
                <p>I'm always open to discussing projects and collaborating with others. Feel free to contact me. </p>
                <div className='contact-form-container'>
                    <form>
                        <div className='form-input-wrapper'>
                            <div className='form-input-error'></div>
                            <div className='form-input-container'>
                                <input type='text' placeholder='Your Name'></input>
                            </div>
                        </div>
                        <div className="form-input-wrapper">
                            <div className='form-input-error'></div>
                            <div className='form-input-container'>
                                <input type='text' placeholder='Your Email'></input>
                            </div>
                        </div>
                        <div className="form-input-wrapper">
                            <div className='form-input-error'></div>
                            <div className='form-input-container'>
                                <input type='text' placeholder='Subject'></input>
                            </div>
                        </div>
                        <div className='form-text-wrapper'>
                            <div className='form-input-error'></div>
                            <div className='form-text-container'>
                                <textarea placeholder='Message'></textarea>
                            </div>
                        </div>   
                    </form>
                </div>
            </div>
        </main>
    )
};

export default Contact;
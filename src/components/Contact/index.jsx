import React from 'react';
import './contact.css';
import Footer from '../Footer';


function Contact () {
    return (
        <main className='contact-page' id='contact-page'>
            <div className='contact-container'>
                <h1>Get in touch.</h1>
                <p>I'm always open to discussing ideas and collaborating with others. Feel free to contact me. </p>
                <div className='contact-form-container'>
                    <form>
                        <div className='form-input-wrapper'>
                            <div className='form-input-error'></div>
                            <div className='form-input-container'>
                                <input type='text' placeholder='Your Name' required></input>
                            </div>
                        </div>
                        <div className="form-input-wrapper">
                            <div className='form-input-error'></div>
                            <div className='form-input-container'>
                                <input type='email' placeholder='Your Email' required></input>
                            </div>
                        </div>
                        <div className="form-input-wrapper">
                            <div className='form-input-error'></div>
                            <div className='form-input-container'>
                                <input type='text' placeholder='Subject' required></input>
                            </div>
                        </div>
                        <div className='form-text-wrapper'>
                            <div className='form-input-error'></div>
                            <div className='form-text-container'>
                                <textarea placeholder='Message' required></textarea>
                            </div>
                        </div> 
                        <div className='form-button-wrapper'>
                        <button className="submit-button">
                            <div className="circle">
                                <span className="icon arrow"></span>
                            </div>
                            <p className="button-text">SEND MESSAGE</p>
                        </button>  
                        </div>
                    </form>
                </div>
            </div>
        </main>
    )
};

export default Contact;
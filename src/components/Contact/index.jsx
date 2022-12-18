import React from 'react';
import './contact.css';



function Contact () {
    return (
        <main className='contact-page' id='contact-page'>
            <div className='contact-container'>
                <h1>Get in touch.</h1>
                <p>Have an idea in mind? I'm always open to discussing projects and collaborating with others. <br></br>Feel free to message me below or email me at <span>kenshawmichaud@gmail.com</span></p>
                <div className='contact-form-container'>
                    <form action="https://formsubmit.co/kenshawmichaud@gmail.com" method="POST">
                        <div className='form-input-wrapper'>
                            <div className='form-input-error'></div>
                            <div className='form-input-container'>
                                <input type='text' name='name' placeholder='Your Name' required></input>
                            </div>
                        </div>
                        <div className="form-input-wrapper">
                            <div className='form-input-error'></div>
                            <div className='form-input-container'>
                                <input type='email' name='email' placeholder='Your Email' required></input>
                            </div>
                        </div>
                        <div className="form-input-wrapper">
                            <div className='form-input-error'></div>
                            <div className='form-input-container'>
                                <input type='text' name='subject' placeholder='Subject' required></input>
                            </div>
                        </div>
                        <div className='form-text-wrapper'>
                            <div className='form-input-error'></div>
                            <div className='form-text-container'>
                                <textarea name='message' placeholder='Message' required></textarea>
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
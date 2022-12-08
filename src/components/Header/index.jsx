import React from "react";
import './header.css';
import { Link } from 'react-router-dom';
import close from "../Images/close.png"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faX } from '@fortawesome/free-solid-svg-icons'



function openNav(){
    document.getElementById("sideNav").style.width = "100%";
    console.log("Opening!")
};

function closeNav(){
    document.getElementById("sideNav").style.width = "0";
    console.log("Closing!")
};

function Header (){
    return(
        <header>
            <div className="header-container">
                <Link to="/">
                <div className="logo">
                    <h1>KM.</h1>
                </div>
                </Link>
                <navbar>
                    <Link to="/home">
                        <a>Home</a>
                    </Link>
                    <Link to="/about">
                        <a>About</a>
                    </Link>
                    <Link to="/work">
                        <a>Work</a>
                    </Link>
                    <Link to="/contact">
                        <a>Contact</a>
                    </Link>
                    <p id="menu" onClick={openNav}>&#9776;</p>
                </navbar>
            </div>
            <div className="sidenav" id="sideNav">
                <img src={close} className="closebtn" onClick={closeNav}></img>
                    <Link to="/home">
                        <a>Home</a>
                    </Link>
                    <Link to="/about">
                        <a>About</a>
                    </Link>
                    <Link to="/work">
                        <a>Work</a>
                    </Link>
                    <Link to="/contact">
                        <a>Contact</a>
                    </Link>
            </div>
        </header>
    )
}

export default Header;
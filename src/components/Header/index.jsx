import React from "react";
import './header.css';
import { Link } from 'react-router-dom';
import close from "../Images/close.png"


let theme = document.getElementsByTagName("meta")[2];


function openNav(){
    document.getElementById("sideNav").style.width = "100%";
    setTimeout(function(){
        theme.content = "#111";
    }, 400)
    console.log("Opening!")  
};

function closeNav(){
    document.getElementById("sideNav").style.width = "0";
    setTimeout(function(){
        theme.content = "#ffffff";
    }, 385)
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
                        <a onClick={closeNav}>Home</a>
                    </Link>
                    <Link to="/about">
                        <a onClick={closeNav}>About</a>
                    </Link>
                    <Link to="/work">
                        <a onClick={closeNav}>Work</a>
                    </Link>
                    <Link to="/contact">
                        <a onClick={closeNav}>Contact</a>
                    </Link>
            </div>
        </header>
    )
}

export default Header;
import React from "react";
import './header.css';
import { Link } from 'react-router-dom';



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
                    <a id="menu-bars"></a>
                </navbar>
            </div>
        </header>
    )
}

export default Header;
import React from "react";
import './header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Header (){
    return(
        <header>
            <div className="header-container">
            <navbar>
                <a>Home</a>
                <a>About</a>
                <a>Work</a>
                <a>Contact</a>
                <a id="menu-bars">☰</a>
            </navbar>
            </div>
        </header>
    )
}

export default Header;
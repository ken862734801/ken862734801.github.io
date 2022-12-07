import React from "react";
import './header.css';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'


function Header (){
    return(
        <header>
            <navbar>
                <a>Home</a>
                <a>About</a>
                <a>Work</a>
                <a>Contact</a>
                <FontAwesomeIcon icon={faBars} id="menu-bars" />
            </navbar>
        </header>
    )
}

export default Header;
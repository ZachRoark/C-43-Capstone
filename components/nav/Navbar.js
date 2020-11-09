
import React from "react";
import { Link } from "react-router-dom";
import logo from "../../img/logo.png"
import "./Navbar.css";

export const Navbar = (props) => {
    return (
            <ul className="navbar">
                <ul className="navbarHome"><Link className="navbarLink" to="/projects"><h3>Home</h3></Link>
                </ul>
                
                <img src={logo} className= "navLogo" alt="CraftIt logo"/>

                <ul className="navbarArchive"><Link className="navbarLink" to="/archive"><h3>Archive</h3></Link>
                </ul>
                
            </ul>
    )
};


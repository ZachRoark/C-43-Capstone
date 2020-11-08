
import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export const Navbar = (props) => {
    return (
        <ul className="navbar">
            <li className="navbar__archive">
                <Link className="navbar__link" to="/archive">Archive</Link>
            </li>
            <li className="navbar__home">
                <Link className="navbar__link" to="/projects">Home</Link>
            </li>
        </ul>
        // add logo img
    )
};


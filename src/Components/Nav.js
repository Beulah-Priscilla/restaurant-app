import React, { useState } from "react";
import logo from "../images/Logo.svg"


const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`navbar ${menuOpen ? "open" : ""}`}>
            <a className="logo" href="/">
                <img src={logo} alt="Logo"/>
            </a>
            
            {/* nav items */}
            <ul className={`nav-links`}>
                <li>
                    <a href='/'>Home</a>
                </li>
                <li>
                    <a href='/'>About</a>
                </li>
                <li>
                    <a href='/'>Services</a>
                </li>
                <li>
                    <a href='/'>Menu</a>
                </li>
                <li>
                    <a href='/'>Reservations</a>
                </li>
                <li>
                    <a href='/'>Order Online</a>
                </li>
                <li>
                    <a href='/'>Login</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
import React, { useState } from "react";
import { FaBars, FaTimes } from 'react-icons/fa';
import logo from "../../images/Logo.svg";
import './Nav.css';


const Nav = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav className={`navbar`} aria-label="Main Navigation">
            <a className="logo" href="/" aria-label="Homepage">
                <img src={logo} alt="Logo"/>
            </a>
            <div className="menu-icon" onClick={toggleMenu} aria-label="Menu Toggle">
                {menuOpen ? <FaTimes aria-label="Close Menu" /> : <FaBars aria-label="Open Menu" />}
            </div>
            {/* nav items */}
            <ul className={menuOpen ? "nav-links active" : "nav-links"}>
                <li>
                    <a href='/' aria-label="Home">Home</a>
                </li>
                <li>
                    <a href='/' aria-label="About">About</a>
                </li>
                <li>
                    <a href='/' aria-label="Services">Services</a>
                </li>
                <li>
                    <a href='/' aria-label="Menu">Menu</a>
                </li>
                <li>
                    <a href='/' aria-label="Reservations">Reservations</a>
                </li>
                <li>
                    <a href='/' aria-label="Order Online">Order Online</a>
                </li>
                <li>
                    <a href='/' aria-label="Login">Login</a>
                </li>
            </ul>
        </nav>
    );
};

export default Nav;
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
        <nav className={`navbar`}>
            <a className="logo" href="/">
                <img src={logo} alt="Logo"/>
            </a>
            <div className="menu-icon" onClick={toggleMenu}>
                {menuOpen ? <FaTimes /> : <FaBars />}
            </div>
            {/* nav items */}
            <ul className={menuOpen ? "nav-links active" : "nav-links"}>
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
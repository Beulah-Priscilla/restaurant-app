import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import logo from "../../images/logo-square.png";

const Footer = () => {
    return (
        <footer className="footer">
            <img className="logo" src={ logo }></img>

            <nav className="navbar">
                <ul className="links">
                    <li><a href="/">Home</a></li>
                    <li><a href="/">About</a></li>
                    <li><a href="/">Menu</a></li>
                    <li><a href="/">Reservations</a></li>
                    <li><a href="/">Order Online</a></li>
                    <li><a href="/">Login</a></li>
                </ul>

                <ul className="contacts">
                    <li>Ontario, Canada A8D 8E4</li>
                    <li>+1 123 123 1234</li>
                </ul>

                <ul className="socials">
                    <li><a href="www.instagram.com"><FaInstagram /> instagram</a></li>
                </ul>
            </nav>
        </footer>
    );
};
export default Footer;
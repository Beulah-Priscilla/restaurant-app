import React from "react";
import "./Footer.css";
import { FaInstagram } from "react-icons/fa";
import logo from "../../images/logo-square.png";

const Footer = () => {
    return (
        <footer>
            <div className="container footer-container">
                <section className="footer-column">
                    <img className="logo" src={ logo }></img>
                </section>
                <section className="footer-column">
                    <h4>Navigations</h4>
                    <ul className="footer-links">
                        <li><a href="/">Home</a></li>
                        <li><a href="/">About</a></li>
                        <li><a href="/">Menu</a></li>
                        <li><a href="/">Reservations</a></li>
                        <li><a href="/">Order Online</a></li>
                        <li><a href="/">Login</a></li>
                    </ul>
                </section>
                <section className="footer-column">
                    <h4>Contacts</h4>
                    <ul className="contacts">
                        <li>Ontario, Canada A8D 8E4</li>
                        <li>+1 123 123 1234</li>
                    </ul>
                </section>
                <section className="footer-column">
                    <h4>Socials</h4>
                    <ul className="socials">
                        <li><a href="www.instagram.com"><FaInstagram /> instagram</a></li>
                    </ul>
                </section>
            </div>
        </footer>
    );
};
export default Footer;
import React from "react";
import Nav from "./Nav";
import logo from "../images/Logo.svg";

// console.log(logo);

const Header = () => {
    return (
        <header>
            <img src={logo} alt="Little Lemon Logo" />
            <Nav />
        </header>
    );
};

export default Header;
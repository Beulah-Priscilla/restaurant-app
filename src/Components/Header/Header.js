import React from "react";
import Nav from "../Nav/Nav";
import "./Header.css"

// console.log(logo);

const Header = () => {
    return (
        <header className="container" aria-label="Header">
            <section>
                <Nav />
            </section>
        </header>
    );
};

export default Header;
import React from "react";
import Nav from "../Nav/Nav";
import "./Header.css"

// console.log(logo);

const Header = () => {
    return (
        <header className="container">
            <section>
                <Nav />
            </section>
        </header>
    );
};

export default Header;
import React from "react";
import { Link } from "react-router-dom"
import "./CallToAction.css";
import heroImage from "../../images/restauranfood.jpg"


const CallToAction = () => {

    return (
        <main className="hero-section">
            <div className="container hero-section">
                <section className="hero-content">
                    <header>
                        <h1>Little Lemon</h1>
                        <h2>Chicago</h2>
                    </header>
                    <p>
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                        euismod condimentum ante finibus consequat. Donec Mauris accumsan
                        tellus ut, vitae rutrum felis scelerisque at.
                    </p>
                    <Link to="/booking">
                        <button className="reserve-button">
                            Reserve a table
                        </button>
                    </Link>
                </section>
                <figure className="hero-image">
                    <img src={heroImage} alt="Delicious Food" />
                </figure>
            </div>
        </main>
    );
};

export default CallToAction;
import React from "react";
import { Link } from "react-router-dom"
import "./CallToAction.css";
import heroImage from "../../images/restauranfood.jpg"


const CallToAction = () => {

    return (
        <main className="hero-section" aria-label="Hero Section">
            <div className="container hero-section">
                <section className="hero-content">
                    <header>
                        <h1 aria-label="Little Lemon">Little Lemon</h1>
                        <h2 aria-label="Chicago">Chicago</h2>
                    </header>
                    <p aria-label="Description">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
                        euismod condimentum ante finibus consequat. Donec Mauris accumsan
                        tellus ut, vitae rutrum felis scelerisque at.
                    </p>
                    <Link to="/booking">
                        <button className="reserve-button" aria-label="Reserve a table">
                            Reserve a table
                        </button>
                    </Link>
                </section>
                <figure className="hero-image">
                    <img src={heroImage} alt="Delicious Food" aria-label="Delicious Food Image"/>
                </figure>
            </div>
        </main>
    );
};

export default CallToAction;
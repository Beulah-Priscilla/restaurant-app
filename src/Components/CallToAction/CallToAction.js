import React from "react";
import { useNavigate } from "react-router-dom"
import "./CallToAction.css";
import heroImage from "../../images/restauranfood.jpg"


const CallToAction = () => {
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        navigate("/booking")
    };

    return (
        <main className="hero-section">
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
                <button className="reserve-button" onClick={handleSubmit}>
                    Reserve a table
                </button>
            </section>
            <figure className="hero-image">
                <img src={heroImage} alt="Delicious Food" />
            </figure>
        </main>
    );
};

export default CallToAction;
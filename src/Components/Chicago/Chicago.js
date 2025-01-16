import React from "react";
import "./Chicago.css"
import image from "../../images/restaurant.jpg"
const Chicago = () => {
  return (
    <section className="chicago-section" aria-label="Chicago Section">
      <div className="container chicago-section">
        <section className="content">
          <header>
            <h2 className="title" aria-label="Little Lemon">Little Lemon</h2>
            <h3 className="location" aria-label="Chicago">Chicago</h3>
          </header>
          <p className="description" aria-label="Description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
            euismod condimentum ante finibus consequat. Donec vitae nisl mollis,
            vehicula sem ut, imperdiet tellus. Duis magna tellus, ultrices quis
            molestie nec, ullamcorper in urna. Mauris accumsan tellus mi, vitae
            rutrum felis scelerisque at.</p>
        </section>
        <figure className="image-container">
          <img className="image" src={image} alt="Little Lemon Restaurant" aria-label="Little Lemon Restaurant Image"/>
        </figure>
      </div>
    </section>
  )
}
export default Chicago;
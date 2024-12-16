import React from "react";
import "./Chicago.css"
import image from "../../images/restaurant.jpg"
const Chicago = () => {
  return (
    <section className="chicago-section">
      <section className="content">
        <header>
          <h2 className="title">Little Lemon</h2>
          <h3 className="location">Chicago</h3>
        </header>
        <p className="description">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
          euismod condimentum ante finibus consequat. Donec vitae nisl mollis,
          vehicula sem ut, imperdiet tellus. Duis magna tellus, ultrices quis
          molestie nec, ullamcorper in urna. Mauris accumsan tellus mi, vitae
          rutrum felis scelerisque at.</p>
      </section>
      <figure className="image-container">
        <img className="image" src={image} alt="Little Lemon Restaurant"/>
      </figure>
    </section>
  )
}
export default Chicago;
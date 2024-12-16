import React from "react";
import "./Special.css";
import logo from "../../images/lemon dessert.jpg";

const specialsData = [
  {
    title: "Lemon pie",
    description: "Our Lemon Pie is the perfect combination of tangy and sweet. Made with fresh lemons, this pie has a light and creamy filling that is nestled in a flaky, buttery crust.",
    price: "$5.99",
    image: logo,
  },
  {
    title: "Lemon pie",
    description: "Our Lemon Pie is the perfect combination of tangy and sweet. Made with fresh lemons, this pie has a light and creamy filling that is nestled in a flaky, buttery crust.",
    price: "$5.99",
    image: logo,
  },
  {
    title: "Lemon pie",
    description: "Our Lemon Pie is the perfect combination of tangy and sweet. Made with fresh lemons, this pie has a light and creamy filling that is nestled in a flaky, buttery crust.",
    price: "$5.99",
    image: logo,
  },
];

const Special = () => {
  return (
    <section className="specials">
      <h2 className="specials-heading">This week's specials</h2>
      <div className="specials-container">
        {specialsData.map((special, index) => (
          <article key={index} className="special-card">
            <img
              src={special.image}
              alt={special.title}
              className="special-image"
              />
              <div className="special-content">
                <div className="special-header">
                  <h3 className="special-title">{special.title}</h3>
                  <span className="special-price">{special.price}</span>
                </div>
                <p className="special-description">{special.description}</p>
                <a href="#" className="special-order">
                  Order a Delivery <span role="img" aria-label="truck">🚚</span>
                </a>
              </div>
          </article>
        ))}
      </div>
    </section>
  );
};

export default Special;

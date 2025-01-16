import React from 'react';
import './CustomersSay.css';
import person1 from "../../images/persons/person1.jpeg"
import person2 from "../../images/persons/person2.jpeg"
import person3 from "../../images/persons/person3.jpeg"
import person4 from "../../images/persons/person4.jpeg"

const testimonials = [
  {
    name: "Carolina Manuela",
    text: "The food at Little Lemon is always delicious and fresh",
    image: person1,
    stars: "★★★★★",
  },
  {
    name: "Diego",
    text: "The aroma of the dishes is enough to make your mouth water.",
    image: person2,
    stars: "★★★★★",
  },
  {
    name: "Yara Duarte",
    text: "Little Lemon is as delightful to the eye as it is to the taste buds.",
    image: person3,
    stars: "★★★★",
  },
  {
    name: "Dinis do Guna",
    text: "Never fails to impress with their succulent and savory menu offerings.",
    image: person4,
    stars: "★★★★★",
  },
];

function CustomersSay() {
  return (
    <section className="customers-say">
      <h2 className="title">Testimonials</h2>
      <div className='container testimonials-container'>
        {testimonials.map((testimonial, index) => (
          <article key={index} className='testimonial-card'>
            <div className='stars'>{testimonial.stars}</div>
            <p>{testimonial.text}</p>
            <div className='author'>
              <img src={testimonial.image} alt={`${testimonial.name}'s profile`}/>
              <span>{testimonial.name}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}

export default CustomersSay;

import React from 'react';
import './CustomersSay.css';

const testimonials = [
  {
    name: "Carolina Manuela",
    text: "The food at Little Lemon is always delicious and fresh",
    image: "https://via.placeholder.com/40",
    stars: "★★★★★",
  },
  {
    name: "Diego",
    text: "The aroma of the dishes is enough to make your mouth water.",
    image: "https://via.placeholder.com/40",
    stars: "★★★★★",
  },
  {
    name: "Yara Duarte",
    text: "Little Lemon is as delightful to the eye as it is to the taste buds.",
    image: "https://via.placeholder.com/40",
    stars: "★★★★",
  },
  {
    name: "Dinis do Guna",
    text: "Never fails to impress with their succulent and savory menu offerings.",
    image: "https://via.placeholder.com/40",
    stars: "★★★★★",
  },
];

function CustomersSay() {
  return (
    <section className="customers-say">
      <h2 className="title">Testimonials</h2>
      <div className='testimonials-container'>
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

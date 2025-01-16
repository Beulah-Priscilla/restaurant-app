import React from 'react';
import { useLocation } from 'react-router-dom';
import './ConfirmedBooking.css'

const ConfirmedBooking = () => {
  const location = useLocation();
  const { date, time, guests, occasion } = location.state || {};
  return (
    <div className="container booking-confirmation">
      <header>
        <h2 className="title" aria-label="Booking Confirmation">Booking has been Confirmed</h2>
      </header>
      <section>
        <p className="details" aria-label={`Date: ${date}`}>Date: {date}</p>
        <p aria-label={`Time: ${time}`}>Time: {time}</p>
        <p aria-label={`Guests: ${guests}`}>Guests: {guests}</p>
        <p aria-label={`Occasion: ${occasion}`}>Occasion: {occasion}</p>
      </section>
    </div>
  );
};

export default ConfirmedBooking;
import React from 'react';
import { useLocation } from 'react-router-dom';
import './ConfirmedBooking.css'

const ConfirmedBooking = () => {
  const location = useLocation();
  const { date, time, guests, occasion } = location.state || {};
  return (
    <div className="container booking-confirmation">
      <header>
        <h2 className="title">Booking has been Confirmed</h2>
      </header>
      <section>
        <p className="details">Date: {date}</p>
        <p>Time: {time}</p>
        <p>Guests: {guests}</p>
        <p>Occasion: {occasion}</p>
      </section>
    </div>
  );
};

export default ConfirmedBooking;
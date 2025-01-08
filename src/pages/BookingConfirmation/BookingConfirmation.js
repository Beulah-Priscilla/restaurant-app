import React from 'react'; 
import { useLocation } from 'react-router-dom';

const BookingConfirmation = () => {
  const location = useLocation();
  const { date, time, guests, occasion } = location.state || {};
  return (
    <div>
      <h2>Booking has been Confirmed</h2>
      <p>Date: {date}</p>
      <p>Time: {time}</p>
      <p>Guests: {guests}</p>
      <p>Occasion: {occasion}</p>
    </div>
  );
};

export default BookingConfirmation;
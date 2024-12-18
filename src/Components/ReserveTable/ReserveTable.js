import React, { useState } from 'react';
import './ReserveTable.css';

const ReserveTable = () => {
  // Define state variables for the form fields
  const [date, setDate] = useState('');
  const [time, setTime] = useState('');
  const [guests, setGuests] = useState(1);
  const [occasion, setOccasion] = useState('Birthday');
  const [availableTimes] = useState(['17:00', '18:00', '19:00']);

  // Handlers to update state when form inputs change
  const handleDateChange = (event) => {
    setDate(event.target.value);
  };

  const handleTimeChange = (event) => {
    setTime(event.target.value);
  };

  const handleGuestsChange = (event) => {
    setGuests(Number(event.target.value));
  };

  const handleOccasionChange = (event) => {
    setOccasion(event.target.value);
  };

  // Handle form submission (for now just log the values)
  const handleSubmit = (event) => {
    event.preventDefault();
    console.log({ date, time, guests, occasion });
  };

  return (
    <div className="reserve-container">
      {/* Heading and subheading */}
      <div className="header-wrapper">
        <h2>Reserve a table</h2>
        <p>Reserve your table at Little Lemon Today!</p>
      </div>

      {/* Main Content Area: Form and Paragraph */}
      <div className="content-wrapper">
        {/* Form Section */}
        <div className="form-wrapper">
          <form className="reserve-form" onSubmit={handleSubmit}>
            <label htmlFor="date">Choose date</label>
            <input
              type="date"
              id="date"
              value={date}
              onChange={handleDateChange}
            />

            <label htmlFor="time">Choose time</label>
            <select id="time" value={time} onChange={handleTimeChange}>
              {availableTimes.map((availableTime) => (
                <option key={availableTime} value={availableTime}>
                  {availableTime}
                </option>
              ))}
            </select>

            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              id="guests"
              min="1"
              max="10"
              value={guests}
              onChange={handleGuestsChange}
            />

            <label htmlFor="occasion">Occasion</label>
            <select
              id="occasion"
              value={occasion}
              onChange={handleOccasionChange}
            >
              <option>Birthday</option>
              <option>Anniversary</option>
              <option>Other</option>
            </select>

            <button type="submit" className="submit-btn">
              Make Your Reservation
            </button>
          </form>
        </div>

        {/* Descriptive Text */}
        <div className="text-wrapper">
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam in
            purus vitae neque commodo pulvinar. Nunc venenatis quis lorem ac
            varius. Curabitur justo est, pretium eget metus at, auctor rhoncus
            elit. Donec eget massa sem. Pellentesque pellentesque enim et neque
            scelerisque, eget scelerisque quam vulputate. Lorem ipsum dolor sit
            amet, consectetur adipiscing elit.
          </p>
        </div>
      </div>
    </div>
  );
};

export default ReserveTable;

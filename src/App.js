import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import BookingPage from "./pages/BookingPage/BookingPage"
import ConfirmedBooking from "./pages/ConfirmedBooking/ConfirmedBooking";



function App() {
  return (
    <div className="page-container">
      <Header />
      <div className="content">
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Homepage />} />
            <Route path="/booking" element={<BookingPage />} />
            <Route path="/confirmation" element={<ConfirmedBooking />} />
          </Routes>
        </BrowserRouter>
      </div>
      <Footer />
    </div>
  );
}

export default App;

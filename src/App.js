import React from "react";
import { Routes, Route, BrowserRouter } from "react-router-dom"
import './App.css';
import Header from "./Components/Header/Header";
import Footer from "./Components/Footer/Footer";
import Homepage from "./pages/Homepage/Homepage";
import BookingPage from "./pages/BookingPage/BookingPage"
import BookingConfirmation from "./pages/BookingConfirmation/BookingConfirmation";



function App() {
  return (
    <>
      <Header />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/booking" element={<BookingPage />} />
          <Route path="/confirmation" element={<BookingConfirmation />} />
        </Routes>
      </BrowserRouter>
      <Footer />
    </>
  );
}

export default App;

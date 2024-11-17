import React from "react";
import './App.css';
import Header from "./Components/Header";
import Footer from "./Components/Footer/Footer";
import Main from "./Components/Main";
import Nav from "./Components/Nav/Nav";



function App() {
  return (
    <>
      <Nav />
      <Header />
      <Main />
      <Footer />
    </>
  );
}

export default App;

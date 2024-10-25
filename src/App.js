import React from "react";
import './App.css';
import Header from "./Components/Header";
import Main from "./Components/Main";

import Footer from "./Components/Footer";
import Article from "./Components/Article";
import Section from "./Components/Section";



function App() {
  return (
    <>
    <Header />

    <main>

      <Article />

      <Section />

      <Section />

      <Article />

    </main>

    <Footer />
    </>
  );
}

export default App;

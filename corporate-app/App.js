import React from 'react';
import './App.css';
import Navbar from "./components/Navbar";
import Carousel from "./components/Carousel";
import IntroSection from "./components/IntroSection";
import AboutCompany from "./components/AboutCompany";
import TrainersSection from "./components/TrainersSection";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
        <Navbar/>
        <Carousel/>
        <AboutCompany/>
        <IntroSection/>
        <TrainersSection/>
        <Footer/>
    </div>
  );
}

export default App;

// src/components/Intro.jsx
import React from 'react';
import '../styles/Intro.css';

const Intro = ({ scrollToSection }) => {
  const scrollTo = (ref) => {
    ref?.current?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="intro-container">
      
      <h1>Welcome to the Blood Donation Portal</h1>
      <p>Your contribution can save lives!</p>
      <div className="intro-buttons">
        <button onClick={() => scrollTo(scrollToSection.becomeDonor)}>Become a Donor</button>
        <button onClick={() => scrollTo(scrollToSection.appointments)}>Book an Appointment</button>
      </div>
    </div>
  );
};

export default Intro;



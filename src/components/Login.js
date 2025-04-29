 
// src/components/Login.js
import React from 'react';
import '../styles/Login.css';
const Login = ({ scrollToSection, sections }) => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Logged in successfully!');
    // You can add your login logic here
  };

  return (
    
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
      <h2>Login</h2>
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <button type="submit">Login</button>
      </form>
      <p className="register-link">
        Don’t have an account?{' '}
        { <span onClick={() => scrollToSection(sections.register)}>Register here</span> }
      </p>
    </div>
   
  );
};

export default Login;

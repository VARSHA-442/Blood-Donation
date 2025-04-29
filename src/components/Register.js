import React from 'react';
import '../styles/Register.css';

const Register = () => {
  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Registered successfully!');
  };

  return (
    <div className="register-form">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Name" required />
        <input type="email" placeholder="Email" required />
        <input type="password" placeholder="Password" required />
        <input type="text" placeholder="Blood Group [O+]" required />
        <select required>
          <option value="User">User</option>
          <option value="Admin">Admin</option>
        </select>
        <button type="submit">Register</button>
      </form>
    </div>
  );
};

export default Register;



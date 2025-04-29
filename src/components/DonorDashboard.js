

// src/components/DonorDashboard.jsx
import React from 'react';
import '../styles/DonorDashboard.css';

const DonorDashboard = ({ lastDonor }) => {
  return (
    <div className="donor-dashboard">
      <h2>Welcome, Donor!</h2>

      {lastDonor ? (
        <div className="dashboard-stats">
          <div className="card">
            <h3>Name</h3>
            <p>{lastDonor.name}</p>
          </div>
          <div className="card">
            <h3>Blood Group</h3>
            <p>{lastDonor.bloodGroup}</p>
          </div>
          <div className="card">
            <h3>City</h3>
            <p>{lastDonor.city}</p>
          </div>
        </div>
      ) : (
        <p>No donor data available yet. Book an appointment first!</p>
      )}
    </div>
  );
};

export default DonorDashboard;



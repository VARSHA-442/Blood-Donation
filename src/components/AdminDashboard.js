

// src/components/AdminDashboard.jsx
import React from 'react';
import '../styles/AdminDashboard.css';

const AdminDashboard = ({ donors, appointments, bloodStock }) => {
  const totalDonors = donors.length;
  const totalAppointments = appointments.length;

  return (
    <div className="admin-dashboard">
      <h2>Admin Dashboard</h2>

      <div className="dashboard-stats">
        <div className="card">
          <h3>Total Donors</h3>
          <p>{totalDonors}</p>
        </div>

        <div className="card">
          <h3>Total Appointments</h3>
          <p>{totalAppointments}</p>
        </div>
      </div>

      {/* Blood Stock Table */}
      <h3>Blood Stock Summary</h3>
      <table className="data-table">
        <thead>
          <tr>
            <th>Blood Group</th>
            <th>Available Stock</th>
          </tr>
        </thead>
        <tbody>
          {Object.entries(bloodStock).map(([bloodGroup, stock]) => (
            <tr key={bloodGroup}>
              <td>{bloodGroup}</td>
              <td>{stock}</td>
            </tr>
          ))}
        </tbody>
      </table>

      {/* Available Donors Table */}
      
    </div>
  );
};

export default AdminDashboard;

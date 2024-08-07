// TechnicianDashboard.js
import React from 'react';
import '../App.css';

function TechnicianDashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Technician Dashboard</h1>
      <p className="dashboard-content">Manage your profile and job postings.</p>
      <button className="dashboard-button">Update Profile</button>
    </div>
  );
}

export default TechnicianDashboard;

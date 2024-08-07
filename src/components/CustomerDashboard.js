// CustomerDashboard.js
import React from 'react';
import '../App.css';

function CustomerDashboard() {
  return (
    <div className="dashboard-container">
      <h1 className="dashboard-header">Customer Dashboard</h1>
      <p className="dashboard-content">Post a job and view your interactions with technicians.</p>
      <button className="dashboard-button">Post a Job</button>
    </div>
  );
}

export default CustomerDashboard;

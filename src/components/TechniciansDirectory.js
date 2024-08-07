// TechniciansDirectory.js
import React from 'react';
import '../App.css';

function TechniciansDirectory() {
  return (
    <div className="directory-listings-container">
      <h1 className="directory-listings-header">Technicians Directory</h1>
      <input type="text" className="search-input" placeholder="Search technicians..." />
      <button className="search-button">Search</button>
      <p className="directory-listings-content">Browse and search for nearby technicians.</p>
    </div>
  );
}

export default TechniciansDirectory;

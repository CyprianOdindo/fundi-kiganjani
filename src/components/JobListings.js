// JobListings.js
import React from 'react';
import '../App.css';

function JobListings() {
  return (
    <div className="directory-listings-container">
      <h1 className="directory-listings-header">Job Listings</h1>
      <input type="text" className="search-input" placeholder="Search jobs..." />
      <button className="search-button">Search</button>
      <p className="directory-listings-content">View and apply to customer job postings.</p>
    </div>
  );
}

export default JobListings;

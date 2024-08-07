// Navbar.js
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../App.css'

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-logo">
          <Link to="/">FundiKiganjani</Link>
        </div>
        <button className="menu-icon" onClick={toggleMenu}>
          &#9776; {/* Unicode for hamburger menu icon */}
        </button>
        <div className={`navbar-links ${isMenuOpen ? 'active' : ''}`}>
          <Link to="/">Home</Link>
          <Link to="/technician-dashboard">Technician Dashboard</Link>
          <Link to="/customer-dashboard">Customer Dashboard</Link>
          <Link to="/technicians">Technicians</Link>
          <Link to="/jobs">Jobs</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/faqs">FAQs</Link>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;

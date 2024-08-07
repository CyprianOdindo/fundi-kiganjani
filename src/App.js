import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import './App.css';
import HomePage from './components/HomePage';
import TechnicianDashboard from './components/TechnicianDashboard';
import CustomerDashboard from './components/CustomerDashboard';
import TechniciansDirectory from './components/TechniciansDirectory';
import JobListings from './components/JobListings';
import AboutUs from './components/AboutUs';
import ContactUs from './components/ContactUs';
import FAQs from './components/FAQs';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <Router>
      <div>
        <Navbar />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/technician-dashboard" element={<TechnicianDashboard />} />
          <Route path="/customer-dashboard" element={<CustomerDashboard />} />
          <Route path="/technicians" element={<TechniciansDirectory />} />
          <Route path="/jobs" element={<JobListings />} />
          <Route path="/about" element={<AboutUs />} />
          <Route path="/contact" element={<ContactUs />} />
          <Route path="/faqs" element={<FAQs />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;

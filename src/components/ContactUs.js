// ContactUs.js
import React from 'react';
import '../App.css';

function ContactUs() {
  return (
    <div className="info-page">
      <h1 className="info-header">Contact Us</h1>
      <p className="info-content">Get in touch with us.</p>
      <form className="contact-form">
        <input type="text" placeholder="Your Name" required />
        <input type="email" placeholder="Your Email" required />
        <textarea placeholder="Your Message" rows="5" required></textarea>
        <button type="submit">Send Message</button>
      </form>
    </div>
  );
}

export default ContactUs;

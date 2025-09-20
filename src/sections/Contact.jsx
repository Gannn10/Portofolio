// src/sections/Contact.jsx
import React from 'react';

const Contact = () => {
  return (
    <section id="contact" className="contact-section section">
      <h2>Get In Touch</h2>
      <div className="contact-container">
        <div className="contact-info">
          <h3>Let's Connect</h3>
          <p>
            Jangan ragu untuk menghubungi saya melalui email, telepon, atau media sosial.
            Saya terbuka untuk kolaborasi dan peluang baru.
          </p>
          <ul>
            <li>Email: <a href="mailto:ganiramadahni@gmail.com">ganiramadahni@gmail.com</a></li>
            <li>Phone: <a href="tel:0882003968588">0882003968588</a></li>
            <li>Location: Semarang, Indonesia</li>
          </ul>
          <div className="social-links">
            <a href="https://instagram.com/yourusername" target="_blank" rel="noopener noreferrer"><i className="fab fa-instagram"></i></a>
            <a href="https://linkedin.com/in/yourusername" target="_blank" rel="noopener noreferrer"><i className="fab fa-linkedin-in"></i></a>
            <a href="https://github.com/yourusername" target="_blank" rel="noopener noreferrer"><i className="fab fa-github"></i></a>
          </div>
        </div>
        <div className="contact-form">
          <h3>Send me a message</h3>
          <form>
            <div className="form-group">
              <label htmlFor="name">Your Name</label>
              <input type="text" id="name" name="name" required />
            </div>
            <div className="form-group">
              <label htmlFor="email">Your Email</label>
              <input type="email" id="email" name="email" required />
            </div>
            <div className="form-group">
              <label htmlFor="subject">Subject</label>
              <input type="text" id="subject" name="subject" required />
            </div>
            <div className="form-group">
              <label htmlFor="message">Your Message</label>
              <textarea id="message" name="message" rows="5" required></textarea>
            </div>
            <button type="submit" className="button">Send Message</button>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;

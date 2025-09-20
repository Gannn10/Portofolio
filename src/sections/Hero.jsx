// src/sections/Hero.jsx
import React, { useState, useEffect, useCallback } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faInstagram, faLinkedinIn, faGithub } from '@fortawesome/free-brands-svg-icons';
import profileImage from '../assets/your-profile-image.jpg'; // PASTIKAN PATH INI BENAR!

const Hero = () => {
  const specialties = ["Web Development", "Frontend Development"];
  const [currentSpecialtyIndex, setCurrentSpecialtyIndex] = useState(0);
  const [displayedText, setDisplayedText] = useState('');
  const [isDeleting, setIsDeleting] = useState(false);
  const typingSpeed = 100;
  const deletingSpeed = 50;
  const delayBetweenSpecialties = 1500;

  const typeWriter = useCallback(() => {
    const fullText = specialties[currentSpecialtyIndex];
    if (isDeleting) {
      setDisplayedText(prev => prev.substring(0, prev.length - 1));
      if (displayedText === '') {
        setIsDeleting(false);
        setCurrentSpecialtyIndex((prev) => (prev + 1) % specialties.length);
      }
    } else {
      setDisplayedText(prev => fullText.substring(0, prev.length + 1));
      if (displayedText === fullText) {
        setTimeout(() => setIsDeleting(true), delayBetweenSpecialties);
      }
    }
  }, [currentSpecialtyIndex, displayedText, isDeleting, specialties, delayBetweenSpecialties]);

  useEffect(() => {
    let timer;
    const speed = isDeleting ? deletingSpeed : typingSpeed;
    timer = setTimeout(typeWriter, speed);

    return () => clearTimeout(timer);
  }, [displayedText, isDeleting, currentSpecialtyIndex, typeWriter]);

  return (
    <section id="home" className="hero-section">
      <div className="hero-grid">
        <div className="hero-left">
          <p className="greeting">Hi, my name is</p>
          <h1>Muhammad Gani Ramadhani</h1>

          <div className="specialty-wrapper">
            <span className="code-tag">&lt;/&gt; I specialize in </span>
            <span className="specialty-text">{displayedText}</span>
            <span className="cursor">|</span>
          </div>

          <p className="description">
            I create innovative digital solutions that combine beautiful design with powerful
            functionality. Let's build something amazing together.
          </p>

          <div className="hero-buttons">
            <a href="#contact" className="button">HIRE ME</a>
            <a href="#projects" className="button secondary">EXPLORE WORK</a>
          </div>

          <div className="hero-social-links">
            <a href="https://www.instagram.com/ganirmdhani?igsh=YW5qMGpvbXZoZ3Nv" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faInstagram} />
            </a>
            <a href="https://www.linkedin.com/in/muhammad-gani-ramadhani/" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faLinkedinIn} />
            </a>
            <a href="https://github.com/Gannn10" target="_blank" rel="noopener noreferrer">
              <FontAwesomeIcon icon={faGithub} />
            </a>
          </div>
        </div>
        <div className="hero-right">
          <div className="profile-image-container">
            <img src={profileImage} alt="pp" className="profile-image" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
// src/App.jsx
import React, { useEffect } from 'react';
import ParticlesBackground from './components/ParticlesBackground';
import Hero from './sections/Hero';
import About from './sections/About';
import Projects from './sections/Projects';
import Contact from './sections/Contact';
import './style.css'; // Pastikan Anda mengimpor file CSS Anda

function App() {
  // Smooth scroll for navigation
  useEffect(() => {
    const handleSmoothScroll = (e) => {
      if (e.target.tagName === 'A' && e.target.getAttribute('href').startsWith('#')) {
        e.preventDefault();
        const targetId = e.target.getAttribute('href');
        document.querySelector(targetId).scrollIntoView({
          behavior: 'smooth'
        });
      }
    };

    document.addEventListener('click', handleSmoothScroll);

    return () => {
      document.removeEventListener('click', handleSmoothScroll);
    };
  }, []);

  // Intersection Observer for scroll animations (basic example)
  useEffect(() => {
    const sections = document.querySelectorAll('.section');

    const observerOptions = {
      root: null, // viewport
      rootMargin: '0px',
      threshold: 0.2 // Trigger when 20% of the section is visible
    };

    const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.style.opacity = '1';
          entry.target.style.transform = 'translateY(0)';
        } else {
          // Optional: reset animation when not visible
          // entry.target.style.opacity = '0';
          // entry.target.style.transform = 'translateY(50px)';
        }
      });
    }, observerOptions);

    sections.forEach(section => {
      section.style.opacity = '0'; // Initial state: hidden
      section.style.transform = 'translateY(50px)'; // Initial state: moved down
      section.style.transition = 'opacity 1s ease-out, transform 1s ease-out'; // Animation transition
      sectionObserver.observe(section);
    });

    return () => {
        sections.forEach(section => sectionObserver.unobserve(section));
    };
  }, []);

  return (
    <>
      <ParticlesBackground />
      <header className="header">
        <div className="logo">My Portfolio</div>
        <nav>
          <ul className="nav-list">
            <li className="nav-item"><a href="#home" className="nav-link">Home</a></li>
            <li className="nav-item"><a href="#about" className="nav-link">About</a></li>
            <li className="nav-item"><a href="#projects" className="nav-link">Projects</a></li>
            <li className="nav-item"><a href="#contact" className="nav-link">Contact</a></li>
          </ul>
        </nav>
      </header>

      <main>
        <Hero />
        <About />
        <Projects />
        <Contact />
      </main>

      <footer className="footer">
        <p>GANI 2025  All rights reserved.</p>
      </footer>
    </>
  );
}

export default App;

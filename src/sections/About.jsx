// src/sections/About.jsx
import React from 'react';
import SkillCard from '../components/SkillCard';

const About = () => {
  const frontendSkills = ["React", "TypeScript", "Tailwind CSS"];
  const backendSkills = ["Node.js","Express.js"];

  return (
    <section id="about" className="about-section section">
      <h2>About Me</h2>
      <p>
        Saya adalah seorang Mahasiswa Universitas Dian Nuswatoro Jurusan Teknik Informatika, serta selalu bersemangat untuk mempelajari teknologi baru dan menciptakan solusi inovatif.
      </p>
      <div className="skills-grid">
        <SkillCard
          title="Frontend Development"
          description="Pembuat antarmuka pengguna yang responsif, interaktif, dan menarik."
          skills={frontendSkills}
        />
        <SkillCard
          title="Backend Development"
          description="Profisien dalam membangun API yang kuat dan mengelola database dengan performa tinggi."
          skills={backendSkills}
        />
      </div>
    </section>
  );
};

export default About;
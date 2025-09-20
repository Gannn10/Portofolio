// src/sections/Projects.jsx
import React from 'react';
import ProjectCard from '../components/ProjectCard';

const Projects = () => {
  return (
    <section id="projects" className="projects-section section">
      <h2>My Projects</h2>
      <div className="project-grid">
        <ProjectCard
          iconClass="fas fa-shopping-cart"
          title="Rebranding Web Dinas Pemuda Olahraga "
          description="Solusi Pengembangan Tampilan Yang Lebih Menarik Dan Fitur Yang Menraik."
        />
        <ProjectCard
          iconClass="fas fa-chart-line"
          title="Analytics Dashboard"
          description="Platform analisis data tingkat lanjut untuk memvisualisasikan metrik bisnis secara real-time."
        />

      </div>
    </section>
  );
};

export default Projects;
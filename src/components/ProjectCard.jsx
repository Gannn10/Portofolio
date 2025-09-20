// src/components/ProjectCard.jsx
import React from 'react';

const ProjectCard = ({ iconClass, title, description }) => {
  return (
    <div className="project-card">
      <i className={`icon ${iconClass}`}></i>
      <h3>{title}</h3>
      <p>{description}</p>
    </div>
  );
};

export default ProjectCard;
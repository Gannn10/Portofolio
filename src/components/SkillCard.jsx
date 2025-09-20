// src/components/SkillCard.jsx
import React from 'react';

const SkillCard = ({ title, description, skills }) => {
  return (
    <div className="skill-card">
      <h3>{title}</h3>
      <p>{description}</p>
      <ul>
        {skills.map((skill, index) => (
          <li key={index}>{skill}</li>
        ))}
      </ul>
    </div>
  );
};

export default SkillCard;
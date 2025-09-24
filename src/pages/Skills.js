import React from 'react';
import '../styls/Skills.css'; // Add custom styles here

const skills = [
  { name: 'HTML', logo: '/img/l1.png', percent: 95, color: '#e34c26' },
  { name: 'CSS', logo: '/img/l2.png', percent: 85, color: '#264de4' },
  { name: 'PHP', logo: '/img/l3.png', percent: 90, color: '#8892be' },
  { name: 'JavaScript', logo: '/img/l4.png', percent: 90, color: '#f0db4f' },
  { name: 'AngularJS', logo: '/img/l5.png', percent: 95, color: '#dd1b16' },
  { name: 'WordPress', logo: '/img/l1.png', percent: 85, color: '#21759b' },
];

export default function Skills() {
  return (
    <div className="container bg-white py-5">
      <h2 className="skills-title">My Skills</h2>
      <div className="skills-grid">
        {skills.map((skill, index) => (
          <div className="skill-card" key={index}>
            <img src={skill.logo} alt={skill.name} className="skill-logo" />
            <p className="skill-name">{skill.name}</p>
            <div className="progress-vertical">
              <div
                className="progress-fill"
                style={{
                  height: `${skill.percent}%`,
                  backgroundColor: skill.color,
                }}
              ></div>
              <span className="progress-label">{skill.percent}%</span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

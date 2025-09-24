// src/EducationSection.js
import React, { useState } from "react";
import "../styls/Edu.css"; // Make sure to create this CSS file

const EducationCard = ({ title, duration, description }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <div
      className={`education-card ${expanded ? "expanded" : ""}`}
      onClick={() => setExpanded(!expanded)}
    >
      <div className="timeline-dot" />
      <div className="education-content">
        <h3 className="education-title">{title}</h3>
        <span className="education-duration">{duration}</span>
        <p className="education-description">{description}</p>
      </div>
    </div>
  );
};

const EducationSection = () => {
  const educationData = [
    {
      title: "Bachelor of Engineering (CSE)",
      duration: "2023 – 2027",
      description:
        "Pursuing B.E. in Computer Science & Engineering at DSEC, Perambalur. Focused on MERN stack, Python, DSA, and real-world business logic. Active in hackathons and socially impactful projects."
    },
    {
      title: "Higher Secondary Education (12th)",
      duration: "Completed 2023",
      description:
        "Specialized in Mathematics, Physics, and Computer Science. Built strong logical reasoning and developed a passion for coding and problem solving."
    },
    {
      title: "Secondary Education (10th)",
      duration: "Completed 2021",
      description:
        "Graduated with distinction. Sparked interest in technology and began exploring programming and digital tools."
    }
  ];

  return (
    <div className="container bg-white py-5">
    
      <h2 className="section-title">Education</h2>
      <div className="timeline">
        {educationData.map((edu, index) => (
          <EducationCard key={index} {...edu} />
        ))}
      </div>
    </div>
  );
};

export default EducationSection;

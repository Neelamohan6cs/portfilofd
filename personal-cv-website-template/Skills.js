import React from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Ensure Bootstrap CSS is imported
import "./Skills.css"; // Optional: for custom styling/animations

export default function Skills() {
  const leftSkills = [
    { name: "HTML", level: 95, color: "bg-primary" },
    { name: "CSS", level: 85, color: "bg-warning" },
    { name: "PHP", level: 90, color: "bg-danger" },
  ];

  const rightSkills = [
    { name: "Javascript", level: 90, color: "bg-danger" },
    { name: "Angular JS", level: 95, color: "bg-dark" },
    { name: "Wordpress", level: 85, color: "bg-info" },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <div className="skill mb-4" key={index}>
        <div className="d-flex justify-content-between">
          <p className="mb-2">{skill.name}</p>
          <p className="mb-2">{skill.level}%</p>
        </div>
        <div className="progress">
          <div
            className={`progress-bar ${skill.color}`}
            role="progressbar"
            style={{ width: `${skill.level}%` }}
            aria-valuenow={skill.level}
            aria-valuemin="0"
            aria-valuemax="100"
          ></div>
        </div>
      </div>
    ));

  return (
    <div className="container bg-white py-5" id="skills">
      <div className="row px-3">
        <div className="col-12">
          <h2 className="title position-relative pb-2 mb-4">Skills</h2>
        </div>

        <div className="col-sm-6">{renderSkills(leftSkills)}</div>
        <div className="col-sm-6">{renderSkills(rightSkills)}</div>
      </div>
    </div>
  );
}

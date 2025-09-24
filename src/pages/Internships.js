import React, { useState, useRef, useEffect } from "react";
import "../styls/Intern.css";

const InternshipCard = ({ image, title, description, duration }) => {
  const [expanded, setExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const descRef = useRef(null);

  useEffect(() => {
    if (descRef.current) {
      const lineHeight = parseInt(
        window.getComputedStyle(descRef.current).lineHeight
      );
      const maxHeight = lineHeight * 2;
      if (descRef.current.scrollHeight > maxHeight) {
        setShowReadMore(true);
      }
    }
  }, [description]);

  return (
    <div className="internship-card">
      {/* Image */}
      <div className="internship-image">
        <img src={image} alt={title} />
      </div>

      {/* Title */}
      <div className="internship-header">
        <h3>{title}</h3>
        <span className="internship-duration">{duration}</span>
      </div>

      {/* Description */}
      <p
        ref={descRef}
        className={`internship-description ${expanded ? "expanded" : ""}`}
      >
        {description}
      </p>

      {/* Button */}
      {showReadMore && (
        <button
          className="btn btn-outline-primary btn-sm"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

const Internships = () => {
  return (
    <div className="container bg-white py-5">
      <h2 className="text-center mb-5">💼 Internship Opportunities</h2>
      <div className="row">
        <div className="col-lg-4 col-md-6 mb-4">
          <InternshipCard
            image="/img/i1.png"
            title="Full Stack Development Internship"
            duration="3 Months"
            description="Gain hands-on experience with modern web development technologies such as React, Node.js, MongoDB, and Express. You will work on live projects, building scalable applications and collaborating with mentors."
          />
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <InternshipCard
            image="/img/i2.png"
            title="AI & Data Science Internship"
            duration="2 Months"
            description="Learn how to build machine learning models, perform data preprocessing, and use tools like Python, Pandas, and TensorFlow. This internship is designed to help you gain real-world exposure to AI projects."
          />
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <InternshipCard
            image="/img/i1.png"
            title="Cloud & DevOps Internship"
            duration="6 Weeks"
            description="Explore AWS, Docker, Kubernetes, and CI/CD pipelines. Work on deploying scalable applications and learn how modern DevOps practices improve software delivery."
          />
        </div>
      </div>
    </div>
  );
};

export default Internships;

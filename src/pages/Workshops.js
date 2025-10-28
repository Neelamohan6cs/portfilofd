import React, { useState, useRef, useEffect } from "react";
import "../styls/Workshop.css";

const WorkshopCard = ({ image, title, description }) => {
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
    <div className="workshop-card">
      {/* Image */}
      <div className="workshop-image">
        <img src={image} alt={title} />
      </div>

      {/* Title */}
      <h3 className="workshop-title">{title}</h3>

      {/* Description */}
      <p
        ref={descRef}
        className={`workshop-description ${expanded ? "expanded" : ""}`}
      >
        {description}
      </p>

      {/* Read More / Less */}
      {showReadMore && (
        <button
          className="workshop-btn"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

const Workshops = () => {
  const workshopData = [
    {
      image: "/img/c1.png",
      title: "AI & Machine Learning Workshop",
      description:
        "Learn the fundamentals of Artificial Intelligence and Machine Learning with hands-on coding examples. This workshop will cover supervised, unsupervised learning, and real-time case studies that prepare you for industry applications.",
    },
    {
      image: "/img/c2.png",
      title: "Web Development Bootcamp",
      description:
        "Build modern websites using HTML, CSS, JavaScript, and React. Designed for beginners and intermediates who want to start web development and create responsive projects with real-world examples.",
    },
    {
      image: "/img/profile1.jpg",
      title: "Cloud & DevOps Training",
      description:
        "Get hands-on with AWS and DevOps tools like Docker, Kubernetes, and CI/CD pipelines. Perfect for students and professionals aiming to strengthen their career opportunities in the IT industry.",
    },
  ];

  return (
    <section className="workshop-section">
      <h2 className="workshop-header">Workshops & Trainings</h2>

      <div className="workshop-container">
        {workshopData.map((workshop, index) => (
          <WorkshopCard key={index} {...workshop} />
        ))}
      </div>
    </section>
  );
};

export default Workshops;

import React, { useState, useRef, useEffect } from "react";
import "../styls/Workshop.css";

const WorkshopCard = ({ image, title, description }) => {
  const [expanded, setExpanded] = useState(false);
  const [showReadMore, setShowReadMore] = useState(false);
  const descRef = useRef(null);

  useEffect(() => {
    if (descRef.current) {
      // Check if description overflows 2 lines
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
      <h3 className="mt-3">{title}</h3>

      {/* Description */}
      <p
        ref={descRef}
        className={`workshop-description ${expanded ? "expanded" : ""}`}
      >
        {description}
      </p>

      {/* Read More / Read Less button */}
      {showReadMore && (
        <button
          className="btn btn-primary btn-sm"
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? "Read Less" : "Read More"}
        </button>
      )}
    </div>
  );
};

const Workshops = () => {
  return (
    <div className="container bg-white py-5">
      <div className="row px-3">
        <div className="col-lg-4 col-md-6 mb-4">
          <WorkshopCard
            image="/img/c1.png"
            title="AI & Machine Learning Workshop"
            description="Learn the fundamentals of Artificial Intelligence and Machine Learning with hands-on coding examples. This workshop will cover supervised, unsupervised learning and real-time case studies that prepare you for industry applications."
          />
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <WorkshopCard
            image="/img/c2.png"
            title="Web Development Bootcamp"
            description="Build modern websites using HTML, CSS, JavaScript, and React. This workshop is designed for beginners and intermediate learners who want to start web development and create responsive projects with real-world examples."
          />
        </div>
        <div className="col-lg-4 col-md-6 mb-4">
          <WorkshopCard
            image="/img/profile1.jpg"
            title="Cloud & DevOps Training"
            description="Get hands-on with cloud platforms like AWS and DevOps tools such as Docker, Kubernetes, and CI/CD pipelines. Perfect for students and professionals looking to enhance their career opportunities in the IT industry."
          />
        </div>
      </div>
    </div>
  );
};

export default Workshops;

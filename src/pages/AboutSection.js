// src/AboutSection.js
import axios from "axios";
import React, { useEffect, useState } from "react";

const AboutSection = () => {
  const [about, setAbout] = useState({
    name: "Neela",
    aboutText:
      "I’m a passionate software developer who loves building web applications, exploring new technologies, and solving real-world problems through code.",
    extraFields: [
      { _id: "1", key: "Email", value: "Neelamohan" },
      { _id: "2", key: "Location", value: "Perambalur, India" },
      { _id: "3", key: "Experience", value: "3+ years" },
    ],
  });

  const API_BASE = process.env.REACT_APP_BACKEND_URL;

  useEffect(() => {
    axios
      .get(`${API_BASE}/api/abouts`)
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setAbout(res.data[0]); // ✅ Use first object in array
        } else {
          console.warn("No about data found — using default data.");
        }
      })
      .catch((err) => {
        console.log("Error fetching about data, using default:", err);
      });
  }, [API_BASE]);

  return (
    <div className="container bg-white py-5">
      <div className="row px-3">
        <div className="col-12">
          <h2 className="title position-relative pb-2 mb-4">About Me</h2>
        </div>

        <div className="col-12">
          <p>{about.aboutText}</p>

          <div className="row">
            <div className="col-sm-6 py-1">
              <h5 className="d-inline text-primary">Name:</h5> {about.name}
            </div>

            {/* Render extraFields dynamically */}
            {about.extraFields?.map((field) => (
              <div className="col-sm-6 py-1" key={field._id}>
                <h5 className="d-inline text-primary">{field.key}:</h5>{" "}
                {field.value}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default AboutSection;

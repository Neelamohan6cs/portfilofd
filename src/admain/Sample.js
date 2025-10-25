import React, { useEffect, useState } from "react";
import axios from "axios";
import "../styls/Edu.css";

const Education = () => {
  const [educationData, setEducationData] = useState([
    {
      degree: "BE. in Computer Science",
      institution:
        "Dhanalakshmi Srinivarion Engineering College, Perambalur",
      year: "2023 – 2027",
      percentage: "85% (expected)",
    },
    {
      degree: "Higher Secondary Education (HSC)",
      institution: "Roever Higher Secondary School, Perambalur",
      year: "2020 – 2023",
      percentage: "78%",
    },
    {
      degree: "Secondary School Leaving Certificate (SSLC)",
      institution: "Roever Higher Secondary School, Perambalur",
      year: "2018 – 2020",
      percentage: "85%",
    },
  ]);

  // ✅ Fetch data only once when component mounts
  useEffect(() => {
    axios
      .get(`${process.env.REACT_APP_BACKEND_URL}/api/educations`)
      .then((res) => {
        if (Array.isArray(res.data) && res.data.length > 0) {
          setEducationData(res.data);
        }
        console.log("Education data fetched:", res.data);
      })
      .catch((err) => {
        console.error("Error fetching education data:", err);
      });
  }, []); 

  function handleDelete(id) {
    axios.delete(`${process.env.REACT_APP_BACKEND_URL}/api/educations/${id}`)
    .then((res) => {
      console.log("Education data deleted:", res.data);
    })
    .catch((err) => {
      console.error("Error deleting education data:", err);
    });
  }
  // <- empty dependency ensures it runs only once

  return (
    <div className="education-section">
      <h2 className="section-title">Education</h2>
      <div className="timeline">

        {educationData.map((item, index) => (
          <div className="education-card" key={index}>
            <span className="timeline-dot"></span>
            <div className="education-content">
              <h3 className="education-title">
                {item.degree || item.nameofeducation}
              </h3>
              <p className="education-institution">
                {item.institution || item.nameofinstitution}
              </p>
              <span className="education-duration">
                {item.year ||
                  `${item.startyear} – ${item.endyear}`}{" "}
                <span className="education-percentage">
                  {item.percentage}
                </span>
                <p>{item._id}</p>
              </span>
              <button onClick={() => handleDelete(item._id)} className="delete">delete</button>
            </div>
          </div>
        ))}
      </div>
      
    </div>
  );
};

export default Education;

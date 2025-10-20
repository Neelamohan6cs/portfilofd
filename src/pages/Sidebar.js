import React, { useEffect, useState, useRef } from "react";
import Typed from "typed.js";
import axios from "axios";
import { FaGithubSquare } from "react-icons/fa";


export default function Sidebar() {
  const [about, setAbout] = useState(null);
  const API_BASE = process.env.REACT_APP_BACKEND_URL;
  console.log("API Base URL:", API_BASE);
  

  const defaultProfile = {
    name: "Neela",
    image: "/img/profile1.jpg",
    roles: [
      "Web Designer",
      "Web Developer",
      "Front End Developer",
      "Apps Designer",
      "Apps Developer",
    ],
    socials: {
      twitter: "",
      facebook: "",
      linkedin: "",
      instagram: "",
      youtube: "",
    },
    cv: "",
  };

  const [profile, setProfile] = useState(defaultProfile);
  const typedEl = useRef(null);
  const typedInstance = useRef(null);

  // Fetch profile from backend using Axios
  useEffect(() => {
    axios
      .get(`${API_BASE}/api/profiles`)
      .then((res) => {
        const data = res.data;
        if (data && Object.keys(data).length > 0) {
          setProfile((prev) => ({
            ...prev,
            ...data,
            image:
              data.image && data.image.trim() !== ""
                ? `${API_BASE}${data.image}`
                : prev.image,
            cv: data.cv && data.cv.trim() !== "" ? data.cv : prev.cv,
            socials: {
              ...prev.socials,
              ...Object.fromEntries(
                Object.entries(data.socials || {}).filter(
                  ([, value]) => value && value.trim() !== ""
                )
              ),
            },
          }));
        }
      })
      .catch((err) => {
        console.error("❌ Axios error fetching profile:", err.message);
        if (err.response) {
          console.error("Status:", err.response.status);
          console.error("Data:", err.response.data);
        }
      });
  }, []);

  // Typed.js setup
  useEffect(() => {
    if (typedInstance.current) {
      typedInstance.current.destroy();
    }

    if (profile.roles && profile.roles.length > 0) {
      typedInstance.current = new Typed(typedEl.current, {
        strings: profile.roles,
        typeSpeed: 60,
        backSpeed: 30,
        backDelay: 2000,
        loop: true,
      });
    }

    return () => {
      if (typedInstance.current) {
        typedInstance.current.destroy();
      }
    };
  }, [profile.roles]);

  return (
    <div className="sidebar d-flex">
      <div className="sidebar-text d-flex flex-column h-100 justify-content-center text-center">
        <img
          className="w-100 img-fluid mb-4"
          src={profile.image}
          alt={profile.name}
        />
        <h1 className="mt-2">{profile.name}</h1>

        <div className="mb-4" style={{ minHeight: "22px" }}>
          <h4
            className="typed-text-output d-inline-block text-body"
            ref={typedEl}
            aria-label="Dynamic role typing"
          ></h4>
        </div>

        <div className="d-flex justify-content-center mt-auto mb-3">
          {profile.socials?.twitter && (
            <a
              className="mx-2"
              href={profile.socials.twitter}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-twitter"></i>
            </a>
          )}
          {profile.socials?.facebook && (
            <a
              className="mx-2"
              href={profile.socials.facebook}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-facebook-f"></i>

            </a>
          )}
          {profile.socials?.linkedin && (
            <a
              className="mx-2"
              href={profile.socials.linkedin}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-linkedin-in"></i>
            </a>
          )}
          {profile.socials?.instagram && (
            <a
              className="mx-2"
              href={profile.socials.instagram}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-instagram"></i>
            </a>
          )}
          {profile.socials?.youtube && (
            <a
              className="mx-2"
              href={profile.socials.youtube}
              target="_blank"
              rel="noreferrer"
            >
              <i className="fab fa-youtube"></i>
            </a>
          )}
        </div>

        <div className="d-flex align-items-end justify-content-between">
          {profile.cv && (
            <a
              href={profile.cv}
              className="btn btn-block border-right"
              target="_blank"
              rel="noreferrer"
            >
              Download CV
            </a>
          )}
          <a href="#contact" className="btn btn-block btn-scroll">
            Contact Me
          </a>
        </div>
      </div>

      <div className="sidebar-icon d-flex flex-column h-100 justify-content-center text-right">
        <i className="fas fa-2x fa-angle-double-right text-primary"></i>
      </div>
    </div>
  );
}

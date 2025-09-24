import React, { useEffect, useState } from "react";

export default function Sidebar() {
  const [profile, setProfile] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/profile") // adjust API URL if needed
      .then((res) => res.json())
      .then((data) => setProfile(data))
      .catch((err) => console.error("Error fetching profile:", err));
  }, []);

  if (!profile) {
    return <div>Loading...</div>;
  }

  return (
    <div className="sidebar d-flex">
      {/* Sidebar main content */}
      <div className="sidebar-text d-flex flex-column h-100 justify-content-center text-center">
        <img
          className="w-100 img-fluid mb-4"
          src={profile.image}
          alt="Profile"
        />
        <h1 className="mt-2">{profile.name}</h1>

        <div className="mb-4" style={{ height: "22px" }}>
          <h4 className="typed-text-output d-inline-block text-body"></h4>
          <div className="typed-text d-none">
            {profile.roles?.join(", ")}
          </div>
        </div>

        {/* Social icons */}
        <div className="d-flex justify-content-center mt-auto mb-3">
          {profile.socials?.twitter && (
            <a className="mx-2" href={profile.socials.twitter}>
              <i className="fab fa-twitter"></i>
            </a>
          )}
          {profile.socials?.facebook && (
            <a className="mx-2" href={profile.socials.facebook}>
              <i className="fab fa-facebook-f"></i>
            </a>
          )}
          {profile.socials?.linkedin && (
            <a className="mx-2" href={profile.socials.linkedin}>
              <i className="fab fa-linkedin-in"></i>
            </a>
          )}
          {profile.socials?.instagram && (
            <a className="mx-2" href={profile.socials.instagram}>
              <i className="fab fa-instagram"></i>
            </a>
          )}
          {profile.socials?.youtube && (
            <a className="mx-2" href={profile.socials.youtube}>
              <i className="fab fa-youtube"></i>
            </a>
          )}
        </div>

        {/* Buttons */}
        <div className="d-flex align-items-end justify-content-between">
          <a href={profile.cv} className="btn btn-block border-right" download>
            Download CV
          </a>
          <a href="#contact" className="btn btn-block btn-scroll">
            Contact Me
          </a>
        </div>
      </div>

      {/* Sidebar arrow (don’t touch style, as you asked) */}
      <div className="sidebar-icon d-flex flex-column h-100 justify-content-center text-right">
        <i className="fas fa-2x fa-angle-double-right text-primary"></i>
      </div>
    </div>
  );
}

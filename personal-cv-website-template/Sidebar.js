import React, { useEffect, useState } from "react";
import { ReactTyped } from "react-typed";
import {
  FaTwitter,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
  FaYoutube,
  FaAngleDoubleRight,
} from "react-icons/fa";
import axios from "axios";

const Sidebar = () => {
  const [profile, setProfile] = useState(null); // null initially to avoid flash

  useEffect(() => {
    const fetchProfile = async () => {
      try {
        const res = await axios.get("http://localhost:3000//api/profiles");
;
        let data = Array.isArray(res.data) && res.data.length > 0 ? res.data[0] : res.data;

        if (data) {
          // Roles
          const rolesArray = Array.isArray(data.roles)
            ? data.roles
            : ["Web Designer", "Web Developer", "Front End Developer", "Apps Designer", "Apps Developer"];

          // Profile image
          const profileImgUrl = data.profileImg
            ? `http://localhost:5000${data.profileImg.replace(/\\/g, "/")}`
            : `${process.env.PUBLIC_URL}/img/profile1.jpg`;

          // Social links
          const social = data.socialLinks || {};

          setProfile({
            name: data.name || "Neelamohan R",
            profileImg: profileImgUrl,
            roles: rolesArray,
            twitter: social.twitter || "#",
            linkedin: social.linkedin || "#",
            facebook: social.facebook || "#",
            instagram: social.instagram || "#",
            youtube: social.youtube || "#",
            cvLink: data.cvLink || "/cv.pdf",
          });
        }
      } catch (err) {
        console.error("Failed to fetch profile:", err.message || err);
      }
    };

    fetchProfile();

    // Optional: Poll every 30 seconds to update automatically
    const interval = setInterval(fetchProfile, 30000);
    return () => clearInterval(interval);
  }, []);

  if (!profile) {
    // Show nothing or a loader until profile is fetched
    return <div className="sidebar d-flex justify-content-center align-items-center">Loading...</div>;
  }

  return (
    <div className="sidebar d-flex">
      {/* Sidebar Profile Section */}
      <div className="sidebar-text d-flex flex-column h-100 justify-content-center text-center">
        <img
          className="w-100 img-fluid mb-4"
          src={profile.profileImg}
          alt="Profile"
        />
        <h1 className="mt-2">{profile.name}</h1>

        {/* Typed Roles */}
        <div className="mb-4" style={{ height: "22px" }}>
          <ReactTyped
            strings={profile.roles}
            typeSpeed={50}
            backSpeed={30}
            loop
            className="typed-text-output d-inline-block text-body"
          />
        </div>

        {/* Social Icons */}
        <div className="d-flex justify-content-center mt-auto mb-3">
          <a className="mx-2" href={profile.twitter}><FaTwitter /></a>
          <a className="mx-2" href={profile.facebook}><FaFacebookF /></a>
          <a className="mx-2" href={profile.linkedin}><FaLinkedinIn /></a>
          <a className="mx-2" href={profile.instagram}><FaInstagram /></a>
          <a className="mx-2" href={profile.youtube}><FaYoutube /></a>
        </div>

        {/* Buttons */}
        <div className="d-flex align-items-center justify-content-between">
          <a href={profile.cvLink} className="btn btn-block border-right">
            Download CV
          </a>
          <a href="#contact" className="btn btn-block border-left">
            Contact Me
          </a>
        </div>
      </div>

      {/* Sidebar Icon (toggle button) */}
      <div className="sidebar-icon d-flex flex-column h-100 justify-content-center text-right">
        <FaAngleDoubleRight className="text-primary" size={30} />
      </div>
    </div>
  );
};

export default Sidebar;

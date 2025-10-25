import React from "react";
import "./admincss/admain.css";
import { Link } from "react-router-dom";

export default function Admin() {
  function logout() {
    localStorage.removeItem("token");
    window.location.href = "/";
  }
  return (
    <div className="admin-container">
      <h1 className="admin-header">Admin Dashboard</h1>
      <button className="logout" onClick={logout}>logout</button>

      <div className="admin-card-grid">
        <Link to="/admin/profile">
          <div className="admin-card">
            <h3>Profile</h3>
            <p>Manage your portfolio profile.</p>
          </div>
        </Link>

        <Link to="/admin/about">
          <div className="admin-card">
            <h3>about</h3>
            <p>Manage your portfolio about.</p>
          </div>
        </Link>

        <div className="admin-card">
          <h3>Projects</h3>
          <p>Manage your portfolio projects.</p>
        </div>

        <div className="admin-card">
          <h3>Skills</h3>
          <p>Update your technical skills.</p>
        </div>

        <div className="admin-card">
          <h3>Education</h3>
          <p>Edit your academic background.</p>
        </div>

        <div className="admin-card">
          <h3>Contact Info</h3>
          <p>Update your email and social links.</p>
        </div>

        <div className="admin-card">
          <h3>Internships</h3>
          <p>Update your Internships.</p>
        </div>
      </div>
    </div>
  );
}

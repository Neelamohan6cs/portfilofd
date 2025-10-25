import React from "react";
import { Routes, Route, Navigate } from "react-router-dom";
import MainLayout from "./MainLayout";
import Admin from "./admain/Admin";
import Profile from "./admain/Profile";
import About from "./admain/About";
import Education from "./admain/Education";
import Sample from "./admain/Sample";
import Demo from "./Demo";
import Login from "./pages/auth/Auth";

export default function Approute() {
  const loggedIn = localStorage.getItem("token");

  return (
    <Routes>
      {/* Public Routes */}
      <Route path="/" element={<MainLayout />} />
      <Route path="/demo" element={<Demo />} />
      <Route path="/sample" element={<Sample />} />
      <Route path="/login" element={<Login />} />

      {/* Protected Admin Routes */}
      {loggedIn ? (
        <>
          <Route path="/admin" element={<Admin />} />
          <Route path="/admin/profile" element={<Profile />} />
          <Route path="/admin/about" element={<About />} />
          <Route path="/admin/education" element={<Education />} />
        </>
      ) : (
        <Route path="/admin/*" element={<Navigate to="/login" replace />} />
      )}
    </Routes>
  );
}

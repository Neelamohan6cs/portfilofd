// src/AppRoute.js
import React from "react";
import { Routes, Route } from "react-router-dom";
import MainLayout from "./MainLayout";
import Admin from "./admain/Admin"; // ✅ Make sure folder name is correct
import Profile from "./admain/Profile";


export default function Approute() {
  return (
    <Routes>
      <Route path="/" element={<MainLayout />} />
      
      <Route path="/admin" element={<Admin />} />
      <Route path="/admin/profile" element={<Profile />} />
      
    </Routes>
  );
}

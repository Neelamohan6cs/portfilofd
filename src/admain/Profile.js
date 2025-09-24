import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

export default function ProfileForm() {
  const navigate = useNavigate();

  // ✅ backend URL from .env (fallback: localhost)
  const API_BASE = process.env.REACT_APP_BACKEND_URL || "http://localhost:5000";

  const [formData, setFormData] = useState({
    name: "",
    roles: "",
    cv: "",
    socials: { twitter: "", linkedin: "", instagram: "" },
  });
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");

  // Handle text/social inputs
  const handleChange = (e) => {
    const { name, value } = e.target;
    if (["twitter", "linkedin", "instagram"].includes(name)) {
      setFormData((prev) => ({
        ...prev,
        socials: { ...prev.socials, [name]: value },
      }));
    } else {
      setFormData((prev) => ({ ...prev, [name]: value }));
    }
  };

  // Handle image upload
  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  // Submit form
  const handleSubmit = async (e) => {
    e.preventDefault();

    const rolesArray = formData.roles
      .split(",")
      .map((r) => r.trim())
      .filter(Boolean);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("roles", JSON.stringify(rolesArray));
    data.append("socialLinks", JSON.stringify(formData.socials)); // 👈 match backend key
    data.append("cvLink", formData.cv); // 👈 match backend key
    if (imageFile) data.append("profileImg", imageFile); // 👈 correct key

    try {
      const res = await axios.post(`${API_BASE}/api/profiles`, data, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("✅ Profile saved!");
      navigate("/");
      console.log(res.data);
    } catch (err) {
      console.error(err);
      alert("❌ Failed to save profile");
    }
  };

  return (
    <div style={{ padding: "1rem", maxWidth: "500px", margin: "auto" }}>
      <h2>Create Profile</h2>
      <form
        onSubmit={handleSubmit}
        style={{ display: "flex", flexDirection: "column", gap: "0.8rem" }}
      >
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input type="file" accept="image/*" onChange={handleImageUpload} />
        {preview && (
          <img
            src={preview}
            alt="Preview"
            style={{
              width: "120px",
              height: "120px",
              borderRadius: "50%",
              objectFit: "cover",
            }}
          />
        )}

        <input
          type="text"
          name="roles"
          placeholder="Roles (comma separated)"
          value={formData.roles}
          onChange={handleChange}
        />

        <input
          type="text"
          name="twitter"
          placeholder="Twitter URL"
          value={formData.socials.twitter}
          onChange={handleChange}
        />

        <input
          type="text"
          name="linkedin"
          placeholder="LinkedIn URL"
          value={formData.socials.linkedin}
          onChange={handleChange}
        />

        <input
          type="text"
          name="instagram"
          placeholder="Instagram URL"
          value={formData.socials.instagram}
          onChange={handleChange}
        />

        <input
          type="text"
          name="cv"
          placeholder="CV File Link"
          value={formData.cv}
          onChange={handleChange}
        />

        <button
          type="submit"
          style={{
            padding: "0.5rem",
            background: "#333",
            color: "#fff",
            cursor: "pointer",
          }}
        >
          Save
        </button>
      </form>
    </div>
  );
}

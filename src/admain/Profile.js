import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import "./admincss/Profile.css"; // 👈 Import normal CSS

export default function ProfileForm() {
  const navigate = useNavigate();
  const API_BASE = process.env.REACT_APP_BACKEND_URL;

  const [formData, setFormData] = useState({
    name: "",
    roles: "",
    cv: "",
    socials: { twitter: "", linkedin: "", instagram: "" },
  });
  const [imageFile, setImageFile] = useState(null);
  const [preview, setPreview] = useState("");

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

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageFile(file);
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const rolesArray = formData.roles
      .split(",")
      .map((r) => r.trim())
      .filter(Boolean);

    const data = new FormData();
    data.append("name", formData.name);
    data.append("roles", JSON.stringify(rolesArray));
    data.append("socialLinks", JSON.stringify(formData.socials));
    data.append("cvLink", formData.cv);
    if (imageFile) data.append("profileImg", imageFile);

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
    <div className="profile-container">
      <div className="profile-card">
        <h2>Create Profile</h2>

        <form onSubmit={handleSubmit} className="profile-form">
          <div className="form-group">
            <label>Full Name</label>
            <input
              type="text"
              name="name"
              placeholder="Enter your full name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>

          <div className="form-group image-upload">
            <label>Profile Image</label>
            <input type="file" accept="image/*" onChange={handleImageUpload} />
            {preview && (
              <img
                src={preview}
                alt="Preview"
                className="preview-img"
              />
            )}
          </div>

          <div className="form-group">
            <label>Roles</label>
            <input
              type="text"
              name="roles"
              placeholder="e.g. Developer, Designer"
              value={formData.roles}
              onChange={handleChange}
            />
          </div>

          <div className="form-group">
            <label>Social Links</label>
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
          </div>

          <div className="form-group">
            <label>CV File Link</label>
            <input
              type="text"
              name="cv"
              placeholder="Paste CV link (Google Drive or URL)"
              value={formData.cv}
              onChange={handleChange}
            />
          </div>

          <button type="submit" className="submit-btn">
            Save Profile
          </button>
        </form>
      </div>
    </div>
  );
}

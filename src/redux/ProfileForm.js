import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

export default function ProfileForm() {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    name: "",
    profileImage: null,
    roles: [],
    twitter: "",
    facebook: "",
    linkedin: "",
    instagram: "",
    youtube: "",
    cvLink: "",
    contactLink: "",
  });

  const [rolesInput, setRolesInput] = useState("");
  const [preview, setPreview] = useState("");

  useEffect(() => {
    setRolesInput(formData.roles.join(", "));
  }, [formData.roles]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageUpload = (e) => {
    const file = e.target.files[0];
    if (file) {
      setFormData((prev) => ({ ...prev, profileImage: file }));
      setPreview(URL.createObjectURL(file));
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!formData.name.trim()) {
      toast.error("❌ Name is required");
      return;
    }

    if (!formData.profileImage) {
      toast.error("❌ Profile Image is required");
      return;
    }

    const rolesArray = rolesInput
      .split(",")
      .map((r) => r.trim())
      .filter((r) => r !== "");

    try {
      const dataToSend = new FormData();
      dataToSend.append("name", formData.name);
      dataToSend.append("profileImg", formData.profileImage);
      dataToSend.append("roles", JSON.stringify(rolesArray));
      dataToSend.append("twitter", formData.twitter);
      dataToSend.append("facebook", formData.facebook);
      dataToSend.append("linkedin", formData.linkedin);
      dataToSend.append("instagram", formData.instagram);
      dataToSend.append("youtube", formData.youtube);
      dataToSend.append("cvLink", formData.cvLink);
      dataToSend.append("contactLink", formData.contactLink);

      const res = await axios.post(
        "http://localhost:5000/api/profiles",
        dataToSend,
        {
          headers: { "Content-Type": "multipart/form-data" },
        }
      );

      toast.success("✅ Profile uploaded successfully!");
      console.log("Saved:", res.data);

      setTimeout(() => navigate("/"), 1500);
    } catch (err) {
      console.error("Error:", err);
      toast.error("❌ Failed to upload profile. Try again.");
    }
  };

  return (
    <div style={styles.container}>
      <div style={styles.card}>
        <h2 style={styles.header}>Edit Profile</h2>

        <form onSubmit={handleSubmit} style={styles.form}>
          <label>Name:</label>
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            style={styles.input}
          />

          <label>Profile Image:</label>
          <input
            type="file"
            accept="image/*"
            onChange={handleImageUpload}
            style={styles.input}
          />
          {preview && <img src={preview} alt="Preview" style={styles.preview} />}

          <label>Roles (comma separated):</label>
          <input
            type="text"
            value={rolesInput}
            onChange={(e) => setRolesInput(e.target.value)}
            placeholder="Python Developer, MERN, JavaScript"
            style={styles.input}
          />

          <label>Twitter:</label>
          <input
            type="text"
            name="twitter"
            value={formData.twitter}
            onChange={handleChange}
            style={styles.input}
          />

          <label>Facebook:</label>
          <input
            type="text"
            name="facebook"
            value={formData.facebook}
            onChange={handleChange}
            style={styles.input}
          />

          <label>LinkedIn:</label>
          <input
            type="text"
            name="linkedin"
            value={formData.linkedin}
            onChange={handleChange}
            style={styles.input}
          />

          <label>Instagram:</label>
          <input
            type="text"
            name="instagram"
            value={formData.instagram}
            onChange={handleChange}
            style={styles.input}
          />

          <label>YouTube:</label>
          <input
            type="text"
            name="youtube"
            value={formData.youtube}
            onChange={handleChange}
            style={styles.input}
          />

          <label>CV Link:</label>
          <input
            type="text"
            name="cvLink"
            value={formData.cvLink}
            onChange={handleChange}
            style={styles.input}
          />

          <label>Contact Section Link:</label>
          <input
            type="text"
            name="contactLink"
            value={formData.contactLink}
            onChange={handleChange}
            style={styles.input}
          />

          <button type="submit" style={styles.button}>
            Submit
          </button>
        </form>
      </div>

      <ToastContainer position="top-right" autoClose={3000} />
    </div>
  );
}

const styles = {
  container: {
    padding: "2rem",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    backgroundColor: "#f9f9f9",
  },
  card: {
    backgroundColor: "#fff",
    padding: "2rem",
    borderRadius: "10px",
    boxShadow: "0 4px 12px rgba(0,0,0,0.1)",
    width: "100%",
    maxWidth: "600px",
  },
  header: {
    textAlign: "center",
    marginBottom: "1.5rem",
    color: "#333",
  },
  form: {
    display: "flex",
    flexDirection: "column",
    gap: "1rem",
  },
  input: {
    padding: "0.7rem",
    borderRadius: "6px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "1rem",
  },
  preview: {
    width: "150px",
    height: "150px",
    borderRadius: "50%",
    marginTop: "10px",
    objectFit: "cover",
    border: "2px solid #ddd",
    boxShadow: "0 2px 6px rgba(0,0,0,0.2)",
    alignSelf: "center",
  },
  button: {
    padding: "0.8rem 1rem",
    backgroundColor: "#333",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "1rem",
    cursor: "pointer",
    transition: "background 0.3s ease",
  },
};

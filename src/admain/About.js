import React, { useState } from "react";
import "./About.css";
import axios from "axios";

export default function AdminAbout() {
  const [name, setName] = useState("Neelamohan");
  const [aboutText, setAboutText] = useState("I am a full stack developer with a passion for creating web applications.");
  const [extraFields, setExtraFields] = useState([{ key: "", value: "" }]);
  const [message, setMessage] = useState("");

  const handleChange = (index, type, event) => {
    const updatedFields = [...extraFields];
    updatedFields[index][type] = event.target.value;
    setExtraFields(updatedFields);
  };

  const handleAddField = () => {
    setExtraFields([...extraFields, { key: "", value: "" }]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    if (!name.trim() || !aboutText.trim()) {
      setMessage("⚠️ Please fill in both Name and About Me.");
      return;
    }

    const data = {
      name: name.trim(),
      aboutText: aboutText.trim(),
      extraFields: extraFields.filter(
        (f) => f.key.trim() !== "" && f.value.trim() !== ""
      ),
    };

    console.log("📦 Sending data to backend:", data);

    try {
      const response = await axios.post(
        `${process.env.REACT_APP_BACKEND_URL}/api/abouts`,
        data,
        { headers: { "Content-Type": "application/json" } }
      );

      console.log("✅ Response:", response.data);
      setMessage("✅ Data saved successfully!");
    } catch (error) {
      console.error("❌ Error saving data:", error.response || error);
      setMessage("❌ Failed to save data. Check console for details.");
    }
  };

  return (
    <div className="admin-about-container">
      <div className="admin-card">
        <h1 className="admin-title">🛠️ Admin About Page</h1>

        <form onSubmit={handleSubmit}>
          {/* About Me */}
          <div className="form-group">
            <label>About Me</label>
            <textarea
              rows="5"
              placeholder="Write about yourself here..."
              value={aboutText}
              onChange={(e) => setAboutText(e.target.value)}
              required
            ></textarea>
          </div>

          {/* Name */}
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              placeholder="Your Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </div>

          {/* Extra Fields */}
          <div className="form-group">
            <label>Extra Fields (key:value)</label>
            {extraFields.map((field, index) => (
              <div key={index} className="extra-field-box">
                <input
                  type="text"
                  placeholder="Key"
                  value={field.key}
                  onChange={(e) => handleChange(index, "key", e)}
                />
                <input
                  type="text"
                  placeholder="Value"
                  value={field.value}
                  onChange={(e) => handleChange(index, "value", e)}
                />
              </div>
            ))}

            <button type="button" className="add-btn" onClick={handleAddField}>
              ➕ Add Field
            </button>
          </div>

          {/* Save Button */}
          <button type="submit" className="save-btn">
            💾 Save
          </button>
        </form>

        {message && <p className="status-msg">{message}</p>}
      </div>
    </div>
  );
}

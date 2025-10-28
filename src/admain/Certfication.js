import { useState } from "react";
import "./admincss/Cer.css";
import axios from "axios";

function Certification() {
  const [title, setTitle] = useState("");
  const [img, setImg] = useState("");
  const [desc, setDesc] = useState("");

  function handleSubmit(e) {
    e.preventDefault(); // prevent page reload
    const cerData = { title, img, desc };

    axios
      .post("http://localhost:8000/api/certifications", cerData)
      .then((res) => {
        alert("✅ Certification added successfully");
        // clear form fields after success
        setTitle("");
        setImg("");
        setDesc("");
      })
      .catch((err) => {
        alert("❌ Error adding certification: " + err.message);
      });
  }

  return (
    <div className="cer">
      <h1>Certification Admin Page</h1>

      <form onSubmit={handleSubmit}>
        <label>Certification Title</label>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Enter certification title"
        />
        <br />

        <label>Certification Image URL</label>
        <input
          type="text"
          value={img}
          onChange={(e) => setImg(e.target.value)}
          placeholder="Enter image link"
        />
        <br />

        <label>Certification Description</label>
        <input
          type="text"
          value={desc}
          onChange={(e) => setDesc(e.target.value)}
          placeholder="Enter short description"
        />
        <br />

        <button type="submit">Add Certification</button>
      </form>
    </div>
  );
}

export default Certification;

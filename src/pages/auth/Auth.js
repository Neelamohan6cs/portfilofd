import React, { useState, useEffect } from "react";
import "./Auth.css";
import { useNavigate } from "react-router-dom";

function Login() {
  const [input1, setInput1] = useState("");
  const [input2, setInput2] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();

  const password1 = "Meena";
  const password2 = "Raj";

  // Redirect if already logged in
  useEffect(() => {
    const token = localStorage.getItem("token");
    if (token) {
      navigate("/admin");
    }
  }, [navigate]);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (input1 === password1 && input2 === password2) {
      setMessage("✅ Login Successful!");
      localStorage.setItem("token", "admin-auth");
      navigate("/admin")
    } else {
      setMessage("❌ Invalid Credentials. Try again.");
    }
  };

  return (
    <div className="form-container">
      <form className="form" onSubmit={handleSubmit}>
        <h1>Admin Login Page</h1>

        <label>Password 1:</label>
        <input
          type="password"
          value={input1}
          onChange={(e) => setInput1(e.target.value)}
          placeholder="Enter Password 1"
          required
        />

        <label>Password 2:</label>
        <input
          type="password"
          value={input2}
          onChange={(e) => setInput2(e.target.value)}
          placeholder="Enter Password 2"
          required
        />

        <button type="submit">Login</button>

        {message && <p className="message">{message}</p>}
      </form>
    </div>
  );
}

export default Login;

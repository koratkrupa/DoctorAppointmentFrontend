// src/pages/Login.js
import React, { useState } from "react";
import "../styles/login.css"; // your existing CSS
import "../styles/variables.css";
import {API} from "../config/api";

const Login = () => {
  const [formData, setFormData] = useState({
    email: "",
    password: "",
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setMessage("");

    try {
      const res = await fetch(API.LOGIN, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          email: formData.email,
          password: formData.password,
        }),
      });

      const data = await res.json();

      if (res.ok) {
        alert("✅ Login successful!");
        // console.log("User Data:", data.user);

        // Token save to localStoring
        localStorage.setItem("token", data.token);
        localStorage.setItem("role", data.role);

        // ✅ Optional: Navigate to dashboard
        if (data.role === "Patient") {
          window.location.href = "/patient-dashboard";
        } else if (data.role === "Doctor") {
          window.location.href = "/doctor-dashboard";
        } else if (data.role === "Admin") {
          window.location.href = "/admin-dashboard";
        }
      } else {
        alert(data.message || "❌ Login failed");
      }
    } catch (error) {
      console.error("API Error:", error);
      alert("❌ Server error");
    }
  };

  return (
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>Login</h2>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input
            type="password"
            name="password"
            onChange={handleChange}
            required
          />
        </div>

        <button type="submit" className="login-button">
          Login
        </button>
        {/* 
        {message && <p style={{ marginTop: "15px", color: "#B696C5" }}>{message}</p>} */}

        <div className="register-link">
          Don’t have an account? <a href="/register">Register</a>
        </div>
      </form>
    </div>
  );
};

export default Login;

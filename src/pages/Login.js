// src/pages/Login.js
import React, { useState } from "react";
import "../styles/login.css"; // your existing CSS
import "../styles/variables.css";
import {API} from "../config/api";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await fetch(API.LOGIN, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(form),
      });

      const data = await res.json();
      if (!res.ok) {
        alert(data.message || "Login failed");
        return;
      }

      // token & role save
      localStorage.setItem("token", data.token);
      localStorage.setItem("role", data.user.role);

      // role wise navigation
      if (data.user.role === "Doctor") {
        navigate("/doctor/dashboard");
      } else if (data.user.role === "Patient") {
        navigate("/patient/dashboard");
      } else if (data.user.role === "Admin") {
        navigate("/admin/dashboard");
      } else {
        navigate("/");
      }

    } catch (err) {
      console.error("Login error:", err);
      alert("Something went wrong");
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

// src/components/Header.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { FaUserCircle } from "react-icons/fa"; // dashboard icon
import "./header.css";

const Header = () => {
  const navigate = useNavigate();
  const role = localStorage.getItem("role");

  const goToDashboard = () => {
    if (role === "Doctor") {
      navigate("/doctor/dashboard");
    } else if (role === "Patient") {
      navigate("/patient/dashboard");
    } else {
      navigate("/"); // fallback
    }
  };

  return (
    <header className="site-header">
      <div className="logo">MEDCARE</div>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </nav>

      <div className="header-actions">
        <Link to="/login" className="login-btn">Login / Signup</Link>

        {role && (
          <FaUserCircle
            className="dashboard-icon"
            onClick={goToDashboard}
          />
        )}
      </div>
    </header>
  );
};

export default Header;

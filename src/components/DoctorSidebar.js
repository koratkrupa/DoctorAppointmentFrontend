// src/components/Sidebar.js
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import "./doctorSidebar.css";

const Sidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show confirmation dialog
    if (window.confirm("Are you sure you want to logout?")) {
      // Clear local storage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      
      // Redirect to home page
      navigate("/");
    }
  };

  return (
    <div className="doctor-sidebar">
      <h2 className="logo">Doctor Panel</h2>
      <ul className="menu">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/doctor/dashboard">Dashboard</Link></li>
        <li><Link to="/doctor/profile">Profile</Link></li>
        <li><Link to="/doctor/appointments">Appointments</Link></li>
        <li><Link to="/doctor/consultation">Consultations</Link></li>
        <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
      </ul>
    </div>
  );
};

export default Sidebar;

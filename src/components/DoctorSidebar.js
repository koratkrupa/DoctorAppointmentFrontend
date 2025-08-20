// src/components/Sidebar.js
import React from "react";
import { Link } from "react-router-dom";
import "./doctorSidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Doctor Panel</h2>
      <ul className="menu">
        <li><Link to="/doctor/dashboard">Dashboard</Link></li>
        <li><Link to="/doctor/profile">Profile</Link></li>
        <li><Link to="/doctor/appointments">Appointments</Link></li>
        <li><Link to="/logout">Logout</Link></li>
      </ul>
    </div>
  );
};

export default Sidebar;

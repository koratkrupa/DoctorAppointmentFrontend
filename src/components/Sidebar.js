import React from "react";
import { Link } from "react-router-dom";
import "../styles/sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar">
      <h2 className="logo">Doctor Panel</h2>
      <nav>
        <ul>
          <li><Link to="/doctor/dashboard">Dashboard</Link></li>
          <li><Link to="/doctor/appointments">Appointments</Link></li>
          <li><Link to="/doctor/patients">Patients</Link></li>
          <li><Link to="/doctor/profile">Profile</Link></li>
          <li><Link to="/doctor/settings">Settings</Link></li>
          <li><Link to="/logout">Logout</Link></li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;

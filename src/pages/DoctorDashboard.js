// src/pages/DoctorDashboard.js
import React from "react";
import Sidebar from "../components/DoctorSidebar";
import "../styles/doctorDashboard.css";

const DoctorDashboard = () => {
  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="dashboard-content">
        
        <div className="dashboard-header">
          <h1>Welcome Dr. XYZ 👋</h1>
          <p>You have 12 appointments today.</p>
        </div>

        <div className="stats-cards">
          <div className="card">
            <h2>Total Patients</h2>
            <p>200</p>
          </div>
          <div className="card">
            <h2>Upcoming Appointments</h2>
            <p>5</p>
          </div>
          <div className="card">
            <h2>Earnings</h2>
            <p>₹15,000</p>
          </div>
        </div>

      </div>
    </div>
  );
};

export default DoctorDashboard;

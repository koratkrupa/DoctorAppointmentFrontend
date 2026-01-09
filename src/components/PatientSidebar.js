import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import "./patientSidebar.css";

const PatientSidebar = () => {
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
    <div className="patient-sidebar">
      <div className="sidebar-menu">
        <h2>Patient Panel</h2>
        <ul>
          <li>
            <NavLink to="/" activeClassName="active">
              Home
            </NavLink>
          </li>
          <li>
            <NavLink to="/patient/dashboard" activeClassName="active">
              Dashboard
            </NavLink>
          </li>
          <li>
            <NavLink to="/patient/profile" activeClassName="active">
              Profile
            </NavLink>
          </li>
          <li>
            <NavLink to="/patient/appointments" activeClassName="active">
              Appointments
            </NavLink>
          </li>
          <li>
            <NavLink to="/patient/feedback" activeClassName="active">
              Feedback
            </NavLink>
          </li>
        </ul>

        {/* ✅ Logout Button just below Appointments */}
        <button className="logout-btn" onClick={handleLogout}>Logout</button>
      </div>
    </div>
  );
};

export default PatientSidebar;

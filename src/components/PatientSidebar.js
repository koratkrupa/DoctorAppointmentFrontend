import React from "react";
import { NavLink } from "react-router-dom";
import "./patientSidebar.css";

const PatientSidebar = () => {
  return (
    <div className="sidebar">
      <div className="sidebar-menu">
        <h2>Patient Panel</h2>
        <ul>
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
        </ul>

        {/* ✅ Logout Button just below Appointments */}
        <button className="logout-btn">Logout</button>
      </div>
    </div>
  );
};

export default PatientSidebar;

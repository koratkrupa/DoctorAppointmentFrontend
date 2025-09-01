import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './adminSidebar.css';

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    // Show confirmation dialog
    if (window.confirm("Are you sure you want to logout?")) {
      // Clear local storage
      localStorage.removeItem("token");
      localStorage.removeItem("role");
      localStorage.removeItem("user");
      
      // Redirect to home page
      navigate("/");
    }
  };

  return (
    <div className="admin-sidebar">
      <h2 className="logo">Admin Panel</h2>
      <ul className="menu">
        <li><Link to="/admin/dashboard">Dashboard</Link></li>
        <li><Link to="/admin/appointments">Appointments</Link></li>
        <li><Link to="/admin/users">Users</Link></li>
        <li><Link to="/admin/doctors">Doctors</Link></li>
        <li><button onClick={handleLogout} className="logout-btn">Logout</button></li>
      </ul>
    </div>
  );
};

export default AdminSidebar;

import React from 'react';
import { useNavigate } from 'react-router-dom';
import './adminSidebar.css';

const AdminSidebar = () => {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    localStorage.removeItem('role');
    navigate('/login');
  };

  return (
    <div className="admin-sidebar">
      <div className="sidebar-header">
        <h3>Admin Panel</h3>
      </div>
      
      <nav className="sidebar-nav">
        <button 
          onClick={() => navigate('/admin/dashboard')}
          className="nav-button"
        >
          <span className="nav-icon">📊</span>
          Dashboard
        </button>
        
        <button 
          onClick={() => navigate('/admin/appointments')}
          className="nav-button"
        >
          <span className="nav-icon">📅</span>
          Appointments
        </button>
        
        <button 
          onClick={() => navigate('/admin/users')}
          className="nav-button"
        >
          <span className="nav-icon">👥</span>
          Users
        </button>
        
        <button 
          onClick={() => navigate('/admin/doctors')}
          className="nav-button"
        >
          <span className="nav-icon">👨‍⚕️</span>
          Doctors
        </button>
      </nav>
      
      <div className="sidebar-footer">
        <button 
          onClick={handleLogout}
          className="logout-button"
        >
          <span className="nav-icon">🚪</span>
          Logout
        </button>
      </div>
    </div>
  );
};

export default AdminSidebar;

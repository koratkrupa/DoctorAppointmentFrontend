import React, { useState, useEffect, useCallback } from 'react';
import { API } from '../config/api';
import '../styles/adminDashboard.css';

const AdminDashboard = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [appointments, setAppointments] = useState([]);
  const [users, setUsers] = useState([]);
  const [doctors, setDoctors] = useState([]);
  const [stats, setStats] = useState({});
  const [adminInfo, setAdminInfo] = useState({});
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const token = localStorage.getItem('token');

  const fetchDashboardStats = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(API.ADMIN_DASHBOARD, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (response.ok) {

        setStats(data.stats);
        setAdminInfo(data.admin || {});
        setAppointments(data.recentAppointments || []);
      } else {
        setMessage(data.message || 'Error fetching dashboard data');
      }
    } catch (error) {
      setMessage('Error connecting to server');
    }
    setLoading(false);
  }, [token]);

  const fetchAppointments = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(API.ADMIN_APPOINTMENTS, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (response.ok) {
        setAppointments(data.appointments || []);
      } else {
        setMessage(data.message || 'Error fetching appointments');
      }
    } catch (error) {
      setMessage('Error connecting to server');
    }
    setLoading(false);
  }, [token]);

  const fetchUsers = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(API.ADMIN_USERS, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (response.ok) {
        setUsers(data.users || []);
      } else {
        setMessage(data.message || 'Error fetching users');
      }
    } catch (error) {
      setMessage('Error connecting to server');
    }
    setLoading(false);
  }, [token]);

  const fetchDoctors = useCallback(async () => {
    setLoading(true);
    try {
      const response = await fetch(API.ADMIN_DOCTORS, {
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (response.ok) {
        setDoctors(data.doctors || []);
      } else {
        setMessage(data.message || 'Error fetching doctors');
      }
    } catch (error) {
      setMessage('Error connecting to server');
    }
    setLoading(false);
  }, [token]);

  useEffect(() => {
    if (activeTab === 'dashboard') {
      fetchDashboardStats();
    } else if (activeTab === 'appointments') {
      fetchAppointments();
    } else if (activeTab === 'users') {
      fetchUsers();
    } else if (activeTab === 'doctors') {
      fetchDoctors();
    }
  }, [activeTab, fetchDashboardStats, fetchAppointments, fetchUsers, fetchDoctors]);

  const updateAppointmentStatus = async (appointmentId, newStatus) => {
    try {
      const response = await fetch(`${API.ADMIN_UPDATE_APPOINTMENT_STATUS}/${appointmentId}/status`, {
        method: 'PUT',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ status: newStatus })
      });
      const data = await response.json();
      if (response.ok) {
        setMessage('Appointment status updated successfully');
        fetchAppointments(); // Refresh the list
      } else {
        setMessage(data.message || 'Error updating appointment status');
      }
    } catch (error) {
      setMessage('Error connecting to server');
    }
  };

  const deleteAppointment = async (appointmentId) => {
    if (window.confirm('Are you sure you want to delete this appointment?')) {
      try {
        const response = await fetch(`${API.ADMIN_DELETE_APPOINTMENT}/${appointmentId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        if (response.ok) {
          setMessage('Appointment deleted successfully');
          fetchAppointments(); // Refresh the list
        } else {
          setMessage(data.message || 'Error deleting appointment');
        }
      } catch (error) {
        setMessage('Error connecting to server');
      }
    }
  };

  const getStatusColor = (status) => {
    switch (status) {
      case 'Pending': return '#ffc107';
      case 'Confirmed': return '#28a745';
      case 'Completed': return '#007bff';
      case 'Cancelled': return '#dc3545';
      case 'Rejected': return '#6c757d';
      case 'Expired': return '#6c757d';
      default: return '#6c757d';
    }
  };

  const renderDashboard = () => (
    <div className="admin-dashboard">
      <div className="dashboard-header">
        <h2>Admin Dashboard</h2>
        {adminInfo && adminInfo.name && (
          <div className="admin-info">
            <p>Welcome, <strong>{adminInfo.name}</strong></p>
            {adminInfo.permissions && Array.isArray(adminInfo.permissions) && adminInfo.permissions.length > 0 && (
              <p className="permissions">Permissions: {adminInfo.permissions.join(', ')}</p>
            )}
          </div>
        )}
      </div>
      <div className="stats-grid">
        <div className="stat-card">
          <h3>Total Users</h3>
          <p className="stat-number">{stats.totalUsers || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Total Doctors</h3>
          <p className="stat-number">{stats.totalDoctors || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Total Appointments</h3>
          <p className="stat-number">{stats.totalAppointments || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Pending Appointments</h3>
          <p className="stat-number">{stats.pendingAppointments || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Confirmed Appointments</h3>
          <p className="stat-number">{stats.confirmedAppointments || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Completed Appointments</h3>
          <p className="stat-number">{stats.completedAppointments || 0}</p>
        </div>
        <div className="stat-card">
          <h3>Expired Appointments</h3>
          <p className="stat-number">{stats.expiredAppointments || 0}</p>
        </div>
      </div>

      <div className="recent-appointments">
        <h3>Recent Appointments</h3>
        <div className="appointments-table">
          <table>
            <thead>
              <tr>
                <th>Date</th>
                <th>Time</th>
                <th>Patient</th>
                <th>Doctor</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
                          {appointments && appointments.length > 0 ? appointments.map(appointment => (
              <tr key={appointment.id}>
                <td>{appointment.date || "N/A"}</td>
                <td>{appointment.time || "N/A"}</td>
                <td>{appointment.patient?.name || "Unknown"}</td>
                <td>{appointment.doctor?.name || "Unknown"}</td>
                  <td>
                    <span 
                      className="status-badge" 
                      style={{ backgroundColor: getStatusColor(appointment.status) }}
                    >
                      {appointment.status}
                    </span>
                  </td>
                </tr>
              )) : (
                <tr>
                  <td colSpan="5" style={{ textAlign: 'center' }}>No appointments found</td>
                </tr>
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );

  const markExpiredAppointments = async () => {
    try {
      const response = await fetch(API.ADMIN_MARK_EXPIRED, {
        method: 'POST',
        headers: {
          'Authorization': `Bearer ${token}`,
          'Content-Type': 'application/json'
        }
      });
      const data = await response.json();
      if (response.ok) {
        setMessage(data.message);
        fetchAppointments(); // Refresh the list
      } else {
        setMessage(data.message || 'Error marking expired appointments');
      }
    } catch (error) {
      setMessage('Error connecting to server');
    }
  };

  const deleteUser = async (userId) => {
    if (window.confirm('Are you sure you want to delete this user? This will also delete all their appointments.')) {
      try {
        const response = await fetch(`${API.ADMIN_DELETE_USER}/${userId}`, {
          method: 'DELETE',
          headers: {
            'Authorization': `Bearer ${token}`,
            'Content-Type': 'application/json'
          }
        });
        const data = await response.json();
        if (response.ok) {
          setMessage('User deleted successfully');
          fetchUsers(); // Refresh the list
        } else {
          setMessage(data.message || 'Error deleting user');
        }
      } catch (error) {
        setMessage('Error connecting to server');
      }
    }
  };

  const renderAppointments = () => (
    <div className="admin-appointments">
      <div className="appointments-header">
        <h2>Manage Appointments</h2>
        <button 
          onClick={markExpiredAppointments}
          className="mark-expired-btn"
        >
          Mark Expired Appointments
        </button>
      </div>
      <div className="appointments-table">
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Time</th>
              <th>Patient</th>
              <th>Doctor</th>
              <th>Status</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {appointments && appointments.length > 0 ? appointments.map(appointment => (
              <tr key={appointment.id}>
                <td>{appointment.date}</td>
                <td>{appointment.time}</td>
                <td>
                  <div>
                    <strong>{appointment.patient.name}</strong>
                    <br />
                    <small>{appointment.patient.email}</small>
                    <br />
                    <small>{appointment.patient.phone}</small>
                  </div>
                </td>
                <td>
                  <div>
                    <strong>{appointment.doctor.name}</strong>
                    <br />
                    <small>{appointment.doctor.specialization}</small>
                  </div>
                </td>
                <td>
                  <select 
                    value={appointment.status}
                    onChange={(e) => updateAppointmentStatus(appointment.id, e.target.value)}
                    className="status-select"
                  >
                    <option value="Pending">Pending</option>
                    <option value="Confirmed">Confirmed</option>
                    <option value="Completed">Completed</option>
                    <option value="Cancelled">Cancelled</option>
                    <option value="Rejected">Rejected</option>
                    <option value="Expired">Expired</option>
                  </select>
                </td>
                <td>
                  <button 
                    onClick={() => deleteAppointment(appointment.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="6" style={{ textAlign: 'center' }}>No appointments found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderUsers = () => (
    <div className="admin-users">
      <h2>All Users</h2>
      <div className="users-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Gender</th>
              <th>Address</th>
              <th>Date of Birth</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {users && users.length > 0 ? users.map(user => (
              <tr key={user.id}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.phone}</td>
                <td>{user.gender}</td>
                <td>{user.address}</td>
                <td>{user.dob}</td>
                <td>
                  <button 
                    onClick={() => deleteUser(user.id)}
                    className="delete-btn"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            )) : (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center' }}>No users found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  const renderDoctors = () => (
    <div className="admin-doctors">
      <h2>All Doctors</h2>
      <div className="doctors-table">
        <table>
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th>Specialization</th>
              <th>Fees</th>
              <th>Experience</th>
              <th>Qualification</th>
            </tr>
          </thead>
          <tbody>
            {doctors && doctors.length > 0 ? doctors.map(doctor => (
              <tr key={doctor.id}>
                <td>{doctor.name}</td>
                <td>{doctor.email}</td>
                <td>{doctor.phone}</td>
                <td>{doctor.specialization}</td>
                <td>₹{doctor.fees}</td>
                <td>{doctor.experience} years</td>
                <td>{doctor.qualification}</td>
              </tr>
            )) : (
              <tr>
                <td colSpan="7" style={{ textAlign: 'center' }}>No doctors found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );

  return (
    <div className="admin-panel">
      <div className="admin-sidebar">
        <h3>Admin Panel</h3>
        <nav>
          <button 
            className={activeTab === 'dashboard' ? 'active' : ''}
            onClick={() => setActiveTab('dashboard')}
          >
            Dashboard
          </button>
          <button 
            className={activeTab === 'appointments' ? 'active' : ''}
            onClick={() => setActiveTab('appointments')}
          >
            Appointments
          </button>
          <button 
            className={activeTab === 'users' ? 'active' : ''}
            onClick={() => setActiveTab('users')}
          >
            Users
          </button>
          <button 
            className={activeTab === 'doctors' ? 'active' : ''}
            onClick={() => setActiveTab('doctors')}
          >
            Doctors
          </button>
        </nav>
      </div>

      <div className="admin-content">
        {message && (
          <div className="message">
            {message}
            <button onClick={() => setMessage('')}>×</button>
          </div>
        )}

        {loading && <div className="loading">Loading...</div>}

        {activeTab === 'dashboard' && renderDashboard()}
        {activeTab === 'appointments' && renderAppointments()}
        {activeTab === 'users' && renderUsers()}
        {activeTab === 'doctors' && renderDoctors()}
      </div>
    </div>
  );
};

export default AdminDashboard;

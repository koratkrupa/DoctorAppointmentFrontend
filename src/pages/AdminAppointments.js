import React, { useState, useEffect, useCallback } from 'react';
import { API } from '../config/api';
import AdminSidebar from '../components/AdminSidebar';
import '../styles/adminAppointments.css';

const AdminAppointments = () => {
  const [appointments, setAppointments] = useState([]);
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState('');

  const token = localStorage.getItem('token');

  useEffect(() => {
    fetchAppointments();
  }, []);

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

  return (
    <div className="dashboard-page">
      <AdminSidebar />
      <div className="dashboard-content">
        {message && (
          <div className="message">
            {message}
            <button onClick={() => setMessage('')}>×</button>
          </div>
        )}

        {loading && <div className="loading">Loading...</div>}

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
      </div>
    </div>
  );
};

export default AdminAppointments;

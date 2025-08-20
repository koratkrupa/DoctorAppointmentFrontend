// src/pages/DoctorAppointments.js
import React from "react";
import Sidebar from "../components/DoctorSidebar";
import "../styles/doctorAppointments.css";

const DoctorAppointments = () => {
  const appointments = [
    { id: 1, patient: "John Doe", date: "2025-08-20", time: "10:00 AM", status: "Upcoming" },
    { id: 2, patient: "Jane Smith", date: "2025-08-21", time: "11:30 AM", status: "Completed" },
    { id: 3, patient: "Robert Brown", date: "2025-08-22", time: "02:00 PM", status: "Upcoming" },
  ];

  return (
    <div className="appointments-page">
      <Sidebar />
      <div className="appointments-content">
        <h1>Appointments</h1>
        <table className="appointments-table">
          <thead>
            <tr>
              <th>ID</th>
              <th>Patient</th>
              <th>Date</th>
              <th>Time</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {appointments.map((appt) => (
              <tr key={appt.id}>
                <td>{appt.id}</td>
                <td>{appt.patient}</td>
                <td>{appt.date}</td>
                <td>{appt.time}</td>
                <td className={`status ${appt.status.toLowerCase()}`}>
                  {appt.status}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default DoctorAppointments;

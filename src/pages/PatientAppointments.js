import React, { useState } from "react";
import "../styles/patientAppointments.css";
import PatientSidebar from "../components/PatientSidebar";

const PatientAppointments = () => {
  const [appointments] = useState([
    {
      id: 1,
      doctor: "Dr. Mehul Shah",
      date: "2025-08-25",
      time: "10:30 AM",
      status: "Confirmed",
    },
    {
      id: 2,
      doctor: "Dr. Priya Patel",
      date: "2025-08-28",
      time: "03:00 PM",
      status: "Pending",
    },
    {
      id: 3,
      doctor: "Dr. Arjun Verma",
      date: "2025-09-02",
      time: "11:15 AM",
      status: "Cancelled",
    },
  ]);

  return (
    <div className="dashboard-page">
      <PatientSidebar/>
      <div className="appointments-container">
        <h2>My Appointments</h2>

        {appointments.length === 0 ? (
          <p className="no-appointments">No appointments found.</p>
        ) : (
          <table className="appointments-table">
            <thead>
              <tr>
                <th>Doctor</th>
                <th>Date</th>
                <th>Time</th>
                <th>Status</th>
              </tr>
            </thead>
            <tbody>
              {appointments.map((appt) => (
                <tr key={appt.id}>
                  <td>{appt.doctor}</td>
                  <td>{appt.date}</td>
                  <td>{appt.time}</td>
                  <td className={`status ${appt.status.toLowerCase()}`}>
                    {appt.status}
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        )}
      </div>
    </div>
  );
};

export default PatientAppointments;

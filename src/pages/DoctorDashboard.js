// frontend/src/pages/DoctorDashboard.js
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "../styles/doctorDashboard.css";

const API_BASE = process.env.REACT_APP_API || "http://localhost:5000";

export default function DoctorDashboard() {
  const [loading, setLoading] = useState(true);
  const [err, setErr] = useState("");
  const [data, setData] = useState(null);

  useEffect(() => {
    async function load() {
      try {
        setLoading(true);
        setErr("");

        // token ko login ke baad localStorage me save kiya tha:
        const token = localStorage.getItem("token");
        const res = await fetch(`${API_BASE}/doctor/dashboard`, {
          headers: { Authorization: `Bearer ${token}` },
        });

        const json = await res.json();
        if (!res.ok) throw new Error(json.message || "Failed");

        setData(json);
      } catch (e) {
        setErr(e.message);
      } finally {
        setLoading(false);
      }
    }
    load();
  }, []);

  return (
    <div className="dashboard-container">
      {/* Sidebar */}
      <aside className="sidebar">
        <h2>Doctor Panel</h2>
        <Link to="/doctor-dashboard">Dashboard</Link>
        <Link to="/doctor-appointments">Appointments</Link>
        <Link to="/doctor-patients">Patients</Link>
        <Link to="/doctor-profile">Profile</Link>
        <Link to="/doctor-settings">Settings</Link>
        <Link to="/logout">Logout</Link>
      </aside>

      {/* Content */}
      <main className="dashboard-content">
        {loading && <div>Loading…</div>}
        {err && <div style={{color:"crimson"}}>{err}</div>}

        {data && (
          <>
            <div className="dashboard-header">
              Welcome Dr. {data.doctor.name} 👋 You have {data.stats.todayAppointments} appointments today.
            </div>

            <section className="doctor-card">
              <img
                src={
                  data.doctor.profile_pic
                    ? `${API_BASE}${data.doctor.profile_pic.startsWith("/") ? "" : "/"}${data.doctor.profile_pic}`
                    : "https://via.placeholder.com/90?text=Dr"
                }
                alt="Doctor"
              />
              <div className="doctor-info">
                <h3>Dr. {data.doctor.name}</h3>
                <p>{data.doctor.specialization}</p>
                <p>{data.doctor.qualification}</p>
                <p>Experience: {data.doctor.experience} years</p>
                <p>Consultation fees: ₹{data.doctor.fees}</p>
              </div>
            </section>
          </>
        )}
      </main>
    </div>
  );
}

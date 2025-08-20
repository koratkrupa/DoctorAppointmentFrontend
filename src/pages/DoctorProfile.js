// src/pages/DoctorProfile.js
import React, { useState } from "react";
import Sidebar from "../components/DoctorSidebar";
import "../styles/doctorProfile.css";

const DoctorProfile = () => {
  const [edit, setEdit] = useState(false);
  const [doctor, setDoctor] = useState({
    name: "Dr. XYZ",
    specialization: "Cardiologist",
    experience: "10 years",
    fees: "₹500",
    email: "doctor@example.com",
    phone: "9876543210",
    profilePic: "https://via.placeholder.com/120"
  });

  const handleChange = (e) => {
    setDoctor({ ...doctor, [e.target.name]: e.target.value });
  };

  return (
    <div className="dashboard-page">
      <Sidebar />
      <div className="profile-container">
        {/* Left profile card */}
        <div className="profile-card">
          <img src={doctor.profilePic} alt="Doctor" className="profile-pic" />
          {edit ? (
            <input
              type="text"
              name="name"
              value={doctor.name}
              onChange={handleChange}
              className="edit-input"
            />
          ) : (
            <h2>{doctor.name}</h2>
          )}
          <p>{doctor.specialization}</p>
          <button className="edit-btn" onClick={() => setEdit(!edit)}>
            {edit ? "Save" : "Edit Profile"}
          </button>
        </div>

        {/* Right details section */}
        <div className="details-card">
          <h3>Profile Details</h3>
          <div className="detail-row">
            <span>Email:</span>
            {edit ? (
              <input
                type="email"
                name="email"
                value={doctor.email}
                onChange={handleChange}
              />
            ) : (
              <p>{doctor.email}</p>
            )}
          </div>
          <div className="detail-row">
            <span>Phone:</span>
            {edit ? (
              <input
                type="text"
                name="phone"
                value={doctor.phone}
                onChange={handleChange}
              />
            ) : (
              <p>{doctor.phone}</p>
            )}
          </div>
          <div className="detail-row">
            <span>Experience:</span>
            {edit ? (
              <input
                type="text"
                name="experience"
                value={doctor.experience}
                onChange={handleChange}
              />
            ) : (
              <p>{doctor.experience}</p>
            )}
          </div>
          <div className="detail-row">
            <span>Fees:</span>
            {edit ? (
              <input
                type="text"
                name="fees"
                value={doctor.fees}
                onChange={handleChange}
              />
            ) : (
              <p>{doctor.fees}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;

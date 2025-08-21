import React, { useState } from "react";
import "../styles/patientProfile.css";
import PatientSidebar from "../components/PatientSidebar";

const PatientProfile = () => {
  const [edit, setEdit] = useState(false);

  const [patient, setPatient] = useState({
    name: "Korat Krupa",
    email: "krupa@gmail.com",
    phone: "9876543210",
    address: "Surat, Gujarat",
    dob: "1999-05-12",
    gender: "Female",
    role: "Patient", 
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setPatient({ ...patient, [name]: value });
  };

  return (
    <div className="dashboard-page">
      <div className="profile-container">
        <PatientSidebar/>
        <div className="profile-card">
          {edit ? (
            <input
              type="text"
              name="name"
              value={patient.name}
              onChange={handleChange}
              className="edit-input"
            />
          ) : (
            <>
              <h2>{patient.name}</h2>
              <p className="role-text">{patient.role}</p> {/* 👈 Role yaha show hoga */}
            </>
          )}

          <button className="edit-btn" onClick={() => setEdit(!edit)}>
            {edit ? "Save" : "Edit Profile"}
          </button>
        </div>

        {/* Right side details */}
        <div className="details-card">
          <h3>Patient Details</h3>

          <div className="detail-row">
            <span>Email:</span>
            {edit ? (
              <input
                type="email"
                name="email"
                value={patient.email}
                onChange={handleChange}
              />
            ) : (
              <p>{patient.email}</p>
            )}
          </div>

          <div className="detail-row">
            <span>Phone:</span>
            {edit ? (
              <input
                type="text"
                name="phone"
                value={patient.phone}
                onChange={handleChange}
              />
            ) : (
              <p>{patient.phone}</p>
            )}
          </div>

          <div className="detail-row">
            <span>Address:</span>
            {edit ? (
              <input
                type="text"
                name="address"
                value={patient.address}
                onChange={handleChange}
              />
            ) : (
              <p>{patient.address}</p>
            )}
          </div>

          <div className="detail-row">
            <span>Date of Birth:</span>
            {edit ? (
              <input
                type="date"
                name="dob"
                value={patient.dob}
                onChange={handleChange}
              />
            ) : (
              <p>{patient.dob}</p>
            )}
          </div>

          <div className="detail-row">
            <span>Gender:</span>
            {edit ? (
              <select
                name="gender"
                value={patient.gender}
                onChange={handleChange}
              >
                <option>Male</option>
                <option>Female</option>
                <option>Other</option>
              </select>
            ) : (
              <p>{patient.gender}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;

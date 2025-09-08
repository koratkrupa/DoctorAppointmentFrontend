// src/pages/DoctorListing.js
import React, { useState, useEffect, useCallback } from "react";
import Header from "../components/Header";
import Footer from "../components/Footer";
import { API } from "../config/api";
import { useNavigate, useSearchParams } from "react-router-dom";
import "../styles/doctorListing.css";

const DoctorListing = () => {
  const [doctors, setDoctors] = useState([]);
  const [loading, setLoading] = useState(true);
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("all");
  const [filteredDoctors, setFilteredDoctors] = useState([]);
  const navigate = useNavigate();
  const [searchParams] = useSearchParams();

  const specialities = [
    "all", "Cardiology", "Dentist", "Neurology",
    "Orthopedics", "General Doctor"
  ];

  const fetchDoctors = useCallback(async () => {
    try {
      const res = await fetch(API.ALL_DOCTORS);
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to load doctors");

      setDoctors(data.doctors || []);
    } catch (error) {
      console.error("Error fetching doctors:", error);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    fetchDoctors();

    // Handle URL parameters
    const urlSearch = searchParams.get('search');
    const urlSpecialization = searchParams.get('specialization');

    if (urlSearch) setSearchTerm(urlSearch);
    if (urlSpecialization) setSelectedSpecialty(urlSpecialization);
  }, [searchParams, fetchDoctors]);

  useEffect(() => {
    // Filter doctors based on search and specialty
    let filtered = doctors;

    if (selectedSpecialty !== "all") {
      filtered = filtered.filter(doctor =>
        doctor.specialization?.toLowerCase().includes(selectedSpecialty.toLowerCase())
      );
    }

    if (searchTerm) {
      filtered = filtered.filter(doctor =>
        doctor.name?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.specialization?.toLowerCase().includes(searchTerm.toLowerCase()) ||
        doctor.qualification?.toLowerCase().includes(searchTerm.toLowerCase())
      );
    }

    setFilteredDoctors(filtered);
  }, [doctors, searchTerm, selectedSpecialty]);

  const handleBookAppointment = (doctorId) => {
    // Check if user is logged in and is a patient
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
      alert("Please login to book an appointment");
      navigate("/login");
      return;
    }

    if (role !== "Patient") {
      alert("Only patients can book appointments");
      return;
    }

    // Navigate to appointment booking page with doctor ID
    navigate(`/book-appointment/${doctorId}`);
  };

  const handleViewProfile = (doctorId) => {
    // Navigate to doctor profile page with doctor ID
    navigate(`/doctor-profile/${doctorId}`);
  };

  const BACKEND_URL = "http://localhost:5000";

  return (
    <>
      <Header />

      <div className="doctor-listing-container">
        {/* Search and Filter Section */}
        <div className="search-filter-section">
          <div className="search-bar">
            <input
              type="text"
              placeholder="Search doctors by name, specialization, or qualification..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
            <button className="search-btn">Search</button>
          </div>

          <div className="filter-section">
            <label>Filter by Speciality:</label>
            <select
              value={selectedSpecialty}
              onChange={(e) => setSelectedSpecialty(e.target.value)}
            >
              {specialities.map(specialty => (
                <option key={specialty} value={specialty}>
                  {specialty === "all" ? "All Specialities" : specialty}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Results Count */}
        <div className="results-info">
          <h2>Available Doctors</h2>
          <p>{filteredDoctors.length} doctor{filteredDoctors.length !== 1 ? 's' : ''} found</p>
        </div>

        {/* Loading State */}
        {loading ? (
          <div className="loading">
            <p>Loading doctors...</p>
          </div>
        ) : (
          /* Doctors Grid */
          <div className="doctors-grid">
            {filteredDoctors.length === 0 ? (
              <div className="no-results">
                <p>No doctors found matching your criteria.</p>
                <button onClick={() => {
                  setSearchTerm("");
                  setSelectedSpecialty("all");
                }}>Clear Filters</button>
              </div>
            ) : (
              filteredDoctors.map((doctor) => (
                <div key={doctor.id} className="doctor-card">
                  <div className="doctor-image">
                    <img
                      src={doctor.profile_pic ? `${BACKEND_URL}${doctor.profile_pic}` : ""}
                      alt={doctor.name}
                      onError={(e) => {
                        e.target.style.display = "none";
                      }}
                    />
                  </div>

                  <div className="doctor-info">
                    <h3>{doctor.name}</h3>
                    <p className="specialization">{doctor.specialization}</p>
                    <p className="qualification">{doctor.qualification}</p>
                    <p className="experience">{doctor.experience} years experience</p>
                    <p className="fees">₹{doctor.fees} consultation fee</p>
                    {doctor.phone && <p className="phone">📞 {doctor.phone}</p>}

                    <div className="rating">
                      <span>⭐ {doctor.rating}</span>
                      <span className="available">Available</span>
                    </div>
                  </div>

                  <div className="doctor-actions">
                    <button
                      className="book-appointment-btn"
                      onClick={() => handleBookAppointment(doctor.id)}
                    >
                      Book Appointment
                    </button>
                    <button
                      className="view-profile-btn"
                      onClick={() => handleViewProfile(doctor.id)}
                    >
                      View Profile
                    </button>
                  </div>
                </div>
              ))
            )}
          </div>
        )}
      </div>

      <Footer />
    </>
  );
};

export default DoctorListing;

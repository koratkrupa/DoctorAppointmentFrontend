import React, { useState, useEffect, useCallback } from "react";
import { useParams, useNavigate } from "react-router-dom";
import Header from "../components/header";
import Footer from "../components/footer";
import { API } from "../config/api";
import "../styles/publicDoctorProfile.css";

const PublicDoctorProfile = () => {
  const { doctorId } = useParams();
  const navigate = useNavigate();
  const [doctor, setDoctor] = useState(null);
  const [loading, setLoading] = useState(true);
  const [message, setMessage] = useState("");

  const BACKEND_URL = "http://localhost:5000";

  const fetchDoctorDetails = useCallback(async () => {
    try {
      const res = await fetch(API.ALL_DOCTORS);
      const data = await res.json();
      if (!res.ok) throw new Error(data.message || "Failed to load doctor details");
      
      const doctorData = data.doctors?.find(d => d.id === doctorId || d._id === doctorId);
      if (doctorData) {
        setDoctor(doctorData);
      } else {
        setMessage("Doctor not found");
      }
    } catch (error) {
      console.error("Error fetching doctor details:", error);
      setMessage("Failed to load doctor details");
    } finally {
      setLoading(false);
    }
  }, [doctorId]);

  useEffect(() => {
    fetchDoctorDetails();
  }, [fetchDoctorDetails]);

  const handleBookAppointment = () => {
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
    
    navigate(`/book-appointment/${doctorId}`);
  };

  if (loading) {
    return (
      <>
        <Header />
        <div className="loading-container">
          <p>Loading doctor profile...</p>
        </div>
        <Footer />
      </>
    );
  }

  if (!doctor) {
    return (
      <>
        <Header />
        <div className="error-container">
          <p>{message}</p>
          <button onClick={() => navigate("/doctors")}>Back to Doctors</button>
        </div>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />
      
      <div className="doctor-profile-container">
        <div className="profile-header">
          <div className="profile-image">
            <img 
                             src={doctor.profile_pic ? `${BACKEND_URL}${doctor.profile_pic}` : ""} 
               alt={doctor.name}
               onError={(e) => {
                 e.target.style.display = "none";
               }}
            />
          </div>
          
          <div className="profile-info">
            <h1>Dr. {doctor.name}</h1>
            <p className="specialization">{doctor.specialization}</p>
            <p className="qualification">{doctor.qualification}</p>
            <div className="rating">
              <span>⭐ {doctor.rating}</span>
              <span className="experience">{doctor.experience} years experience</span>
            </div>
            <p className="fees">₹{doctor.fees} consultation fee</p>
            
            <div className="profile-actions">
              <button onClick={handleBookAppointment} className="book-appointment-btn">
                Book Appointment
              </button>
              <button onClick={() => navigate("/doctors")} className="back-btn">
                Back to Doctors
              </button>
            </div>
          </div>
        </div>

        <div className="profile-content">
          <div className="profile-section">
            <h2>About Dr. {doctor.name}</h2>
            <p className="about-text">
              Dr. {doctor.name} is a highly qualified {doctor.specialization} specialist with {doctor.experience} years of experience in providing exceptional healthcare services. 
              With a strong educational background and extensive clinical experience, Dr. {doctor.name} is committed to delivering personalized care and treatment to patients.
            </p>
          </div>

          <div className="profile-section">
            <h2>Specialization</h2>
            <div className="specialization-card">
              <h3>{doctor.specialization}</h3>
              <p>Expert in diagnosing and treating {doctor.specialization.toLowerCase()} related conditions and diseases.</p>
            </div>
          </div>

          <div className="profile-section">
            <h2>Contact Information</h2>
            <div className="contact-card">
              <div className="contact-item">
                <h3>Email</h3>
                <p>{doctor.email}</p>
              </div>
              {doctor.phone && (
                <div className="contact-item">
                  <h3>Phone</h3>
                  <p>{doctor.phone}</p>
                </div>
              )}
            </div>
          </div>

          <div className="profile-section">
            <h2>Education & Qualifications</h2>
            <div className="qualification-card">
              <h3>Professional Qualifications</h3>
              <p>{doctor.qualification}</p>
            </div>
          </div>

          <div className="profile-section">
            <h2>Experience</h2>
            <div className="experience-card">
              <h3>Clinical Experience</h3>
              <p>{doctor.experience} years of dedicated service in the field of {doctor.specialization.toLowerCase()}.</p>
              <ul>
                <li>Specialized in {doctor.specialization}</li>
                <li>Experienced in both diagnosis and treatment</li>
                <li>Patient-centered approach to healthcare</li>
                <li>Continuous professional development</li>
              </ul>
            </div>
          </div>

          <div className="profile-section">
            <h2>Services Offered</h2>
            <div className="services-grid">
              <div className="service-card">
                <h3>Consultation</h3>
                <p>Comprehensive medical consultation and examination</p>
              </div>
              <div className="service-card">
                <h3>Diagnosis</h3>
                <p>Accurate diagnosis of medical conditions</p>
              </div>
              <div className="service-card">
                <h3>Treatment</h3>
                <p>Effective treatment plans and medication</p>
              </div>
              <div className="service-card">
                <h3>Follow-up</h3>
                <p>Regular follow-up care and monitoring</p>
              </div>
            </div>
          </div>

          <div className="profile-section">
            <h2>Patient Reviews</h2>
            <div className="reviews-section">
              <div className="overall-rating">
                <span className="rating-number">{doctor.rating}</span>
                <span className="rating-stars">⭐⭐⭐⭐⭐</span>
                <p>Overall Rating</p>
              </div>
              <p className="reviews-note">
                Based on patient feedback and satisfaction scores. Dr. {doctor.name} maintains high standards of care and patient satisfaction.
              </p>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default PublicDoctorProfile;

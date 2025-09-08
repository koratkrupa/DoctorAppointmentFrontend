import React, { useState } from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import { useNavigate } from "react-router-dom";
import "../styles/home.css";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Home = () => {

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 800,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [searchQuery, setSearchQuery] = useState("");
  const navigate = useNavigate();

  const handleSearch = () => {
    if (searchQuery.trim()) {
      navigate(`/doctors?search=${encodeURIComponent(searchQuery)}`);
    } else {
      navigate('/doctors');
    }
  };

  const handleSpecialtyClick = (specialty) => {
    navigate(`/doctors?specialization=${encodeURIComponent(specialty)}`);
  };

  const handleSymptomClick = (symptom) => {
    navigate(`/doctors?search=${encodeURIComponent(symptom)}`);
  };

  const handleBookNow = (service) => {
    // Check if user is logged in and is a patient
    const token = localStorage.getItem("token");
    const role = localStorage.getItem("role");

    if (!token) {
      alert("Please login to book appointments");
      navigate("/login");
      return;
    }

    if (role !== "Patient") {
      alert("Only patients can book appointments");
      return;
    }

    // Navigate to doctors listing for the specific service
    if (service === "appointment" || service === "consultation") {
      navigate("/doctors");
    } else if (service === "labtest") {
      alert("Lab test booking feature coming soon!");
    }
  };

  return (
    <>
      <Header />
      {/* Search bar */}
      <div className="search-bar">
        <input
          type="text"
          placeholder="Search doctors by name, specialization, or symptoms..."
          value={searchQuery}
          onChange={(e) => setSearchQuery(e.target.value)}
          onKeyPress={(e) => e.key === 'Enter' && handleSearch()}
        />
        <button onClick={handleSearch} className="search-btn">Search</button>
      </div>

      {/* Banner Slider */}
      <div className="banner-slider">
        <Slider {...sliderSettings}>
          <div><img src="/images/banner/banner-3.jpeg" alt="Hospital 1" /></div>
          <div><img src="/images/banner/Banner-1.png" alt="Hospital 2" /></div>
          <div><img src="/images/banner/banner-2.jpeg" alt="Hospital 3" /></div>
        </Slider>
      </div>
      <div className="home-cards">
        <div className="card">
          <p>Book Appointment</p>
          <button className="book-btn" onClick={() => handleBookNow("appointment")}>Book Now</button>
        </div>

        <div className="card">
          <p>Online Doctor Consultation</p>
          <button className="book-btn" onClick={() => handleBookNow("consultation")}>Book Now</button>
        </div>

        <div className="card">
          <p>Book Lab Test</p>
          <button className="book-btn" onClick={() => handleBookNow("labtest")}>Book Now</button>
        </div>
      </div>
      {/* Specialities */}
      <h2>Select a Speciality</h2>
      <div className="specialities">
        <div className="speciality" onClick={() => handleSpecialtyClick("General Doctor")}>
          <img src="/images/specialities/generaldoctor.png" alt="Skin Care" />
          <span>General Doctor</span>
          <button className="book-btn">Find Doctors</button>
        </div>
        <div className="speciality" onClick={() => handleSpecialtyClick("Dentist")}>
          <img src="/images/specialities/dentist.png" alt="Dentist" />
          <span>Dentist</span>
          <button className="book-btn">Find Doctors</button>
        </div>
        <div className="speciality" onClick={() => handleSpecialtyClick("Cardiology")}>
          <img src="/images/specialities/heart.png" alt="Cardiology" />
          <span>Cardiology</span>
          <button className="book-btn">Find Doctors</button>
        </div>
        <div className="speciality" onClick={() => handleSpecialtyClick("Orthopedics")}>
          <img src="/images/specialities/orthopedics.png" alt="Neurology" />
          <span>Orthopedics</span>
          <button className="book-btn">Find Doctors</button>
        </div>
      </div>

      {/* Symptoms */}
      <h2>Symptoms</h2>
      <div className="symptoms">
        <div className="symptom" onClick={() => handleSymptomClick("General Doctor")}>
          <img src="/images/symptoms/fever.png" alt="Fever" />
          <span>Fever</span>
          <button className="book-btn">Find Doctors</button>
        </div>
        <div className="symptom" onClick={() => handleSymptomClick("General Doctor")}>
          <img src="/images/symptoms/cough.png" alt="Cough" />
          <span>Cough</span>
          <button className="book-btn">Find Doctors</button>
        </div>
        <div className="symptom" onClick={() => handleSymptomClick("General Doctor")}>
          <img src="/images/symptoms/Headache.png" alt="Headache" />
          <span>Headache</span>
          <button className="book-btn">Find Doctors</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;

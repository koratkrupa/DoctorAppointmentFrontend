import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/home.css";

const Home = () => {
  return (
    <>
      <Header />
      {/* Search bar */}
      <div className="search-bar">
        <input type="text" placeholder="Search by City" />
      </div>
      <div className="home-cards">
        <div className="card">
          <p>Book Appointment</p>
          <button className="book-btn">Book Now</button>
        </div>

        <div className="card">
          <p>Online Doctor Consultation</p>
          <button className="book-btn">Book Now</button>
        </div>

        <div className="card">
          <p>Book Lab Test</p>
          <button className="book-btn">Book Now</button>
        </div>
      </div>
      {/* Specialities */}
      <h2>Select a Speciality</h2>
      <div className="specialities">
        <div className="speciality">
          <img src="/images/dentist.png" alt="Dentist" />
          <span>Dentist</span>
          <button className="book-btn">Book Now</button>
        </div>
        <div className="speciality">
          <img src="/images/heart.png" alt="Cardiology" />
          <span>Cardiology</span>
          <button className="book-btn">Book Now</button>
        </div>
        <div className="speciality">
          <img src="/images/skin.png" alt="Skin Care" />
          <span>Skin Care</span>
          <button className="book-btn">Book Now</button>
        </div>
        <div className="speciality">
          <img src="/images/neurology.png" alt="Neurology" />
          <span>Neurology</span>
          <button className="book-btn">Book Now</button>
        </div>
      </div>

      {/* Symptoms */}
      <h2>Symptoms</h2>
      <div className="symptoms">
        <div className="symptom">
          <img src="/images/fever.png" alt="Fever" />
          <span>Fever</span>
          <button className="book-btn">Book Now</button>
        </div>
        <div className="symptom">
          <img src="/images/cough.png" alt="Cough" />
          <span>Cough</span>
          <button className="book-btn">Book Now</button>
        </div>
        <div className="symptom">
          <img src="/images/headache.png" alt="Headache" />
          <span>Headache</span>
          <button className="book-btn">Book Now</button>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default Home;

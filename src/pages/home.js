import React from "react";
import "../styles/home.css";
import Header from "../components/header";
import Footer from "../components/footer";

const Home = () => {
  return (
    <div className="home-wrapper">
     <Header/>
      
      {/* Location + Search */}
      <div className="location-search">
        <span>📍 India</span>
        <input type="text" placeholder="Search by specialty" />
      </div>

      {/* Action Cards */}
      <div className="action-cards">
        <div className="card active">
          <span>📅</span>
          <h3>Book Appointment</h3>
        </div>
        <div className="card">
          <span>💬</span>
          <h3>Online Consultation</h3>
        </div>
        <div className="card">
          <span>🧪</span>
          <h3>Book Lab Test</h3>
        </div>
      </div>

      {/* Specialities */}
      <section className="speciality-section">
        <h2>Select a Speciality</h2>
        <div className="speciality-grid">
          {[
            "General",
            "Dental",
            "Ortho",
            "Pediatrics",
            "Gynecology",
            "Cardio",
            "Psychology",
            "Oncology",
          ].map((title, index) => (
            <div className="speciality-card" key={index}>
              <div className="icon"><img src={require(`../assets/icons/general-practitioner.jpg`)} alt="General Practitioner" className="icon-img" />
</div>
              <p>{title}</p>
              <button>Book Now</button>
            </div>
          ))}
        </div>
      </section>

      {/* Lab Tests Section */}
      <section className="lab-tests-section">
        <div className="section-header">
          <h2>Frequently Booked Lab Tests</h2>
          <button className="view-all-btn">View All</button>
        </div>
        <div className="lab-test-grid">
          {[
            { name: "Random Blood Sugar (RBS)", discount: "28.9%" },
            { name: "Thyroid Peroxidase Antibodies (TPO)", discount: "33.4%" },
            { name: "Glucose, Fasting Blood Sugar (FBS)", discount: "28.9%" },
            { name: "Erythrocyte Sedimentation Rate (ESR)", discount: "30.8%" },
            { name: "Glycosylated Hemoglobin (HbA1C)", discount: "32%" },
          ].map((test, index) => (
            <div className="lab-test-card" key={index}>
              <span className="discount">{test.discount}</span>
              <div className="icon">🧪</div>
              <p>{test.name}</p>
              <button className="view-details">View Details</button>
            </div>
          ))}
        </div>
      </section>
      <Footer/>
    </div>
  );
};

export default Home;

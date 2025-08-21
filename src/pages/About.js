     import React from "react";
import Header from "../components/header";
import Footer from "../components/footer";
import "../styles/about.css";

const About = () => {
  return (
    <>
      <Header />

      <div className="about-page">
        <h1>About Us</h1>
        <p>
          Welcome to our HealthCare platform! We are dedicated to providing
          the best medical services, connecting patients with certified
          doctors and labs across the country. Our mission is to make
          healthcare accessible, simple, and reliable for everyone.
        </p>

        <div className="about-cards">
          <div className="about-card">
            <h3>Our Mission</h3>
            <p>
              To provide quality healthcare services and simplify medical
              appointments for every patient.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Vision</h3>
            <p>
              To be the most trusted healthcare platform, making medical
              support accessible to all.
            </p>
          </div>

          <div className="about-card">
            <h3>Our Values</h3>
            <p>
              Compassion, transparency, and innovation guide everything we
              do.
            </p>
          </div>
        </div>
      </div>

      <Footer />
    </>
  );
};

export default About;

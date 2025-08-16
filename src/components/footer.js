// src/components/Footer.jsx
import React from "react";
import "./footer.css";

const Footer = () => {
  return (
    <footer className="main-footer">
      <p>&copy; {new Date().getFullYear()} Medicare. All rights reserved.</p>
    </footer>
  );
};

export default Footer;

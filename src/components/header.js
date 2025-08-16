// src/components/Header.jsx
import React from "react";
import "./header.css";
import Login from "../pages/Login";
const Header = () => {
  return (
    <header className="main-header">
      <div className="logo">MEDICARE</div>
      <nav className="navbar">
        <a href="/">Home</a>
        <a href="#">Consult Now</a>
        <a href="#">Book Lab Test</a>
        <a href="#">Packages</a>
        <a href="#">About Us</a>
        <a href="#">Help</a>
      </nav>
      <button className="login-btn"><a href="/Login">Login/Signup</a></button>
    </header>
  );
};

export default Header;

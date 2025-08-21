import React from "react";
import { Link } from "react-router-dom";
import "./header.css";

const Header = () => {
  return (
    <header className="site-header">
      <div className="logo">MEDCARE</div>
      <nav>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
      </nav>
      <Link to="/login" className="login-btn">Login / Signup</Link>
    </header>
  );
};

export default Header;

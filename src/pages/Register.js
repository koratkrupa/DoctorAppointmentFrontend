import React, { useState } from "react";
import "../styles/register.css";
import "../styles/variables.css";
import {useNavigate} from "react-router-dom";
import { API } from "../config/api";

const Register = () => {

  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    password: "",
    confirmPassword: "",
    gender: "",
    phone: "",
    address: "",
    dob: "",
    role: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (formData.password !== formData.confirmPassword) {
      alert("❌ Passwords do not match!");
      return;
    }

    const { confirmPassword, ...submitData } = formData;

    console.log("Submitting form data:", submitData);

    try {
      const res = await fetch(API.REGISTER, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(submitData),
      });

      const data = await res.json();
      if (res.ok) {
        alert(data.message); // ✅ backend se { message: "..."} aa raha hai
        if (formData.role === "Patient") {
          navigate("/patient/dashboard");
        } else if (formData.role === "Doctor") {
          navigate("/doctorsd", {state : {userId : data.user._id}});
        } else if (formData.role === "Admin") {
          navigate("/admin/dashboard");
        }
      } else {
        alert(data.message || "❌ Registration failed");
      }
    } catch (error) {
      console.error("❌ API error:", error);
      alert("Server error, try again later!");
    }
  };

  return (
    <div className="register-container">
      <form className="register-form" onSubmit={handleSubmit}>
        <h2>Register</h2>

        <div className="form-group">
          <label>Full Name</label>
          <input type="text" name="name" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Email</label>
          <input type="email" name="email" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Gender</label>
          <div className="gender-options">
            <label>
              <input type="radio" name="gender" value="Male" onChange={handleChange} required /> Male
            </label>
            <label>
              <input type="radio" name="gender" value="Female" onChange={handleChange} /> Female
            </label>
            <label>
              <input type="radio" name="gender" value="Other" onChange={handleChange} /> Other
            </label>
          </div>
        </div>

        <div className="form-group">
          <label>Phone Number</label>
          <input type="tel" name="phone" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Address</label>
          <textarea name="address" rows="3" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Date of Birth</label>
          <input type="date" name="dob" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Password</label>
          <input type="password" name="password" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Confirm Password</label>
          <input type="password" name="confirmPassword" onChange={handleChange} required />
        </div>

        <div className="form-group">
          <label>Role</label>
          <select name="role" onChange={handleChange} required>
            <option value="">Select Role</option>
            <option value="Patient">Patient</option>
            <option value="Doctor">Doctor</option>
            <option value="Admin">Admin</option>
          </select>
        </div>

        <button type="submit" className="register-button">
          Register
        </button>

        <div className="login-redirect">
          Already have an account? <a href="/login">Login here</a>
        </div>
      </form>
    </div>
  );
};

export default Register;

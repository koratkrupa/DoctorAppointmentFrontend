// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./pages/Register";
import DoctorDetailsForm from "./pages/DoctorDetailsForm";
import DoctorDashboard from "./pages/DoctorDashboard";
import DoctorProfile from "./pages/DoctorProfile";
import DoctorAppointments from "./pages/DoctorAppointments";
import PatientDashboard from "./pages/PatientDashboard";
import PatientProfile from "./pages/PatientProfile";
import PatientAppointments from "./pages/PatientAppointments";
import About from "./pages/About";
import Contact from "./pages/Contact";
import DoctorListing from "./pages/DoctorListing";
import BookAppointment from "./pages/BookAppointment";
import PublicDoctorProfile from "./pages/PublicDoctorProfile";
import AdminDashboard from "./pages/AdminDashboard";
import AdminAppointments from "./pages/AdminAppointments";
import AdminPatients from "./pages/AdminPatients";
import AdminDoctors from "./pages/AdminDoctors";
import AdminFeedback from "./pages/AdminFeedback";
import PatientFeedback from "./pages/PatientFeedback";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctorsd" element={<DoctorDetailsForm />} />
        <Route path="/doctor/dashboard" element={<DoctorDashboard />} />
        <Route path="/doctor/profile" element={<DoctorProfile />} />
        <Route path="/doctor/appointments" element={<DoctorAppointments />} />
        <Route path="/patient/dashboard" element={<PatientDashboard />} />
        <Route path="/patient/profile" element={<PatientProfile />} />
        <Route path="/patient/appointments" element={<PatientAppointments/>} />
        <Route path="/patient/feedback" element={<PatientFeedback/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/doctors" element={<DoctorListing/>} />
        <Route path="/book-appointment/:doctorId" element={<BookAppointment/>} />
        <Route path="/doctor-profile/:doctorId" element={<PublicDoctorProfile/>} />
        <Route path="/admin/dashboard" element={<AdminDashboard/>} />
        <Route path="/admin/appointments" element={<AdminAppointments/>} />
        <Route path="/admin/users" element={<AdminPatients/>} />
        <Route path="/admin/doctors" element={<AdminDoctors/>} />
        <Route path="/admin/feedback" element={<AdminFeedback/>} />

      </Routes>
    </Router>
  );
}

export default App;

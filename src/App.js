// import logo from './logo.svg';
import "./App.css";
import Home from "./pages/home";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./pages/Register";
import DoctorDetailsForm from "./pages/DoctorDetailsForm";
import DoctorDashboard from "./pages/DoctorDashboard";
// import Sidebar from "./components/Sidebar";
// import Dashboard from "./pages/Dashboard";
// import Appointments from "./pages/Appointments";
// import Patients from "./pages/Patients";
// import Settings from "./pages/Settings";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctorsd" element={<DoctorDetailsForm />} />
        <Route path="/doctor-dashboard" element={<DoctorDashboard />} />
        {/* <Route path="/doctor/dashboard" element={<Dashboard />} /> */}
        {/* <Route path="/appointments" element={<Appointments />} />
        <Route path="/patients" element={<Patients />} />
        <Route path="/settings" element={<Settings />} />
        <Route path="/logout" element={<h2>Logout Successful ✅</h2>} /> */}
      </Routes>
    </Router>
  );
}

export default App;

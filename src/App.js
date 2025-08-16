// import logo from './logo.svg';
import "./App.css";
import Login from "./pages/Login";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Register from "./pages/Register";
import DoctorDetailsForm from "./pages/DoctorDetailsForm";
import Home from "./pages/home";

function App() {
  return (
     <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/doctorsd" element={<DoctorDetailsForm />} />
        <Route path="/" element= {<Home/>} />
      </Routes>
    </Router>
  );
}

export default App;

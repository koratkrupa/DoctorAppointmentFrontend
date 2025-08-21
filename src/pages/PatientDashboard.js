import React from "react";
import PatientSidebar from "../components/PatientSidebar";
import "../styles/patientDashboard.css";

const PatientDashboard = () => {
     return (
          <div className="patient-dashboard-page">
               <PatientSidebar/>
               <div className="patient-dashboard-content">
                    <div className="patient-dashboard-header">
                         <h1>Welcome Patient 👋</h1>
                         <p>You have 3 upcoming appointments.</p>
                    </div>

                    <div className="patient-stats-cards">
                         <div className="patient-card">
                              <h2>Total Visits</h2>
                              <p>12</p>
                         </div>
                         <div className="patient-card">
                              <h2>Upcoming Appointments</h2>
                              <p>3</p>
                         </div>
                         <div className="patient-card">
                              <h2>Bills</h2>
                              <p>₹5,200</p>
                         </div>
                    </div>
               </div>
          </div>

     );
};

export default PatientDashboard;

// Backend base URL 
const BASE_URL = "http://localhost:5000";

export const API = {
  REGISTER: `${BASE_URL}/user/register`,
  LOGIN: `${BASE_URL}/user/login`,
  DOCTORDETAIL : `${BASE_URL}/doctor/details`,
  DOCTOR_DASHBOARD: `${BASE_URL}/doctor/dashboard`,
  DOCTOR_PROFILE_UPDATE: `${BASE_URL}/doctor/profile`,
  DOCTOR_APPOINTMENTS: `${BASE_URL}/doctor/appointments`,
  ALL_DOCTORS: `${BASE_URL}/doctor/all`,
  BOOK_APPOINTMENT: `${BASE_URL}/doctor/book-appointment`,
  PATIENT_DASHBOARD: `${BASE_URL}/user/dashboard`,
  PATIENT_APPOINTMENTS: `${BASE_URL}/user/appointments`,
  PATIENT_PROFILE: `${BASE_URL}/user/profile`,
  PATIENT_PROFILE_UPDATE: `${BASE_URL}/user/profile`
};

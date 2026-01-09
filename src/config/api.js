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
  PATIENT_PROFILE_UPDATE: `${BASE_URL}/user/profile`,
  // Feedback APIs
  SUBMIT_FEEDBACK: `${BASE_URL}/user/feedback`,
  GET_USER_FEEDBACK: `${BASE_URL}/user/feedback`,
  // Admin APIs
  ADMIN_DASHBOARD: `${BASE_URL}/admin/dashboard`,
  ADMIN_APPOINTMENTS: `${BASE_URL}/admin/appointments`,
  ADMIN_UPDATE_APPOINTMENT_STATUS: `${BASE_URL}/admin/appointments`,
  ADMIN_DELETE_APPOINTMENT: `${BASE_URL}/admin/appointments`,
  ADMIN_USERS: `${BASE_URL}/admin/users`,
  ADMIN_CREATE_USER: `${BASE_URL}/admin/users`,
  ADMIN_DELETE_USER: `${BASE_URL}/admin/users`,
  ADMIN_BOOK_APPOINTMENT: `${BASE_URL}/admin/appointments`,
  ADMIN_DOCTORS: `${BASE_URL}/admin/doctors`,
  ADMIN_CREATE: `${BASE_URL}/admin/create`,
  ADMIN_LIST: `${BASE_URL}/admin/list`,
  ADMIN_UPDATE_PERMISSIONS: `${BASE_URL}/admin/permissions`,
  ADMIN_DELETE: `${BASE_URL}/admin`,
  ADMIN_MARK_EXPIRED: `${BASE_URL}/admin/mark-expired`,
  // Admin Feedback APIs
  ADMIN_FEEDBACK: `${BASE_URL}/admin/feedback`,
  ADMIN_UPDATE_FEEDBACK_STATUS: `${BASE_URL}/admin/feedback`,
  ADMIN_RESPOND_FEEDBACK: `${BASE_URL}/admin/feedback`,
  ADMIN_DELETE_FEEDBACK: `${BASE_URL}/admin/feedback`
};

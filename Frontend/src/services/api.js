import axios from "axios";

const API_BASE_URL = "http://localhost:3000/api";

// ✅ Authentication
export const registerUser = (userData) => axios.post(`${API_BASE_URL}/auth/register`, userData);
export const loginUser = (credentials) => axios.post(`${API_BASE_URL}/auth/login`, credentials);
export const getProfile = (token) => axios.get(`${API_BASE_URL}/users/profile`, { headers: { Authorization: `Bearer ${token}` } });

// ✅ User Management (Admin Only)
export const getAllUsers = (token) => axios.get(`${API_BASE_URL}/admin/users`, { headers: { Authorization: `Bearer ${token}` } });
export const makeAdmin = (userId, token) => axios.put(`${API_BASE_URL}/admin/make-admin/${userId}`, {}, { headers: { Authorization: `Bearer ${token}` } });

// ✅ Insurance Routes
export const getAllInsurancePlans = () => axios.get(`${API_BASE_URL}/insurance`);
export const getInsuranceById = (id) => axios.get(`${API_BASE_URL}/insurance/${id}`);
export const createInsurancePlan = (planData, token) => axios.post(`${API_BASE_URL}/insurance`, planData, { headers: { Authorization: `Bearer ${token}` } });
export const updateInsurancePlan = (id, planData, token) => axios.put(`${API_BASE_URL}/insurance/${id}`, planData, { headers: { Authorization: `Bearer ${token}` } });
export const deleteInsurancePlan = (id, token) => axios.delete(`${API_BASE_URL}/insurance/${id}`, { headers: { Authorization: `Bearer ${token}` } });

// ✅ Policy Routes
export const getAllPolicies = (token) => axios.get(`${API_BASE_URL}/policies`, { headers: { Authorization: `Bearer ${token}` } });
export const getPolicyById = (id, token) => axios.get(`${API_BASE_URL}/policies/${id}`, { headers: { Authorization: `Bearer ${token}` } });
export const applyForPolicy = (policyData, token) => axios.post(`${API_BASE_URL}/policies`, policyData, { headers: { Authorization: `Bearer ${token}` } });
export const cancelPolicy = (id, token) => axios.delete(`${API_BASE_URL}/policies/${id}`, { headers: { Authorization: `Bearer ${token}` } });

// ✅ Claim Routes
export const getAllClaims = (token) => axios.get(`${API_BASE_URL}/claims`, { headers: { Authorization: `Bearer ${token}` } });
export const getClaimById = (id, token) => axios.get(`${API_BASE_URL}/claims/${id}`, { headers: { Authorization: `Bearer ${token}` } });
export const submitClaim = (claimData, token) => axios.post(`${API_BASE_URL}/claims`, claimData, { headers: { Authorization: `Bearer ${token}` } });
export const approveClaim = (id, status, token) => axios.put(`${API_BASE_URL}/admin/claims/${id}`, { status }, { headers: { Authorization: `Bearer ${token}` } });

// ✅ File Upload (Government ID)
export const uploadID = (fileData, token) => axios.post(`${API_BASE_URL}/upload/id`, fileData, { headers: { Authorization: `Bearer ${token}`, "Content-Type": "multipart/form-data" } });

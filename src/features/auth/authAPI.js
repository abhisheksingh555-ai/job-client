import axios from "../../services/axiosInstance";

export const registerUserAPI = (userData) => {
  return axios.post("/api/auth/register", userData);
};

export const loginUserAPI = (credentials) => {
  return axios.post("/api/auth/login", credentials);
};
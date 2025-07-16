import axios from "axios";
import { getSubdomain } from "../utils/getSubdomain";
const tenant = getSubdomain();
const api = axios.create({
  baseURL: `http://${tenant}.localhost:5164/api`, // Adjust if needed
});

api.interceptors.request.use((config) => {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;

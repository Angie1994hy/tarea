// services/api.ts
import axios from "axios";

const api = axios.create({
  baseURL: "https://reqres.in/api", // API de prueba que sí acepta register/login
  timeout: 10000,
  headers: {
    "Content-Type": "application/json"
  }
});

export default api;

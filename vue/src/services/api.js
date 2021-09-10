import axios from "axios";

const instance = axios.create({
  // baseURL: "http://localhost:8080/api", // for development environment
  // baseURL: "/api", // for production environment
  baseURL: "https://nodevueacc.herokuapp.com/api",
  headers: {
    "Content-Type": "application/json",
  },
});

export default instance;
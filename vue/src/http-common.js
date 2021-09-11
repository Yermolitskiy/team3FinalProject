import axios from "axios";

export default axios.create({
  // baseURL: "http://localhost:8080/api",
  // baseURL: "https://nodevueacc.herokuapp.com/api",
  // baseURL: `${process.env.PORT}`,
  // baseURL: "/api",
  headers: {
    "Content-type": "application/json"
  }
});

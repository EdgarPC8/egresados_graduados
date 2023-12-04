import axios from "axios";

const instance = axios.create({
  baseURL: "http://192.168.137.250:3000/api",
  // baseURL: "http://localhost:3000/api",
  withCredentials: true,
});

export default instance;


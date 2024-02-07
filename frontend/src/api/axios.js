import axios from "axios";

const instance = axios.create({
  // baseURL: "http://192.168.137.250:3000/api",
  // baseURL: "http://aplicaciones.marianosamaniego.edu.ec:3000/api",
  // baseURL: "http://dev.alum.com:3000/api",
  // baseURL: "http://localhost:3000/api",
  baseURL: "http://192.168.137.250:3000/api",
  withCredentials: true,
});

export const jwt = () => {
  return `Bearer ${window.localStorage.getItem("token")}`;
};

// export const urlPhotos = "http://aplicaciones.marianosamaniego.edu.ec:3000/photos";
// export const urlPhotos = "http://localhost:3000/photos";
// export const urlPhotos = "http://192.169.100.250:3000/photos";
export const urlPhotos = "http://192.168.137.250:3000/photos";
// export const urlPhotos = "http://dev.alum.com:3000/photos";

export default instance;

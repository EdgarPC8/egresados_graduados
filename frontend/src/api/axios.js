import axios from "axios";

const objUrl = {
  local: "localhost:3000",
  edgar: "192.168.137.250",
  alumni: "aplicaciones.marianosamaniego.edu.ec/alumniapi",
};
const url = objUrl.local;

const instance = axios.create({
  baseURL: `http://${url}`,
  withCredentials: true,
});
export const jwt = () => {
  return `Bearer ${window.localStorage.getItem("token")}`;
};

export const urlPhotos = `http://${url}/alumniapi/photos`;
// export const urlCsv = `http://${url}:3000/photos`;

export default instance;

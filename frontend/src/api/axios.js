import axios from "axios";

const objUrl = {
  local: "localhost:3000/api/",
  edgar: "192.168.137.250:3000/api/",
  alumni: "aplicaciones.marianosamaniego.edu.ec",
};
const url = objUrl.local;

const instance = axios.create({
  baseURL: `http://${url}`,
  withCredentials: true,
});
export const jwt = () => {
  return `Bearer ${window.localStorage.getItem("token")}`;
};

export const urlPhotos = `http://${url}:3000/photos`;
// export const urlCsv = `http://${url}:3000/photos`;

export default instance;

// import axios from "axios";

// const objUrl={
//   local:"localhost",
//   edgar:"192.168.137.250",
//   alumni:"aplicaciones.marianosamaniego.edu.ec",
// }
// const url =objUrl.alumni

// const instance = axios.create({
//   baseURL: `http://${url}/alumniapi`,
//   withCredentials: true,
// });
// export const jwt = () => {
//   return `Bearer ${window.localStorage.getItem("token")}`;
// };

// export const urlPhotos = `http://${url}/alumniapi/photos`;

// export default instance;

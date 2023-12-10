import axios from "./axios.js";

const token = `Bearer ${window.localStorage.getItem("token")}`;

const loginRequest = async (data) => await axios.post("/auth/login", data);

const verifyTokenRequest = async () =>
  await axios.get("/auth/verifytoken", {
    headers: {
      Authorization: token,
    },
  });

const getRoles = async () => await axios.get("/user/roles");

const getOneUser = async (userId) => await axios.get(`/user/${userId}`);

const updateDataUser = async (userId, userData) =>
  await axios.put(`/user/${userId}`, userData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: token,
    },
  });

export {
  loginRequest,
  verifyTokenRequest,
  getRoles,
  getOneUser,
  updateDataUser,
};

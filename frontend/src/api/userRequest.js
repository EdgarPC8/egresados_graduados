import axios from "./axios.js";
import { token } from "./axios.js";

const loginRequest = async (data) => await axios.post("/auth/login", data);

const verifyTokenRequest = async () =>
  await axios.get("/auth/verifytoken", {
    headers: {
      Authorization: token,
    },
  });

const getRoles = async () => await axios.get("/user/roles");

const getOneUser = async (userId) =>
  await axios.get(`/user/${userId}`, {
    headers: {
      Authorization: token,
    },
  });

const updateDataUser = async (userId, userData) =>
  await axios.put(`/user/${userId}`, userData, {
    headers: {
      "Content-Type": "multipart/form-data",
      Authorization: token,
    },
  });

const changePasswordRequest = async (userId, data) =>
  await axios.put(`/user/changePassword/${userId}`, data, {
    headers: {
      Authorization: token,
    },
  });

export {
  loginRequest,
  verifyTokenRequest,
  changePasswordRequest,
  getRoles,
  getOneUser,
  updateDataUser,
};

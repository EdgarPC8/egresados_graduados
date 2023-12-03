import axios from "./axios.js";

const authorization = {
  Authorization: `Bearer ${window.localStorage.getItem("token")}`,
};

const loginRequest = async (data) => await axios.post("/auth/login", data);

const verifyTokenRequest = async () =>
  await axios.get("/auth/verifytoken", { headers: authorization });

const getRoles = async () => await axios.get("/user/roles");

export { loginRequest, verifyTokenRequest, getRoles };

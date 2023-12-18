import axios from "./axios.js";

const token = `Bearer ${window.localStorage.getItem("token")}`;

export const getProfessionalsById = async (data) =>
  await axios.get(`/professionals/getProfessionalsById/${data}`, {
    headers: {
      Authorization: token,
    },
  });

// export const getAllProfessionals = async () =>
//   await axios.get("/cv/getAllProfessionals");
// export const addProfessionals = async (data) =>
//   await axios.post("/cv/addProfessionals", data);

// export const editProfessionals = async (id, data) =>
//   await axios.put(`/cv/editProfessionals${id}`, data);

// export const deleteProfessionals = async (data) =>
//   await axios.delete(`/cv/deleteProfessionals/${data}`);

// import axios from "./axios.js";
import axios, { jwt } from "./axios.js";


  export const getAllMatriz = async () =>
    await axios.get("/matriz/getAllMatriz",{
      headers: {
        Authorization: jwt(),
      },
    });
  export const getAllCareers = async () =>
    await axios.get("/matriz/getAllCareers",{
      headers: {
        Authorization: jwt(),
      },
    });
  export const getAllPeriods = async () =>
    await axios.get("/matriz/getAllPeriods",{
      headers: {
        Authorization: jwt(),
      },
    });

  export const addMatriz = async (data) =>
  await axios.post("/matriz/addMatriz", data, {
    headers: {
      Authorization: jwt(),
    },
  });
  export const addCareer = async (data) =>
  await axios.post("/matriz/addCareer", data, {
    headers: {
      Authorization: jwt(),
    },
  });
  export const addPeriod = async (data) =>
  await axios.post("/matriz/addPeriod", data, {
    headers: {
      Authorization: jwt(),
    },
  });
  export const removeMatriz = async (matrizId) =>
  await axios.delete(`/matriz/${matrizId}`, {
    headers: {
      Authorization: jwt(),
    },
  });

export const editCareer = async (id, data) =>
await axios.put(`/matriz/editCareer/${id}`, data, {
  headers: {
    Authorization: jwt(),
  },
});
export const editPeriod = async (id, data) =>
await axios.put(`/matriz/editPeriod/${id}`, data, {
  headers: {
    Authorization: jwt(),
  },
});
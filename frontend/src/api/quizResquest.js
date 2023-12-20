// import axios from "./axios.js";
import axios, { jwt } from "./axios.js";


export const getAllResponses = async () =>
  await axios.get("/quiz/getAllResponses",{
    headers: {
      Authorization: jwt(),
    },
  });
export const addResponses = async (data) =>
  await axios.post("/quiz/addResponses", data,{
    headers: {
      Authorization: jwt(),
    },
  });



export const editResponses = async (data) =>
  await axios.put("/quiz/editResponses", data);
export const deleteResponses = async (data) =>
  await axios.delete(`/quiz/deleteResponses/${data}`);
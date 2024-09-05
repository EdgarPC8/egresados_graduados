// import axios from "./axios.js";
import axios, { jwt } from "./axios.js";



  export const getAllStudents = async () =>
    await axios.get("/student/getAllStudents",{
      headers: {
        Authorization: jwt(),
      },
    });
    
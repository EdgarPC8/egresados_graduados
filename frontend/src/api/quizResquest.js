// import axios from "./axios.js";
import axios, { jwt } from "./axios.js";

export const getAllQuizzes = async () =>
  await axios.get("/quiz/getAllQuizzes", {
    headers: {
      Authorization: jwt(),
    },
  });

export const addQuiz = async (data) =>
  await axios.post("/quiz/addQuiz", data, {
    headers: {
      Authorization: jwt(),
    },
  });
export const editQuiz = async (id, data) =>
  await axios.put(`/quiz/editQuiz/${id}`, data, {
    headers: {
      Authorization: jwt(),
    },
  });

export const getOneQuiz = async (id) =>
  await axios.get(`/quiz/one/${id}`, {
    headers: {
      Authorization: jwt(),
    },
  });

export const createQuiz = async (id, data) =>
  await axios.put(`/quiz/updateQuestions/${id}`, data, {
    headers: {
      Authorization: jwt(),
    },
  });

// import axios from "./axios.js";
import axios, { jwt } from "./axios.js";

export const getAllQuizzes = async () =>
  await axios.get("/quiz/allQuizzes", {
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

export const getChartDataQuiz = async (id) =>
  await axios.get(`/quiz/chartDataQuiz/${id}`, {
    headers: {
      Authorization: jwt(),
    },
  });

export const verifyQuizCompleted = async ({ quizId, matrizId }) =>
  await axios.get("/quiz/verifyQuizCompleted", {
    params: {
      matrizId,
      quizId,
    },
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

export const getQuizzesProfessional = async (id) =>
  await axios.get(`/quiz/getQuizzesProfessional/${id}`, {
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

export const addAnswersQuiz = async ({ quizId, matrizId, data }) =>
  await axios.put("/quiz/addAnswersQuiz", data, {
    params: {
      quizId,
      matrizId,
    },
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

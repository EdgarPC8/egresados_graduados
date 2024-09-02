import axios, { jwt } from "./axios.js";


  export const getAllStudents = async () =>
    await axios.get("/matricula/getAllStudents",{
      headers: {
        Authorization: jwt(),
      },
    });

  export const getMatriculaFilter = async (data) =>
  await axios.post("/matricula/getMatriculaFilter", data, {
    headers: {
      Authorization: jwt(),
    },
  });

  export const addStudentsQuiz = async (data) =>
  await axios.post("/matricula/addStudentsQuiz", data, {
    headers: {
      Authorization: jwt(),
    },
  });

  export const deleteStudentsQuiz = async (matriId, quizId) =>
  await axios.delete(`/matricula/${matriId}/${quizId}`, {
    headers: {
      Authorization: jwt(),
    },
  });

  export const getStudentQuizFilter = async (data) =>
  await axios.get(`/matricula/getStudentQuizFilter/${data}`, {
    headers: {
      Authorization: jwt(),
    },
  });
  export const getQuizzesStudent = async (id) =>
  await axios.get(`/matricula/getQuizzesStudent/${id}`, {
    headers: {
      Authorization: jwt(),
    },
  });


export const verifyQuizCompletedStudent = async ({ quizId, studentId }) =>
await axios.get("/matricula/verifyQuizCompletedStudent", {
  params: {
    studentId,
    quizId,
  },
  headers: {
    Authorization: jwt(),
  },
});

// export const getOneQuiz = async (id) =>
// await axios.get(`/quiz/one/${id}`, {
//   headers: {
//     Authorization: jwt(),
//   },
// });

export const addAnswersQuizStudent = async ({ quizId, studentId, data }) =>
await axios.put("/matricula/addAnswersQuizStudent", data, {
  params: {
    quizId,
    studentId,
  },
  headers: {
    Authorization: jwt(),
  },
});
    
import axios from "./axios.js";

const getAllAcademicTraining = async () =>
  await axios.get("/cv/getAllAcademic_training");

const getAllTeachingExperience = async () =>
  await axios.get("/cv/getAllTeaching_experience");

const getAllCoursesWorkshops = async () =>
  await axios.get("/cv/getAllCourses_workshops");

const getAllIntellectualProduction = async () =>
  await axios.get("/cv/getAllIntellectual_production");

const getAllBooks = async () => await axios.get("/cv/getAllBooks");

const getAllAcademicProfessionalMerits = async () =>
  await axios.get("/cv/getAllAcademic_professional_merits");

const getAllLanguages = async () => await axios.get("/cv/getAllLanguages");

const getAllProfessionalExperience = async () =>
  await axios.get("/cv/getAllProfessional_experience");

const addProfessional = async (data) =>
  await axios.post("/professionals/addProfessional", data);

const addBooks = async (data) => await axios.post("/cv/addBooks", data);

const addAcademicTraining = async (data) =>
  await axios.post("/cv/addAcademic_training", data);

const addCoursesWorkShop = async (data) =>
  await axios.post("/cv/addCourses_workshops", data);

export {
  getAllAcademicTraining,
  getAllTeachingExperience,
  getAllCoursesWorkshops,
  getAllAcademicProfessionalMerits,
  getAllIntellectualProduction,
  getAllBooks,
  getAllLanguages,
  getAllProfessionalExperience,
  addProfessional,
  addBooks,
  addAcademicTraining,
  addCoursesWorkShop,
};

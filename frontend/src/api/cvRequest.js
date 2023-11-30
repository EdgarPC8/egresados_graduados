import axios from "./axios.js";

export const getAllAcademicTraining = async () =>
  await axios.get("/cv/getAllAcademic_training");

export const getAllTeachingExperience = async () =>
  await axios.get("/cv/getAllTeaching_experience");

export const getAllCoursesWorkshops = async () =>
  await axios.get("/cv/getAllCourses_workshops");

export const getAllIntellectualProduction = async () =>
  await axios.get("/cv/getAllIntellectual_production");

export const getAllBooks = async () => await axios.get("/cv/getAllBooks");

export const getAllAcademicProfessionalMerits = async () =>
  await axios.get("/cv/getAllAcademic_professional_merits");

export const getAllLanguages = async () => await axios.get("/cv/getAllLanguages");

export const getAllProfessionalExperience = async () =>
  await axios.get("/cv/getAllProfessional_experience");

export const addProfessional = async (data) =>
  await axios.post("/professionals/addProfessional", data);

export const addBooks = async (data) => await axios.post("/cv/addBooks", data);

export const addAcademicTraining = async (data) =>
  await axios.post("/cv/addAcademic_training", data);

export const addCoursesWorkShop = async (data) =>
  await axios.post("/cv/addCourses_workshops", data);

export const editAcademicTraining = async (data) =>
await axios.put("/cv/editAcademic_training", data);


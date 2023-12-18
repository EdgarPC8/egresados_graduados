import axios from "./axios.js";

export const getAllAcademicTraining = async () =>
  await axios.get("/cv/getAllAcademicTraining");
export const addAcademicTraining = async (data) =>
  await axios.post("/cv/addAcademicTraining", data);

export const editAcademicTraining = async (id, data) =>
  await axios.put(`/cv/editAcademicTraining/${id}`, data);

export const deleteAcademicTraining = async (data) =>
  await axios.delete(`/cv/deleteAcademicTraining/${data}`);

export const getAllProfessionalExperience = async () =>
  await axios.get("/cv/getAllProfessionalExperience");

export const addProfessionalExperience = async (data) =>
  await axios.post("/cv/addProfessionalExperience", data);

export const editProfessionalExperience = async (id, data) =>
  await axios.put(`/cv/editProfessionalExperience/${id}`, data);

export const deleteProfessionalExperience = async (data) =>
  await axios.delete(`/cv/deleteProfessionalExperience/${data}`);

export const getAllLanguages = async () =>
  await axios.get("/cv/getAllLanguages");

export const addLanguages = async (data) =>
  await axios.post("/cv/addLanguages", data);

export const editLanguages = async (id, data) =>
  await axios.put(`/cv/editLanguages/${id}`, data);

export const deleteLanguages = async (data) =>
  await axios.delete(`/cv/deleteLanguages/${data}`);

export const getAllAcademicProfessionalMerits = async () =>
  await axios.get("/cv/getAllAcademicProfessionalMerits");
export const addAcademicProfessionalMerits = async (data) =>
  await axios.post("/cv/addAcademicProfessionalMerits", data);

export const editAcademicProfessionalMerits = async (id, data) =>
  await axios.put(`/cv/editAcademicProfessionalMerit/${id}`, data);

export const deleteAcademicProfessionalMerits = async (data) =>
  await axios.delete(`/cv/deleteAcademicProfessionalMerits/${data}`);

export const getAllBooks = async () => await axios.get("/cv/getAllBooks");

export const addBooks = async (data) => await axios.post("/cv/addBooks", data);

export const editBooks = async (id, data) =>
  await axios.put(`/cv/editBooks/${id}`, data);

export const deleteBooks = async (data) =>
  await axios.delete(`/cv/deleteBooks/${data}`);

export const getAllIntellectualProduction = async () =>
  await axios.get("/cv/getAllIntellectualProduction");

export const addIntellectualProduction = async (id, data) =>
  await axios.post(`/cv/addIntellectualProduction/${id}`, data);

export const editIntellectualProduction = async (data) =>
  await axios.put("/cv/editIntellectualProduction", data);
export const deleteIntellectualProduction = async (data) =>
  await axios.delete(`/cv/deleteIntellectualProduction/${data}`);

export const getAllCoursesWorkshops = async () =>
  await axios.get("/cv/getAllCoursesWorkshops");
export const addCoursesWorkshops = async (data) =>
  await axios.post("/cv/addCoursesWorkshops", data);

export const editCoursesWorkshops = async (id, data) =>
  await axios.put(`/cv/editCoursesWorkshops/${id}`, data);

export const deleteCoursesWorkshops = async (data) =>
  await axios.delete(`/cv/deleteCoursesWorkshops/${data}`);

export const getAllTeachingExperience = async () =>
  await axios.get("/cv/getAllTeachingExperience");

export const addTeachingExperience = async (data) =>
  await axios.post("/cv/addTeachingExperience", data);

export const editTeachingExperience = async (id, data) =>
  await axios.put(`/cv/editTeachingExperience/${id}`, data);

export const deleteTeachingExperience = async (data) =>
  await axios.delete(`/cv/deleteTeachingExperience/${data}`);

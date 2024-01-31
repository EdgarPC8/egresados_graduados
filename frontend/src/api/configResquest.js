import axios, { jwt } from "./axios.js";

export const backup = async () =>
  await axios.get("/config/backup",{
    headers: {
      Authorization: jwt(),
    },
  });

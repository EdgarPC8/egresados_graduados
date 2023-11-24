import axios from "./axios.js";


const getData = async (data) => await axios.post("/data/select", data);
const setData = async (data) => await axios.post("/data/insert", data);
const insertStudent = async (data) => await axios.post("/students/insertStudent", data);

export { getData,setData,insertStudent };

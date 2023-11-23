import axios from "./axios.js";


const getData = async (data) => await axios.post("/data/select", data);
const setData = async (data) => await axios.post("/data/insert", data);
export { getData,setData };

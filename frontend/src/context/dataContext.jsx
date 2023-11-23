import { getData,setData } from "../api/dataRequest";


async function selectData (obj){
  const {data} = await getData(obj)
  return data;
};

async function insertData (obj){
  const {data} = await setData(obj)
  return data
};

export { selectData,insertData};

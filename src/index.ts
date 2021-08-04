import api from "./api";
import config from "./config";
import extractSheetData from "./sheet";

config();

async function fetchTodos() {
  const { data } = await api.get(process.env.API_URL);
  return data;
}

fetchTodos();

extractSheetData();

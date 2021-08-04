import axios from "axios";

const config = {
  headers: {
    "Content-Type": "application/json",
  },
};

const api = axios.create(config);

export default api;

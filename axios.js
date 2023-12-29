import axios from "axios";

const baseURL = "https://localhost:7161/api";

const apiService = axios.create({
  baseURL,
});

export default apiService;

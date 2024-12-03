import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://amazon-backend-1-8b2m.onrender.com",
});

export { axiosInstance };

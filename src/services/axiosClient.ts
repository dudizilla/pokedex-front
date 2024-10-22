import axios from "axios";

const createAxiosInstance = (baseURL = process.env.BASE_URL) => {
  const instance = axios.create({
    timeout: 10000,
    baseURL,
  });
  return instance;
}

const defaultAxiosClient = createAxiosInstance();
export default defaultAxiosClient;

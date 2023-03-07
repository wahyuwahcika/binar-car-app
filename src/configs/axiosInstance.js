import axios from "axios";
import CONST from "../utils/constants";
import { requestHandler } from "./interceptors";

const axiosInstance = axios.create({
  baseURL: CONST.API_BASE_URL,
});
axiosInstance.interceptors.request.use(requestHandler);
export default axiosInstance;

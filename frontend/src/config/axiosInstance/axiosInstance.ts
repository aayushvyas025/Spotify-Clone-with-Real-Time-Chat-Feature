import axios, {type AxiosInstance} from "axios"; 
import { envVariables } from "@/helper";

const {backendUrl} = envVariables;

const API:AxiosInstance = axios.create({
    baseURL:backendUrl,
    withCredentials:true
})

export default API;
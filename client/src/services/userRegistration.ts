import axios, { AxiosError } from "axios";
import { User } from "../types/User";

const baseUrl = "http://localhost:3001/"

export const userRegistration = async (user: User) => {
    const response = await axios.post(`${baseUrl}register`, user);
    return response.data;
}
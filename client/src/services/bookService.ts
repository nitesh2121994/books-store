import axios from "axios";
import { Book } from "../types/book";

const baseUrl = "http://localhost:3001/"

export const getBooks = async () => {
    const response = await axios.get<Book[]>(`${baseUrl}books`);

    return response.data;
}
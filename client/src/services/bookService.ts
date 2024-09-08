import axios from "axios";
import { Book } from "../types/book";

export const getBooks = async () => {
    const data: Book[] = await axios.get('');

    return data;
}
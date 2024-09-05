
import express from "express";
import { addBook, deleteBook, getAllBooks, getBookById, updateBook } from "./bookService.js";

const bookRoutes = express.Router()

bookRoutes.get('/', getAllBooks);
bookRoutes.post('/add', addBook);
bookRoutes.get('/:id', getBookById);
bookRoutes.put('/:id', updateBook);
bookRoutes.delete('/:id', deleteBook);

export default bookRoutes;
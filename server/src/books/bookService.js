import { Book } from "../models/bookModel.js";

export const getAllBooks = async (req, res) => {
  try {
    const books = await Book.find({});
    return res.status(200).json(books);
  } catch (error) {
    console.log('error', error);
    return res.status(400).send({
      message: error.message
    });
  }
}

export const getBookById = async (req, res) => {
  try {
    const { id } = req.params;
    const book = await Book.findById(id);
    return res.status(200).json(book);
  } catch (error) {
    console.log('error', error);
    return res.status(500).send();
  }
}

export const addBook = async (req, res) => {
  try {
    const book = await Book.create(req.body);
    return res.status(201).send(book);
  } catch (error) {
    console.log('error', error);
    return res.status(400).send({
      message: error.message
    });
  }
}

export const updateBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndUpdate(id, req.body);
    if (!result) {
      return res.status(404).send({ message: "Book not found." });
    }
    return res.status(200).send({
      message: "Book updated successfully."
    })
  } catch (error) {
    console.log('error', error);
    return res.status(500).send();
  }
}

export const deleteBook = async (req, res) => {
  try {
    const { id } = req.params;
    const result = await Book.findByIdAndDelete(id, req.body);
    if (!result) {
      return res.status(404).send({ message: "Book not found." });
    }
    return res.status(200).send({
      message: "Book deleted successfully."
    })
  } catch (error) {
    console.log('error', error);
    return res.status(500).send();
  }
}
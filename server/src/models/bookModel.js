import mongoose from "mongoose";

const bookSchema = new mongoose.Schema({
    name: {
        type: String,
        required: true
    },
    author: {
        type: String,
        required: true
    },
    publishYear: {
        type: String,
        required: true
    },
    description: String
});

export const Book = mongoose.model('Book', bookSchema)
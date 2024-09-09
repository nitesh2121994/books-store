import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    userName: {
        type: String,
        unique: true,
        required: true
    },
    password: {
        type: String,
        required: true
    },
    fullName: {
        type: String,
        required: true
    },
    isAdmin: {
        type: Boolean
    },
});

export const User = mongoose.model('User', userSchema)
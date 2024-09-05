
import express from "express";
import mongoose from 'mongoose';
import { mongoDBUrl } from '.././config.js';

import bookRoutes from "./books/bookRoutes.js";

const routes = express.Router()

routes.use('/books', bookRoutes);

routes.get('/', (req, res) => {
  res.status(200).json({ message: 'Connected!' });
});

mongoose.connect(mongoDBUrl)
    .then(() => {
        console.log('db is ready');
    })
    .catch((error) => {
        console.log('db is not ready', error);
    })

export default routes;
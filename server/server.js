
import express from "express";
import routes from "./src/routes.js"
import cors from "cors";
import mongoose from 'mongoose';
import config from './config.js';

const { dbUrl, port, secretKey } = config;

const app = express();

app.use(express.json());

app.use(cors(
    {
        origin: "http://localhost:5173",
        methods: [],
        allowedHeaders: []
    }
))

//  Connect all our routes to our application
app.use('/', routes);

app.get('/', (req, res) => {
    res.status(200).json({ message: 'Connected!' });
});

mongoose.connect(dbUrl)
    .then(() => {
        console.log('db is ready');
    })
    .catch((error) => {
        console.log('db is not ready', error);
    })

app.listen(port, (req, res) => {
    console.log('listening on port 3001');
});


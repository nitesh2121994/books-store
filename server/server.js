
import express from "express";
import routes from "./src/routes.js"
import cors from "cors";

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


app.listen(3001, (req, res) => {
    console.log('listening on port 3001');
});



import express from "express";
import routes from "./src/routes.js"

const app = express();

app.use(express.json())

//  Connect all our routes to our application
app.use('/', routes);


app.listen(3001, (req, res) => {
    console.log('listening on port 3001');
});


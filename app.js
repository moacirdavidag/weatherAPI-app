const CONTROLLER = require("./controllers/Controller");
const PATH = require('path');

require("dotenv").config();
const API = process.env.API_KEY;
const PORT = process.env.PORT;


const express = require("express");
const app = express();

app.use(express.static(PATH.join(__dirname, '/public')));


const handlebars = require('express-handlebars');


app.engine('.hbs', handlebars.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', PATH.resolve(__dirname, 'views'));


app.get("/", CONTROLLER.HOME);

app.get("/clima", CONTROLLER.CLIMA);

app.use((req, res, next) => {
    res.status(404).send("Not Found");
    next();
})

app.listen(PORT, () => console.log(`The server is running at http://localhost:${PORT}`));

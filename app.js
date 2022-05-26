const CONTROLLER = require("./controllers/Controller");
const PATH = require('path');

require("dotenv").config();
const API = process.env.API_KEY;
const PORT = process.env.PORT;


const express = require("express");
const app = express();

const handlebars = require('express-handlebars');

app.use(express.static('public'));

app.engine('.hbs', handlebars.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.set('view engine', '.hbs');
app.set('views', PATH.resolve(__dirname, 'views'));


app.get("/", CONTROLLER.HOME);

app.get("/clima", CONTROLLER.CLIMA);

app.listen(PORT, () => console.log(`The server is running at http://localhost:${PORT}`));

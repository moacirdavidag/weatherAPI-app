const CONTROLLER = require("./controllers/Controller");
const PATH = require('path');

require("dotenv").config();
const API = process.env.API_KEY;
const PORT = process.env.PORT;


const express = require("express");
const app = express();

const handlebars = require('express-handlebars');

app.use(express.static('public'));

app.set('view engine', 'handlebars');
app.set('views', PATH.join(__dirname, './views'));


app.engine('handlebars', handlebars.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));

app.get("/", CONTROLLER.HOME);

app.get("/clima", CONTROLLER.CLIMA);

app.listen(PORT, () => console.log(`The server is running at http://localhost:${PORT}`));

require("dotenv").config();
const CONTROLLER = require("./controllers/Controller");
const PATH = require('path');
const express = require("express");
const handlebars = require('express-handlebars');
const app = express();

// Usando as variáveis de ambiente

const PORT = process.env.PORT;

// Configurações do app

app.set('view engine', '.hbs');
app.set('views', PATH.resolve(__dirname, 'views'));
app.use(express.static(__dirname + '/public'));
app.use(express.json());
app.engine('.hbs', handlebars.engine({
    defaultLayout: 'main',
    extname: '.hbs'
}));

// Rotas e middleware
app.get("/", CONTROLLER.HOME);

app.get("/:cidade", CONTROLLER.HOME);

app.use((req, res, next) => {
    res.status(404).send("Not Found");
    next();
})

app.listen(PORT, () => console.log(`The server is running at http://localhost:${PORT}`));

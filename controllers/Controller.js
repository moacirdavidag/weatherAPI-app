const CLIMA_MODEL = require('../models/Clima');

const HOME = ((req, res) => {
    res.render('home');
});

const CLIMA = ((req, res) => {
    let nomeCidade = req.body.cidade;
    const API_KEY = process.env.API_KEY;
    res.render('clima', {
        cidade: CLIMA_MODEL.consultar(API_KEY, nomeCidade)
    })
})


module.exports = {HOME, CLIMA};
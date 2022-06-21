
const HOME = ((req, res) => {
    res.render('home');
});

const CLIMA = ((req, res) => {
    let nomeCidade = req.body.cidade;
    const API_KEY = process.env.API_KEY;
    res.render('clima')
})


module.exports = {HOME, CLIMA};
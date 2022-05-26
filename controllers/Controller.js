const HOME = ((req, res) => {
    res.render('home');
});

const CLIMA = ((req, res) => {
    res.status(200).send("Opa");
})


module.exports = {HOME, CLIMA};
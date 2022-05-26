const HOME = ((req, res) => {
    res.status(200).render('home');
});

const CLIMA = ((req, res) => {
    res.status(200).send("Opa");
})

const NOT_FOUND = ((req, res, next) => {
    res.status(404).send("Not Found");
    next();
});


module.exports = {HOME, CLIMA, NOT_FOUND};
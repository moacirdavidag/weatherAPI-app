
const HOME = ((req, res) => {
    let city = "Sao_Paulo";
    if(req.query.cidade) {
        city = (req.query.cidade).replace("+", "_").normalize('NFD').replace(/[\u0300-\u036f]/g, "");   
    }
    const options = {
        method: "GET",
        mode: 'cors',
        cache: 'default'
    }
    fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}`, options)
    .then(response => response.json())
    .then(function(data) {
        res.status(200).render('home', {
            cidade: data.location.name,
            pais: data.location.country,
            descricao: data.current.condition.text,
            icone: data.current.condition.icon,
            temperatura: (data.current.temp_c).toFixed(0),
            umidade: data.current.humidity,
            atualizacao: (data.current.last_updated).slice(11)
        })
    });
});

module.exports = {HOME};
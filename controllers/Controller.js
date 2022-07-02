
const HOME = ((req, res) => {
    let city = "Sao_Paulo";
    if (req.query.cidade) {
        city = (req.query.cidade).replace("+", "_").normalize('NFD').replace(/[\u0300-\u036f]/g, "");
    } 
    
    const options = {
        method: "GET",
        mode: 'cors',
        cache: 'default'
    }
  
    fetch(`http://api.weatherapi.com/v1/current.json?key=${process.env.API_KEY}&q=${city}&days=10&lang=pt`, options)
        .then(response => response.json())
        .then(function (data) {
            res.status(200).render('home', {
                cidade: data.location.name,
                pais: data.location.country,
                descricao: data.current.condition.text,
                icone: data.current.condition.icon,
                temperatura: (data.current.temp_c).toFixed(0),
                umidade: data.current.humidity,
                atualizacao: (data.current.last_updated).slice(11),
            })
        }).catch((e) => {
            res.status(400).render('error');
        });
}
);

const PREVISAO = ((req, res) => {
    const city = req.params.cidade;
    const options = {
        method: "GET",
        mode: 'cors',
        cache: 'default'
    }
    fetch(`http://api.weatherapi.com/v1/forecast.json?key=${process.env.API_KEY}&q=${city}&lang=pt&days=10`, options)
    .then(response => response.json())
    .then(function(data) {
        res.status(200).render('previsao', {
            cidade: data.location.name,
            pais: data.location.country,
            descricao: data.current.condition.text,
            icone: data.current.condition.icon,
            temperatura: (data.current.temp_c).toFixed(0),
            temp_max: (data.forecast.forecastday[0].day.maxtemp_c).toFixed(0),
            temp_min: (data.forecast.forecastday[0].day.mintemp_c).toFixed(0),
            precipitacao: data.forecast.forecastday[0].day.totalprecip_mm,
            vento: data.forecast.forecastday[0].day.maxwind_kph,
            umidade: data.current.humidity,
            atualizacao: (data.current.last_updated).slice(11),
            previsao: data.forecast.forecastday
        })
    });
});

module.exports = {HOME, PREVISAO};

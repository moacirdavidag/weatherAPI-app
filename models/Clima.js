module.exports = {

    consultar(chave, cidade) {
        let clima = fetch("GET", `http://api.weatherapi.com/v1/current.json?key=${chave}&q=${cidade}`);
        return clima;
    }

}

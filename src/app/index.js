//archivo que arranca toda la app
require('../public/css/bootstrap.min.css');
require('./index.css');

const { Weather } = require('./weather'); //importando la clase Weather
const { UI } = require('./ui'); //importando la clase UI
const { Store } = require('./store');

const store = new Store();
const { ciudad, codigo } = store.getLocationData();

const weather = new Weather(ciudad, codigo);
const ui = new UI();

//se ejecutará cuando el contenido haya sido cargado
async function obtenerClima(){
    const data = await weather.getClima();
    ui.render(data);
}

document.getElementById('w-change-btn').addEventListener('click', (e) => {
    const ciudad = document.getElementById('city').value;
    const codigo = document.getElementById('countryCode').value;
    weather.cambioLugar(ciudad, codigo);
    store.setLocationData(ciudad, codigo); //se almacenará los datos en el navegador
    obtenerClima();
    e.preventDefault();
});

document.addEventListener('DOMContentLoaded', obtenerClima);


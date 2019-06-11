/*se encarga de manipular el dom*/
export class UI {
    constructor() {
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.temperatura = document.getElementById('weather-string');
        this.humedad = document.getElementById('weather-humidity'); //humedad
        this.viento = document.getElementById('weather-wind'); //viento
    }

    render(weather){
        //toma los datos y da a cada uno de los atributos
        this.location.textContent = weather.name + ' / ' + weather.sys.country;
        this.desc.textContent = weather.weather[0]['description'];
        this.temperatura.textContent = weather.main.temp + ' °C';
        this.humedad.textContent = 'Humedad: ' + weather.main.humidity + '%';
        this.viento.textContent = 'Viento: ' + weather.wind.speed + 'm/s';
    }
}
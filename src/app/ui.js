/*se encarga de manipular el dom*/
export class UI {
    constructor() {
        this.location = document.getElementById('weather-location');
        this.desc = document.getElementById('weather-description');
        this.temperatura = document.getElementById('weather-string');
        this.humedad = document.getElementById('weather-humidity'); //humedad
        this.viento = document.getElementById('weather-wind'); //viento
        // SE AGREGARON LOS ELEMENTOS: ICONO, TEMP MAX, TEMP MIN
        this.icon = document.getElementById('weather-icon');
        this.min = document.getElementById('min-string');
        this.max = document.getElementById('max-string');
    }

    render(weather){
        //toma los datos y da a cada uno de los atributos
        this.location.textContent = weather.name + ' / ' + weather.sys.country;
        this.desc.textContent = weather.weather[0]['description'];
        this.temperatura.textContent = weather.main.temp + ' °C';
        this.humedad.textContent = 'Humedad: ' + weather.main.humidity + '%';
        this.viento.textContent = 'Viento: ' + weather.wind.speed + 'm/s';
        this.icon.src = "http://openweathermap.org/img/w/" + weather.weather[0]['icon'] + ".png"
        this.min.textContent = 'Mínima: ' + weather.main.temp_max + ' °C';
        this.max.textContent = 'Máxima: ' + weather.main.temp_max + ' °C';
    }
}
/*se encarga de pedir los datos del clima*/

export class Weather {

    constructor(ciudad, codigo) {
        this.apikey = '6d284be24c90f71bfbbb652976ce2fdc';
        this.ciudad = ciudad;
        this.codigo = codigo;
    }

    async getClima() {
        const URI = `https://api.openweathermap.org/data/2.5/weather?q=${this.ciudad},${this.codigo}&appid=${this.apikey}&units=metric`;
        //realizando petición con los datos recibidos
        const response = await fetch(URI);
        const data = await response.json(); //convirtiendo los datos a json
        return data;
    }

    cambioLugar(ciudad, codigo){
        this.ciudad = ciudad;
        this.codigo = codigo;
    }
}
/*para almacenar datos dentro de localstorage*/
export class Store {

    constructor(){
        this.ciudad;
        this.codigo;
        this.defaultCiudad = 'Itá';
        this.defaultCodigo = 'py';
    }

    getLocationData(){
        //muestra lo que el navegador ha almacenado
        if(localStorage.getItem('ciudad') === null){
            this.ciudad = this.defaultCiudad; //si no existe una ciudad almacenada, establece una ciudad por defecto
        }else{
            this.ciudad = localStorage.getItem('ciudad'); //sino establece lo q está almacenado
        }

        if(localStorage.getItem('codigo') === null){
            this.codigo = this.defaultCodigo; //si no existe un codigo almacenado, establece una codigo por defecto
        }else{
            this.codigo = localStorage.getItem('codigo'); //sino establece lo q está almacenado
        }
        
        return {
            ciudad: this.ciudad,
            codigo: this.codigo
        }
    }

    setLocationData(ciudad, codigo){
        //almacenando en localstorage del navegador
        localStorage.setItem('ciudad', ciudad);
        localStorage.setItem('codigo', codigo);
    }
}
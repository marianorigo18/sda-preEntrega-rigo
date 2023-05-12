const fs = require("fs");

class PorductManager{
    constructor(path){
        if(!path || path == ""){
            return "debe ingresar una ruta valida"
        };
        if(!fs.existsSync(path)){
            return `no existe el archivo en el path ${path}`
        }
        //si no le pasamos la ruta o es un string vacio se ejecutara lin: 6 || si le pasamos ruta pero no existe un archivo en la misma se ejecutara lin: 9
        //si paso la linea 5 significa que si le pasamos una ruta
        //si paso la linea 8 significa si hay un archivo en esa ruta
        //por eso es que al path del objeto le pasamos el path que estamos recibiendo 
        this.path = path
    }

    //creamos una funcion asicrona addProducts
    addProducts = async () => {
        const {title, description, price, thumbnail, code, stock } = products
        //i will uploed this repository
    }
}
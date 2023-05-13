const fs = require("fs");

class ProductManager{
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
    //Obtener productos
    getProducts = async () => {
        //leer el archivo con fs.promises
        const file = await fs.readFile(this.path, "utf-8");
        const products = [];
        if(file){
            //si en file existe productos convierto de string a objeto y lo igualo al array de objeto 
            products = JSON.parse(file)
        }
        //retorno el arreglo de productos, si el arreglo no tiene nada, deviuelvo el arreglo vacio.
        return products
    }

    //creamos una funcion asicrona addProducts
    addProducts = async () => {
        const {title, description, price, thumbnail, code, stock } = products
        if(!title || !description || !price || !thumbnail || !code || !stock){
            console.log("El producto debe tener todos los campos requeridos")
            return;
        }
    }
}
// const pM = new ProductManager("./products.txt");
const pM = new ProductManager("./products.txt");

const env = async () => {
    await pM.getProducts()
}

env()

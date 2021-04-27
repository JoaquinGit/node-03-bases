// archivos propios llevan "./"
// como index.js es el archivo principal de la carpeta no hace falta especificarlo
const { multiplicar } = require("./multiplicador");

console.log('Prueba nodemon');

const base = 5;

multiplicar(base);

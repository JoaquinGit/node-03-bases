const fs = require('fs');
const { logica } = require('./logica')

const multiplicar = (base) => {

    console.log('===================');
    console.log(`Tabla del ${base}`)
    console.log('===================');

 
    const resultado = logica(base);

    console.log(resultado);
    fs.writeFileSync(`tablas/tabla-del-${base}.txt`, resultado);
}

module.exports = {
    // key multiplicar llama función multiplicar. Al ser redundante se puede dejar solo multiplicar
    multiplicar: multiplicar
}
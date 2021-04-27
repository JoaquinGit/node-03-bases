
const logica = (base) => {

    let resultado = '';

    for (let numero = 1; numero <= 10; numero++) {
        resultado += `${base} * ${numero} = ${base * numero}\n`;

    }

    return resultado;
}

module.exports = {
    logica
}
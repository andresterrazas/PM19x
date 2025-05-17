const prompt = require("prompt-sync")();

const nombre = prompt("¿Cuál es tu nombre?");
const edad = prompt("¿Cuál es tu edad?");

const saludoPersonalizado = (nombre, edad) => {
    return `Hola, me llamo ${nombre} y tengo ${edad} años.`;
};

console.log(saludoPersonalizado(nombre, edad));

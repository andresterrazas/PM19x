const personas = [
    {nombre:"Ana", edad: 22},
    {nombre:"Luis", edad: 35},
    {nombre:"Maria", edad: 28},
];

const ontaluis = personas.find(persona => persona.nombre === "Luis");
console.log(ontaluis);

personas.forEach((persona, index) => {
    persona.nombre = `Persona ${persona.nombre}`;
    console.log(`Persona ${index + 1}: ${persona.nombre}, edad: ${persona.edad}`);
});

const sumaEdades = personas.reduce((contador, persona) => {
    return contador + persona.edad; 
}, 0);
console.log(`La suma de las edades es: ${sumaEdades}`);

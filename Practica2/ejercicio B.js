const productos = [
    {nombre: 'Laptop', precio: 12000},
    {nombre: 'Mouse', precio: 250},
    {nombre: 'Teclado', precio: 750},
    {nombre: 'Monitor', precio: 3000}
];

const preciomayor = productos.filter(producto => producto.precio > 1000);
console.log(preciomayor);

const simplificado = preciomayor.map(producto => producto.nombre);
console.log(simplificado);
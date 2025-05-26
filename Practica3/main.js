import { restar } from "./utils.js";

//Pruebas para la función restar
console.log(restar(5, 3));
console.log(restar(10, 5));

//Ejercicio B

function verificarUsuario(usuario) {
    return new Promise((resolve, reject) => {
        if (usuario === "admin") {
            resolve("Acceso concedido");
        } else {
            reject("Acceso denegado");
        }
    });
}

verificarUsuario("admin")
    .then(res => console.log(res))
    .catch(err => console.error(err));
verificarUsuario("user")
    .then(res => console.log(res))
    .catch(err => console.error(err));

//Ejercicio C

function  simularPeticionAPI() {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve("Datos recibidos correctamente");
        }, 5000);
    });
}

async function obtenerDatos() {
    try {
        const respuesta = await simularPeticionAPI();
        console.log(respuesta);
    } catch (error) {
        console.error("Error", error);
    }
}

obtenerDatos();
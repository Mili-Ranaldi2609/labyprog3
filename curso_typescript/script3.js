"use strict";
let dev = {
    nombre: "Juan",
    edad: 34,
    tomarMate: true
};
let dev2 = {
    nombre: "Mike",
    edad: 23,
    tomarMate: null,
    apellido: 'Juarez',
    recibido: false
};
//funcion
function enviarCurriculum(programador) {
    console.log(`Este curriculum es de ${programador.nombre}`);
}
//dev2 sigue cumpliendo con lo que esta pidiendo, menos si le pedimos en la funcion un atributo que no tenga la interface o el type, no pertenece es otro tipo de objeto
enviarCurriculum(dev2);

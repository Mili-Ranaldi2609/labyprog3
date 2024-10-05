"use strict";
console.log("mensaje de consola desde type script");
//node -v sirve para ver si lo tengo instalado
//npm install -g typscript para que se instale de manera general
//npm install -g npm@version del node ------ sirve para actualizar 
//tsc -v sirve para ver si lo tengo instalado
//tsc script.ts me crea mi archivo js
//tsc script.ts -w activar modo observador
//control + c salgo del modo observador
//tsc -init inicio de vuelta mi typescript
//tsc -w y se me abre el modo observador en los dos archivo tsc
//tipos de datos en typescript
//primitivos - compuestos -definidos por el usuario 
//primitivos: string - number - boolean - undefined - null
//compuestos: object - array - enum - function
// definidos por usuario: class - interface - type 
//String
//comillas dobles:
const str1 = "Hola, estoy escrito con comillas dobles";
//comillas simples:
const str2 = 'Hola, estoy escrito con comillas simples';
//template literals (backticks) altgr + }^2
const nombre = 'Juan';
const edad = 23;
const str3 = `Hola, soy ${nombre} y tengo ${edad} años.`;
//Numeros
//enteros:
const num1 = 12;
//notacion exponencial:
const num2 = 2.5e3;
//notacion exponencial negativa
const num3 = 1.5e-2;
//hexadecimal(base 16) con prefijo "0x"
const num4 = 0xA;
//octal con prefijo "0o"
const num5 = 0o12;
//binario con prefijo "0b"
const num6 = 0b1010;
//decimales:
const num7 = 10.5;
//Booleans
//true
const bool1 = true;
//false
const bool2 = false;
//Undefined (no le asignamos un valor)
let varUndefined;
varUndefined = undefined;
//Null
let varNull;
varNull = null;
//Objeto (para su tipado se necesita una interface)
const programador = {
    nombreP: "Milagros Ranaldi",
    edadP: 21,
    dni: 44437603,
    estudiando: true,
    viajeItalia: undefined,
    comidasFav: ['Pastel de papa', 'papas con cheddar']
};
//Arrays
//array numeros:
const numbers = [1, 2, 3, 4.5, -6];
//array strings
const names = ["Lucia", "Camila", "José"];
//arrays booleanos
const booleans = [true, false, false];
//Enums
var diasSemana;
(function (diasSemana) {
    diasSemana[diasSemana["lunes"] = 0] = "lunes";
    diasSemana[diasSemana["martes"] = 1] = "martes";
    diasSemana[diasSemana["mi\u00E9rcoles"] = 2] = "mi\u00E9rcoles";
    diasSemana[diasSemana["jueves"] = 3] = "jueves";
    diasSemana[diasSemana["viernes"] = 4] = "viernes";
    diasSemana[diasSemana["sabado"] = 5] = "sabado";
    diasSemana[diasSemana["domingo"] = 6] = "domingo";
})(diasSemana || (diasSemana = {}));
//tambien se pueden igualar a string osea enumerados con valores de cadena
var Colores;
(function (Colores) {
    Colores["Rojo"] = "rojo";
    Colores["Azul"] = "azul";
    Colores["Amarillo"] = "amarillo";
})(Colores || (Colores = {}));
//Funciones
//funcion con tipado explicito
function sumar(a, b) {
    return a + b;
}
//funcion flecha implicita(inferido por ts)
const dividir = (a, b) => a / b;
//function con parametros opcionales "?:"
function saludar(nombre, edad) {
    if (edad !== undefined) {
        return `Hola, mi nombre es ${nombre} y tengo ${edad} años`;
    }
    else {
        return `Hola, mi nombre es ${nombre}`;
    }
}
//function con valor por defecto:
function saludar2(nombre, edad = 30) {
    return `Hola mi nombre es ${nombre} y tengo ${edad} años`;
}
//Clases
class Persona {
    constructor(nombre) {
        this.nombre = nombre;
    }
    saludar() {
        console.log(`Hola, mi nombre es ${this.nombre}`);
    }
}

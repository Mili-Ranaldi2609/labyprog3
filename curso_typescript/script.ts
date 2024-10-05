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
const str1: string="Hola, estoy escrito con comillas dobles"
//comillas simples:
const str2: string='Hola, estoy escrito con comillas simples'
//template literals (backticks) altgr + }^2
const nombre: string='Juan'
const edad: number=23
const str3: string=`Hola, soy ${nombre} y tengo ${edad} años.`

//Numeros
//enteros:
const num1: number=12
//notacion exponencial:
const num2: number=2.5e3
//notacion exponencial negativa
const num3: number=1.5e-2
//hexadecimal(base 16) con prefijo "0x"
const num4:number=0xA
//octal con prefijo "0o"
const num5: number=0o12
//binario con prefijo "0b"
const num6: number=0b1010
//decimales:
const num7: number=10.5

//Booleans
//true
const bool1: boolean=true
//false
const bool2: boolean=false
//Undefined (no le asignamos un valor)
let varUndefined: undefined
varUndefined=undefined
//Null
let varNull:null
varNull=null

//Objeto (para su tipado se necesita una interface)
const programador={
    nombreP:"Milagros Ranaldi",
    edadP:21,
    dni:44437603,
    estudiando:true,
    viajeItalia: undefined,
    comidasFav:['Pastel de papa','papas con cheddar']
}

//Arrays
//array numeros:
const numbers: number[]=[1,2,3,4.5,-6]
//array strings
const names:string[]=["Lucia","Camila","José"]
//arrays booleanos
const booleans:boolean[]=[true,false,false]

//Enums
enum diasSemana{
    lunes,
    martes,
    miércoles,
    jueves,
    viernes,
    sabado,
    domingo
}
//tambien se pueden igualar a string osea enumerados con valores de cadena
enum Colores{
    Rojo="rojo",
    Azul="azul",
    Amarillo="amarillo"
}

//Funciones
//funcion con tipado explicito
function sumar(a:number,b:number): number{
    return a+b
    
}
//funcion flecha implicita(inferido por ts)
const dividir=(a:number,b:number)=>a/b
//function con parametros opcionales "?:"
function saludar(nombre:string,edad?:number):string{
    if (edad!==undefined) {
        return`Hola, mi nombre es ${nombre} y tengo ${edad} años`
    } else {
        return`Hola, mi nombre es ${nombre}`
    }
}
//function con valor por defecto:
function saludar2(nombre: string, edad:number=30):string{
    return`Hola mi nombre es ${nombre} y tengo ${edad} años`
}

//Clases
class Persona{
    nombre: string;
    constructor(nombre: string) {
        this.nombre=nombre
    }
    saludar(){
        console.log(`Hola, mi nombre es ${this.nombre}`);
        
    }
}

//Interfaces
//basica:
interface Persona{
    nombre:string
    edad:number
}
//con propiedades opcionales
interface Producto{
    nombre:string
    precio:number
    descripcion?:string
}
//para funciones
interface Comparador{
    (a:number,b:number):boolean
}
//para clases
interface Persona{
    nombre: string
    edad:number
    saludar():void
}
//Types
//basico
type Numero= number
//objeto literal
type Persona1={
    nombre: string
    edad:number
}
//con union de types
type Nombre= string|null

//type propiedades opc
type Producto1={
    nombre:string
    precio:number
    descripcion?:string
}
//para funciones
type Comparador1={
    (a:number,b:number):boolean
}
//para clases (type class)
type Persona2={
    nombre: string
    edad:number
    saludar():void
}

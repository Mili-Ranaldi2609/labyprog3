console.log("Hola mundo desde java script");
//declaracion de variables
// se les puede asignar otro dato tanto a var como let
var nombre="Milagros"
// se puede usar debntro de un contexto y se puede redefinir
let nombre2="juan";
//su valor no cambia se mantiene constante
const nombre3="carlos";
/*
{
    var nombre="juan";
    console.log(nombre)
}
var nombre="luciano";*/ /*surgia error con esto*/
if (true){
    let nombre2="martin";
    console.log(nombre2)
}
console.log(nombre2)

//tipos de datos
//strings;:
//'a' "1"
let texto='este es una string';
console.log(texto)
//numeros
let numero1=43
let numero2=3.14
//booleanos
let esVerdadero=true
let esfake=false;
//objeto

let persona={
    nombre:"luciano",
    edad:23,
};
console.log(persona.nombre)

//arrays
let array1=[1,2,3,4,"luciano", persona]
console.log(array1)

//undefined tdo valor que no declaremos
let sinvalor;
console.log(sinvalor)
//null
let valorNull= null
console.log(valorNull)
//valores aritmeticos si es una suma entre un string y un numero lso concatena// si es division lo lee, y multiplicaicon y resta tambien
let suma=5+10;
console.log(suma)
let resta=5-10
console.log(resta)
let mult=5*5
console.log(mult)
let div=20/4
console.log(div)
let modulo=10%3
console.log(modulo)
let incremento=5
incremento++;
console.log(incremento)
let decremento=5
decremento--;
console.log(decremento)
///valores logicos
//operadores de comparacion

let esigual=5=="5"
console.log(esigual)
let igualdadEstricta=5==="5"
console.log(igualdadEstricta)
let desigual=5!="4"
console.log(desigual)
let desigualestricta=5!=="5"
console.log(desigualestricta)
//condicionales
//funciones 

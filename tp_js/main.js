//INTRODUCCION A JAVA SCRIPT
//ejercicio 1-2
/*

const a=5
const b=10
const c=a+b
console.log("La suma de a y b es:",c);

//ejercicio 1-3
  const nombre =prompt("¿Cual es tu nombre?") 
  if (nombre.trim() === "") {
    console.log("Ingrese su nombre");
  } else {
    console.log("Hola, ", nombre);
  }

*/

//OPERADORES LOGICOS Y CONDICIONALES
//ejercicio 2-1
/*
const a=15
const b=20
const c=13
if (a>b && a>c) {
  console.log("El mayor de los tres numeros es:",a)
} else if (b>a && b>c) {
  console.log("El mayor de los tres numeros es:",b)
} else if (c>a && c>b) {
  console.log("El mayor de los tres numeros es:",c);
}

//ejercicio 2-2
 const numero=prompt("Ingresa un numero y te dire si es par o impar")

 if (numero=== "") {
  console.log("Ingrese un numero");
} else {
  const numeroConvertido = parseInt(numero);  // Convertimos el valor a un número entero
  if(numeroConvertido%2===0){
    console.log("El numero", numeroConvertido,"es par");
  }else{
    console.log("El numero",numeroConvertido,"es impar");   
  }
}
*/
//OPERACIONES DE ASIGNACION Y BUCLES
//ejercicio 3-1
/*
let numero3=10
while (numero3>0) {
  console.log(numero3);
  numero3--
}
//ejercicio 3-2
let numero;

do {
  numero = prompt("Ingrese un número mayor a 100:");  // Solicitamos un número al usuario
  numero = parseInt(numero);  // Convertimos el valor ingresado a número entero
} while (numero <= 100 || isNaN(numero));  // Repetimos el bucle si el número es menor o igual a 100 o si no es un número

console.log("Ingresaste un numero mayor a 100: " + numero);  // Mostramos el número ingresado en la consola
*/
//FUNCIONES DE JAVASCRIPT
//ejercicio4 4-1
/*
function esPar(numero) {
  return numero % 2 === 0;  // Devuelve true si el número es par, false si es impar
}

// Función para imprimir la oración
function imprimirResultado(numero) {
  const resultado = esPar(numero);  // Llama a la función esPar
  console.log(`El número ${numero} es par: ${resultado}`);  // Imprime el resultado
}

// Pruebas con diferentes números
imprimirResultado(4);  
imprimirResultado(7); 
imprimirResultado(-10);  
//ejercicio 4-2
function convertirCelsiusAFahrenheit (gradoCelsius) {
  return (gradoCelsius * 1.8 )+ 32
}

function imprimirGrados(gradoCelsius){
  const res=convertirCelsiusAFahrenheit(gradoCelsius)
  console.log(`${gradoCelsius} son equivalentes a ${res}°F`)
  
}

imprimirGrados(30)
imprimirGrados(12)*/
//OBJETOS EN JAVASCRIPT
//ejercicio 5-1
/*
let persona={
  nombre:'Milagros',
  edad:'21',
  ciudad:'Lujan de Cuyo',
  cambiarCiudad:function(ciudadNueva){
    this.ciudad=ciudadNueva
  }
}
console.log("Antes de cambiar la ciudad:");
console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);
// Usamos el método para cambiar la ciudad
persona.cambiarCiudad("Godoy Cruz");

// Mostramos las propiedades actualizadas en la consola
console.log("Después de cambiar la ciudad:");
console.log(`Nombre: ${persona.nombre}, Edad: ${persona.edad}, Ciudad: ${persona.ciudad}`);

//ejercicio 5-2

let libro={
  titulo:"Sigue mi voz",
  autor:"Ariana Godoy",
  año:2022,
  libroViejo:function(){
   const añoActual=2024
   const edadLibro= añoActual-this.año
   return edadLibro>10
  }
}
const antiguo = libro.libroViejo();
console.log(`El libro ${libro.titulo} es antiguo: ${antiguo}`);
*/
//ARRAYS
//ejercicio 6-1
/*
let arrayNumbers=[1,2,3,4,5,6,7,8,9,10]
let arrayNumMult=[]
arrayNumbers.forEach((elemento)=>{
  let res=elemento*2
  arrayNumMult.push(res)
})
console.log("Numeros originales: ",arrayNumbers);
console.log("Numeros multiplicados por 2",arrayNumMult);
//ejercicio 6-2
let pares=[]
for (let i = 1; pares.length<10; i++) {
  if (i%2===0) {
    pares.push(i)
  }
  
}
console.log("Primeros 10 numeros pares: ",pares);
*/
//INTRODUCCION AL DOM
//ejercicio 7-1
/*
const p=document.querySelectorAll("p")
const boton=document.getElementById("button_dom")

const changeParrafosColor=()=>{
  p.forEach(p=>{
    p.classList.add("blueP")
    // Añadir la clase que cambia el color a azul
  })
}
boton.addEventListener("click", () => {
  console.log("El usuario hizo click en el botón");
  changeParrafosColor() // Llamar a la función para cambiar el color de los párrafos
})
//ejercicio 7-2
const texto=document.getElementById("texto")
const boton_alerta=document.getElementById("alerta_dom")
boton_alerta.addEventListener("click", () => {
    const inputValue=texto.value;
    alert("Has ingresado: "+inputValue)
  
})
*/
//EVENTOS EN EL DOM
//ejercicio 8-1
/*
const li=document.querySelectorAll("li")
li.forEach(function(element){
  element.addEventListener("click",()=>{
    console.log(element.textContent);
    
  })
})
//ejercicio 8-2
const textoIngresar= document.getElementById("inputTexto")
const boton_des=document.getElementById("deshabilitar")
const boton_ha=document.getElementById("habilitar")
boton_des.addEventListener("click",()=>{
  textoIngresar.disabled=true
  // Añadir estilo para cuando el input está deshabilitado (sin hover)
  textoIngresar.style.backgroundColor = "#e0e0e0";
  textoIngresar.style.cursor = "not-allowed";
});

boton_ha.addEventListener("click", () => {
  // Habilitar el campo de texto
  textoIngresar.disabled = false;
  // Restaurar el estilo del input habilitado (con hover)
  textoIngresar.style.backgroundColor = "";
  textoIngresar.style.cursor = "text";
  
});
*/
//LOCALSTORAGE
//ejercicio 9-1

const guardarC=document.getElementById("gc")

const eliminarC=document.getElementById("ec")
const getDataEmails = () => {
  const ingresoCorreo = document.getElementById("correo").value;
  
  // Guardar el correo en localStorage
  localStorage.setItem("email", ingresoCorreo);
  
  // Mostrar el correo guardado en el DOM
  mostrarCorreo();
};

// Función para mostrar el correo guardado si existe
const mostrarCorreo = () => {
  const correoGuardado = localStorage.getItem("email");
  const correoG = document.getElementById("correoGuardado");
  if (correoGuardado) {
    correoG.innerHTML = `Correo Guardado: ${correoGuardado}`;
  } else {

    correoG.innerHTML = "No hay correo guardado.";
  }
};
// Escuchar el evento click para guardar el correo
guardarC.addEventListener("click", (event) => {
  event.preventDefault();  // Evitar la recarga de la página
  getDataEmails();
});

// Eliminar el correo de localStorage y del DOM
eliminarC.addEventListener("click", () => {
  localStorage.removeItem("email");  // Eliminar el correo de localStorage
  mostrarCorreo()
  /*document.getElementById("correoGuardado").value=""*/
});


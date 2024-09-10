
//variables se declaran con let
 /*
let nombre="Milagros"

var nombre2="Milagros 2"//actualmente no se usa 
const nombre3="Milagros 3"// la constante no se puede cambiar el valor que tiene dentro
//la diferencia entre let y var es que si tuvieramos un bloque de codigo , let solo va a pertenecer a este bloque de codigo, pero en cambio si yo pongo var me va a pertenecer a todo el codigo de java-script, es decir el contador-global se va a poder acceder de cualquier parte de mi aplicacion, lo cual muchas veces no es muy seguro o muy correcto porque no estaria dentro de las reglas de capas, no seria una buena practica, var hace mucho se dejo de utilizar
{
  let contador=5
  var contadorGlobal=5
}
//valores
/*
boolean= true/false
string= "cadena" 'a' 
number= 4
null->nada
undefined->valor que no se define

let variableUndefined;
let nombre4="Maria"
let apellido="Ranaldi"
const dni=44437603
let domicilio="Calle Carrodilla 435"
console.log(nombre4, apellido, dni, domicilio)*/
//Operadores 
/*
== -> 5=="5" = true comparacion
=== ->5==="5" = false tipo y valor
!= -> 5!="5" = false
!== -> 5!=="5" = true

>   4>3=true
<   4<5 =true
>=  4>= 5= false
<=  4<= 5 = true
&&  ( 4>3 )&&( 4>5 )= false
|| ( 4>3 )||( 4>5 ) = true 
|| INICIO + °
O SINO ||| LO APRETO DIRECTAMENTE
*/
//condicionales
/*
let edad= 19
let edadRequerida= 18
if(edad===19){
 console.log("Se gano un premio")
}
else if (edad >=18) {
  console.log("Cumple la edad requerida")
} else {
  console.log("No cumple la edad requerida")
}
//con el switch case 
switch (edad) {
  case 18:
    console.log("Tienes 18 años")
    break;
  case 19:
    console.log("Tienes 19 años")
    break;
  default:
    console.log("Ingresa un valor valido")
    break;
}*/
//operaodes de asignacion
/*let a=1
a=a+1
a+=1
a-=1
a*=1
a/=1
a++ a incrementa
a-- a decrementa*/
//Bucles 
/*
//for
for (let i = 0; i <10 ;i++) {
  console.log(i)
  
}
//while
console.log("Bucle while")
let bandera=10
while (bandera<9) {
  console.log(bandera)
  bandera++
}
//do while
console.log("bucle do while")
do {
  console.log(bandera)
} while (bandera<10);
*/
//Funciones se usa la palabra reservada function
//una funcion es un bloque de codigo especifico que nosotros vamos a reutilizar a lo largo de nuestro codigo
//Se declaran de estas dos maneras. 
/*
function saludar(){
console.log("saludarFuncion")
}
saludar();//se llama la funcion, podemos hacerlo al reves llamar a la funcion y despues declararla

const saludarArrowFunction=()=>{
  console.log("saludarArrowFuncion")
}
saludarArrowFunction();//esta no se puede hacer al reves, hasta que no se declaran no se elevan
//function flecha, ademas de imprimir puede retornar una variable
const sumaDosValores=(num1,num2)=>{
  console.log(num1+num2)
}
sumaDosValores(2,5)
const sumaDosValores2=(num1,num2)=>{
  return num1+num2
}
console.log(sumaDosValores2(2,5))
//tambien podemos guardar lo que nos da una variable, porque al retornar un valor lo esta asignando a esta variable
let result=sumaDosValores2(4,4)
console.log(result)
*/
//objetos: en java script se define a un objeto como una entidad que agrupa datos, propiedades y funcionalidades relacionados en el mismo. Es una estructura de datos que puede contener variables y funciones. Y se utiliza para modelar cosas del mundo real de manera mas abstracta y modular
/*
let persona={
  nombre:'Milagros',
  apellido:'Ranaldi',
  edad:21,
  saludar:function(){
    console.log("Hola mi nombre es",this.nombre)
  },
  direccion:{
    calle:"Carrodilla",
    numero:435
  }
}
persona.saludar();
//accediendo a las propiedades del objeto
console.log(persona.apellido)
console.log(persona.direccion)//me devuelve un objeto
console.log(persona.direccion.calle)//ingresando al objeto del objeto
*/
//Arrays
/*
let arregloNumeros=[1,2,3,4]//instanciando
let arrayNumbers=[]
arrayNumbers[0]=2//desde el indice
console.log(arrayNumbers)
//metodos en arreglos
arregloNumeros.push(5)//aggrega un numero al final
console.log(arregloNumeros)
arregloNumeros.pop()//elimina el ultimo elemento
console.log(arregloNumeros)
//agrega un elemento al inicio
arregloNumeros.unshift(0)
console.log(arregloNumeros)
//elimina el elemento del inicio
arregloNumeros.shift()
console.log(arregloNumeros)
//retorna un array entre dos indices
let slice1= arregloNumeros.slice(1,3)
console.log(slice1)

//arrays 

let numeros=[1,2,3,4,5]
let colores=["rojo","verde","azul"]
let frutas=["manzana","plátano","naranja","pera"]

//puedo ver la cantidad de elementos de mi array 
console.log(colores.length);
//metodo for:each, nos permite recorrer una iteracion por cada elemento que nosotros tengamos en el array
frutas.forEach((elemento,indice)=>{
    console.log(elemento,indice)
})
//map
//la diferencia es que map nos puede retornar un arreglo
let arrNumeros= numeros.map((elemento)=>{
  return elemento
})
console.log(arrNumeros)
//metodo para filtrar
let resultadoNum= numeros.filter((elemento)=>elemento>3)
console.log(resultadoNum)
//buscar un elemento- este elemento existe?
let resultadoFindNum= numeros.find((elemento)=>elemento==2)
console.log(resultadoFindNum)
//buscar un elemento por el indice
let resultadoFindInd= numeros.findIndex((elemento)=>elemento==2)
console.log(resultadoFindInd)

//se fija si lo que buscas esta incluido en el array te devuelve un true or false
let resultFrutas= frutas.includes("manzana")
console.log(resultFrutas)
//
let resultFrutasSome= frutas.some((el)=>el=="manzana")
console.log(resultFrutasSome)
*/
//dom
//tomando un elemento del dom
const h1= document.getElementById("h1element")
//modificar el eleemnto
let newTexto="Cambiado con java script";
h1.textContent=newTexto;
//para obtener lo que tiene este h1
console.log(h1.innerHTML)
const button=document.getElementById("button")
//aggregar una CLASE al button, interactuando con el dom
const hadleStyleButton=()=>{
  if(button.classList.contains('redButton')){
    button.classList.remove("redButton")
  }else{
    button.classList.add("redButton")
  }
}


//entre las comillas va el tipo de evento que quiero
button.addEventListener("click",()=>{
  console.log("El usuario hizo click")
  hadleStyleButton()
})
//inputs y boton, si quisieramos hacer el loggioin de un a app o enviar datos se ´puede utilzar para hacerlo
/*
const buttonInputs= document.getElementById("button_inputs")

const getDataInputs=()=>{
  const nombre=document.getElementById("name").value
  const edad=document.getElementById("age").value
  const email=document.getElementById("email").value
  console.log({
    nombre, edad, email
  });
  
}

buttonInputs.addEventListener("click",()=>{
  getDataInputs()
})*/
//localstore: es un espacio de memoria que nosotros tenemos dentro del navegador donde nosotros podemos persistir diferentes datos y por mas que nosotros recarguemos nuestra pagina esos datos van a seguir estando ahi--- utilizo los valores del punto de arriba
const buttonInputs= document.getElementById("button_inputs")

const getDataInputs=()=>{

  const nombre=document.getElementById("name").value

  const edad=document.getElementById("age").value

  const email=document.getElementById("email").value

  sessionStorage.setItem("datos",JSON.stringify({
    nombre, edad, email})
  )

  localStorage.setItem("datos",JSON.stringify({
    nombre, edad, email})
  )


}
buttonInputs.addEventListener("click",()=>{
  getDataInputs()
})
const buttonRecibir=document.getElementById("buttonRecibir").addEventListener("click",()=>{
  const result= localStorage.getItem("datos")
  const resultSession= sessionStorage.getItem("datos")
  console.log("LOCAL");
  
  if (result) {
    console.log(JSON.parse(result))
  }else{
    console.log("Los datos no existen");
    
  }
  console.log("SESSION");
  //el session uan vez qye cerremos la ventana se borran los datos
  if (resultSession) {
    console.log(JSON.parse(result))
  }else{
    console.log("Los datos no existen");
    
  }
})
//en el navegador donde esta application entramos a localstorage y ahi podemos ver los datos que tenemos guardados




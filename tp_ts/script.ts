console.log("Ejercicio 2: corriendo desde typescript");
//Ejercicio 3 tipos de datos
const str:string="Hola, TypeScript!"
const num:number=123
const boo:boolean=true
let fecha:Date=new Date()
fecha.setMonth(8)
fecha.setDate(13)
fecha.setFullYear(2024)
function mostrandoDatos(){
    (document.getElementById('text') as HTMLElement).textContent=str;
    (document.getElementById('number') as HTMLElement).textContent=num.toString();
    (document.getElementById('boolean') as HTMLElement).textContent=boo.toString();
    (document.getElementById('date') as HTMLElement).textContent=fecha.toDateString()
}
document.addEventListener("DOMContentLoaded",mostrandoDatos)
//ejercicio 4
let num2:number=234
function numAString(){
    (document.getElementById('number_string') as HTMLElement).textContent=num2.toString();
}
document.addEventListener("DOMContentLoaded",numAString)
//ejercicio 5
const numeros:number[]=[12,34,22,31]
let total:number=0
numeros.forEach(function(a:number){
    total+=a; 
});
(document.getElementById('array') as HTMLElement).textContent=total.toString();
//ejercicio 6
interface Estudiante {
    nombre: string;
    edad: number;
    curso: string;
}
let estudiante: Estudiante={
    nombre:'Milagros Ranaldi',
    edad:21,
    curso:'Lab y Prog 2'
}
document.addEventListener("DOMContentLoaded", function() {
    const estudianteDatos = document.getElementById('student');
    
    // Verificar que el elemento no sea null
    if (estudianteDatos) {
        estudianteDatos.innerHTML = `<p>Nombre: ${estudiante.nombre}</p>
            <p>Edad: ${estudiante.edad}</p>
            <p>Curso: ${estudiante.curso}</p>`
    }
});
//ejercicio 7
type Address={
    street:string,
    city:string,
    zip_code:number
}
let direccion1: Address={
    street:'Carrodilla',
    city:'Lujan de cuyo',
    zip_code:5505
}
document.addEventListener("DOMContentLoaded", function() {
    const mostrarDireccion = document.getElementById('address');
    
    // Verificar que el elemento no sea null
    if (mostrarDireccion) {
        mostrarDireccion.innerHTML = `<p>Dirección: Calle: ${direccion1.street}, Departamento: ${direccion1.city}, CP: ${direccion1.zip_code}</p>`
    }
});

//ejercicio 8
interface User{
    name:string,
    age:number,
    saludar: () => string;
}
const usuario:User={
    name:'Jose Fernandez',
    age:25,
    saludar:function():string{
        return `Hola soy ${usuario.name}`
    }
}
document.addEventListener("DOMContentLoaded", function() {
    const saludo = document.getElementById('user');
    
    // Verificar que el elemento no sea null
    if (saludo) {
        saludo.innerText = usuario.saludar();
    }
});
//ejercicio 9
class Person{
    name?:string
    age?:number
    constructor(name:string,age:number){
        this.name=name
        this.age=age
    }
    presentation(){
        return `Hola mi nombre es ${this.name} y tengo ${this.age} años`
    }
}
const person=new Person("Rodrigo",34)
document.addEventListener("DOMContentLoaded", function() {
    const presentationElement = document.getElementById('pres');
    
    // Verificar que el elemento no sea null
    if (presentationElement) {
        presentationElement.innerText = person.presentation();
    }
});

//ejercicio 10 
class Box<T>{
    private v?:T
    constructor( v:T){
        this.v=v
    }
    setV(v:T){
        this.v=v
    }
    //get nos da el valor
    getV(){
        return this.v
    }
}
const cajaTexto=new Box<string>("Mensaje Secreto")
const cajaNumero=new Box<number>(45)
document.addEventListener("DOMContentLoaded", function() {
    const box_text = document.getElementById('box_text');
    const box_num=document.getElementById('box_number')
    // Verificar que el elemento no sea null
    if (box_text) {
        box_text.innerText =`Contenido de cajaDeTexto: ${cajaTexto.getV()}`;
    }
    if (box_num) {
        box_num.innerText =`Contenido de cajaDeNumero: ${cajaNumero.getV()}`;
    }
});

//ejercicio 11
function display<T>(valor: T): T {
    return valor;
}
let text11:string='Caracoles';
let boo11:boolean=false;
let datotext=display(text11);
let datoboo=display(boo11);
document.addEventListener("DOMContentLoaded", function() {
    const functiont = document.getElementById('function_text');
    const functionn=document.getElementById('function_boo')
    // Verificar que el elemento no sea null
    if (functiont) {
        functiont.innerText =`Identidad Del Texto: ${datotext}`;
    }
    if (functionn) {
        functionn.innerText =`Identidad Del Numero: ${datoboo}`;
    }
});
//ejercicio 12
enum Colores{
    Rojo,
    Amarrillo,
    Azul,
    Verde,
    Cian,
    Rosado
}
const colorFav=Colores[2];//le paso el indice de mi color elegido

(document.getElementById('enum_colors') as HTMLElement).textContent=colorFav.toString()
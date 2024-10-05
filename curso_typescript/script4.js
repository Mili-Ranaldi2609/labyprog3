"use strict";
//clases poo
/*
class Pelicula{
    nombre?:string
    protagonistas?:string[]
    actores?:string[]
    constructor(nombre:string,protagonistas:string[],actores:string[]){
    this.nombre=nombre
    this.protagonistas=protagonistas
    this.actores=actores
    }
    proyectarEnCine(){
        console.log(`${this.nombre} esta siendo proyectada`);
    }
}
const pelicula=new Pelicula("Barbie",["Barbie","Ken"],["Margot","Ryan"])

const pelicula2=new Pelicula("Oppenheimer",["Robert","Jean"],["Cillian","Florence"])
pelicula.proyectarEnCine()
console.log(pelicula2);
*/
//generico <T>
class Sorteo {
    constructor(nombre) {
        this.nombre = nombre;
    }
    //set para configurar el valor
    setTicket(ticket) {
        this.ticket = ticket;
    }
    //get nos da el valor
    getTicket() {
        return this.ticket;
    }
    sortear() {
        return `Para ${this.nombre} el ticket es ${this.ticket}`;
    }
}
let sorteo = new Sorteo("Milagros");
sorteo.setTicket(12);
console.log(sorteo.sortear());
let sorteo2 = new Sorteo("Milagros");
sorteo2.setTicket("s21");
console.log(sorteo2.sortear());

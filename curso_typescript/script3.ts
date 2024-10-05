//objeto literal
/*
let programador2={
    nombre:"Juan",
    edad:34,
    tomaMate:true

}
programador2={
    nombre:'Maria',
    edad:23,
    tomaMate:false
}
console.log(programador2);*/
//types personalizado, sirven mucho para los objetos
/*type Programador={
    nombre:string,
    edad:number,
    tecn:string[],
    tomarMate?:boolean | null
}*/
//interface
interface Programador{
    nombre:string,
    edad:number,
    tomarMate:boolean|null
}
let dev: Programador={
    nombre:"Juan",
    edad:34,
    tomarMate:true

}
let dev2={
    nombre:"Mike",
    edad:23,
    tomarMate:null,
    apellido:'Juarez',
    recibido:false
}
//funcion
function enviarCurriculum(programador:Programador) {
    console.log(`Este curriculum es de ${programador.nombre}`); 
}
//dev2 sigue cumpliendo con lo que esta pidiendo, menos si le pedimos en la funcion un atributo que no tenga la interface o el type, no pertenece es otro tipo de objeto
enviarCurriculum(dev2)

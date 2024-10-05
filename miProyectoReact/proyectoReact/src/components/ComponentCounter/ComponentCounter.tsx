import { useState } from "react"

export const ComponentCounter = () => {
    //entre [] va el nombre de la variable que vamos a utilizar y el nombre de la funcion a utilizar 
    //dentro del parentesis del useState() se pone un valor inicial y <>dentro de este se define el tipo
    const[counter, setCounter]=useState<number>(0)
    //hacemos una funcion
    const incrementCounter=()=>{
        //valor anterior es prev
        setCounter((prev)=>prev+1)
    }
    //hacemos una funcion para decrementar, solo toma valores positivos
    const decrementCounter=()=>{
        if (counter>0) {
           setCounter((prev)=>prev-1) 
        }
        
    }
  return (

    <div>
        <h2>valor de counter: {counter}</h2>
        <button onClick={incrementCounter}>Incrementar</button>
        <button onClick={decrementCounter}>Decrementar</button>
    </div>
  )
}

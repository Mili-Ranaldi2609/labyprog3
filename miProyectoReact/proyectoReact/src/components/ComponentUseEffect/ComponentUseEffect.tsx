import { useEffect, useState } from "react"

export const ComponentUseEffect = () => {
    const [state,setState]=useState(false)
    //cuando se monta un componente 
    //cuando se inicia la pagina se monta el componente 
    useEffect(()=>{
        console.log("Componente Montado");
         //cuando se desmonta el componente
         //se recarga la pagina y se desmonta
        return()=>{
            console.log("Componente desmontado");
            
        }
    },[]) 
   
    //mientras se cambie de estado las funciones de arriba no se van a dejar de ejecutar, son independientes 
    //se esta ejecutando este efecto una vez que cambio mi variable
    useEffect(()=>{
        console.log(state);
        
    },[]) 
  return (
    <div>
       <p>{state ? "Es true":"Es false"}</p>
        <button onClick={()=>{
            setState(!state)
        }}>Cambiar state</button>
    </div>
  )
}

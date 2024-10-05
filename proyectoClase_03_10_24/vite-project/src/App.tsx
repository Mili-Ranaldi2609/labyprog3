import { ChangeEvent, useState } from "react"
import { Itarea } from "./types/Itarea"


export const App = () => {
  const [tareaTextov, settareaTexto]=useState("")
  const [tareas,setTareas]=useState<Itarea[]>{[]}
  //evento
  const handleChange=(evento:ChangeEvent<HTMLInputElement>)=>{
    const {value}=evento.target
    settareaTexto(value)
  }
  const agregarTarea=()=>{
    const nuevaTarea:Itarea={
      id:new Date().toString(),
      texto:tareaTextov,
      completado:false
    }

    setTareas((prev)=>[...prev,nuevaTarea])
    settareaTexto("")
  }
  
  return (
    <div>
      <div>
        <label >tarea</label>
        <input type="text"  value={tareaTextov} onChange={handleChange}/>
      </div>
      <div>
        <button onClick={agregarTarea}>Agregar Tarea</button>
      </div>
    </div>
  )
}
export default App
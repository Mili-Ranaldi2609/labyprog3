import { useEffect, useState } from "react"
import { IHeroes } from "../../../types/IHeroes"
import { heroesData } from "../../../data/heroes"
import { ListHeroes } from "../../ui/ListHeroes/ListHeroes"

export const DcHeroes = () => {
  //definimos el state
  const [heros,setHeros]=useState<IHeroes[]>([])
  const handleGetHeroesDC=()=>{
    //filtrado de heroesdata
    const result= heroesData.filter((hero)=>hero.publisher==="DC Comics")
    //hacemos el set con el array resultante
    setHeros(result)

  }

  //use effect con dependencias vacias , es decir que cuando este componente se renderice por primera vez nos va a traer los heros
  useEffect(()=>{
    handleGetHeroesDC()
  },[])


  return <ListHeroes heroes={heros} title="Heroes DC Comics "/>
}

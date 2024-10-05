import { useEffect, useState } from "react"
import { IHeroes } from "../../../types/IHeroes"
import { useNavigate, useParams } from "react-router-dom"
import { heroesData } from "../../../data/heroes"
import styles from './HeroPage.module.css';
import { Button } from "react-bootstrap";
export const HeroPage = () => {
    //traemos nuestro hero
    const [hero,setHero]=useState<IHeroes | null>(null)
    //tomar el elemento con un hook
    const {id}=useParams()
    const getHerobyId=()=>{
        const result=heroesData.find((h)=>h.id===id)
        result ? setHero(result): setHero(null) 
    }

    useEffect(()=>{
        getHerobyId()
    },[])
    const navigate= useNavigate()
    const handleNavigate=()=>{
        //el menos 1 indica que vamos a volver a la pagina anterior
        navigate(-1)
    }
  return (
    <>
    {
        hero && <div className={styles.containerHeroPage}>
            <div className={styles.containerImgHeroPage}>
                <img src={`/assets/heroes/${id}.jpg`}/>
            </div>
            <div>
                <h3>{hero.superhero}</h3>
                <ul>
                    <li><b>Alter Ego: </b>{hero.alter_ego}</li>
                    <li><b>Publicadora: </b>{hero.publisher}</li>
                    <li><b>Primera Aparición: </b>{hero.first_appearance}</li>
                    <li><b>Nombre del Personaje: </b>{hero.characters}</li>                  
                </ul>
                <Button variant="primary" onClick={handleNavigate}>Regresar</Button>
            </div>

        </div>
    }
    
    </>
  )
}

import { Button, Form } from "react-bootstrap"
import styles from './Login.module.css';
import { FormEvent, useState } from "react";
import { useForm } from "../../../hooks/useForm";
import { useAppDispatch } from "../../../hooks/redux";
import { setLogin } from "../../../redux/slices/auth";
import { useNavigate } from "react-router-dom";
export const Login = () => {
    //haremos que nuestra contraseña se vea
    const [showPass,setShowPass]=useState(false)

    const {values, handleChange}=useForm({
        user:"",
        password:""
    })
    const {user, password}= values 

    //dispatch
    const dispatch=useAppDispatch()

    //hook
    const navigate=useNavigate()
    //submit form
    const handleSubmitForm =async(e:FormEvent<HTMLFormElement>)=>{
        //sacr comportamiento por defecto 
        e.preventDefault()
        const response = await fetch('/user.json')
        const userData= await response.json()
        const userFound= userData.users.find((u:{username:string, password: string  })=>
            u.username===user && u.password===password 
        )
        if(userFound){
            dispatch(setLogin(user))
            navigate("/")
        }else{
            alert('Usuario o Contraseña Incorrecto')
        }
        
    }
  return (
    <div className={styles.containerLogin}>
       <div className={styles.containerForm}>
        <span style={{fontSize:"10vh"}} className="material-symbols-outlined">person_4</span>
        
        
       <Form onSubmit={handleSubmitForm}>
            <Form.Group className="mb-3" >
                <Form.Label>Usuario</Form.Label>
                <Form.Control onChange={handleChange} value={user} name="user" type="text" placeholder="userName" />
            </Form.Group>
            <Form.Group className="mb-3" >
                <Form.Label>Contraseña</Form.Label>
                <Form.Control onChange={handleChange} value={password} name="password" type={showPass ? "text": "password"} placeholder="Password123" />
            </Form.Group>
            <Form.Check type="switch" id="custom-switch" onChange={()=>{
                setShowPass(!showPass)
            }} label="Mostrar Contraseña"/>
            <div className="d-flex justify-content-center align-items-center mt-2">
                <Button type="submit"
                 variant="primary">Ingresar</Button>{''}
            </div>
        </Form> 
       </div>
    </div>
    
  )
}

import { ChangeEvent, useState } from "react"

//interfaz generica
interface FormValues{
    [key:string]:string | number
}


//generico
 export const useForm=<T extends FormValues>(initialValues: T)=>{
    const [values,setValues]=useState<T>(initialValues)
    //podemos usar una funcion llamada change
    const handleChange=(event: ChangeEvent<HTMLInputElement>)=>{
        //vamos a hacer una desestructuracion del event
        const {value, name}=event.target
        //modificamos nuestros values
    
        setValues({...values,[`${name}`]:value})
    }
    //hacemos una funcion llamada RESET, se resetea a nuestros valores iniciales 
    const resetForm=()=>{
        setValues(initialValues)
    }
    
    return{
        //values para el submit de nuestro formulario 
        values,
        //lo que le pasamos a nuestros inputs
        handleChange,
        //en caso de ser necesaria
        resetForm,
    }

}
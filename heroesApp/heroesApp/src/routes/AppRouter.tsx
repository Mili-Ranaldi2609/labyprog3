import {  Route, Routes } from "react-router-dom"
import { Login } from "../components/screens/Login/Login"

import { useAppSelector } from "../hooks/redux"
import { ProtectedRoutes } from "./ProtectedRoutes"

//es nuestro manejador de rutas 
export const AppRouter = () => {
    const isLogged=useAppSelector(state=>state.auth.isLogged)
  return (
    <> 
        <Routes>
        {
            isLogged ? <Route path="/*" element={<ProtectedRoutes/>}></Route>
            : <Route path="/*" element={<Login/>}></Route>
        }
        <Route path="/login" element={<Login/>}/>
        
    </Routes>
    
    </>
    
  )
}

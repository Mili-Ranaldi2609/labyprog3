import { createSlice, PayloadAction } from "@reduxjs/toolkit"

interface IInitialState{
    user: string | null,
    isLogged: boolean
}
const initialState:IInitialState={
    user:null,
    isLogged:false
}

//slice

export const AuthUser=createSlice({
    name:"AuthUser",
    initialState,
    reducers:{
        setLogin:(state,action:PayloadAction<string>)=>{
            state.user=action.payload
            state.isLogged=true
        },
        setLogout:(state)=>{
            state.user=null
            state.isLogged=false
        }

    }
})

//exportando las actions y reducer

export const {setLogin,setLogout}=AuthUser.actions

export default AuthUser.reducer
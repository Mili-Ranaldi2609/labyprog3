import { handleGetProductLocalStorage } from "../persistence/localstorage.js"
import { handleRenderList } from "../views/store.js"
export const handleSearchProductByName=()=>{
    const inputHeader=document.getElementById("inputHeader")
    const products=handleGetProductLocalStorage()
    const result= products.filter((el)=>
    el.name.toLowerCase().includes(inputHeader.value)
)
    handleRenderList(result)
}
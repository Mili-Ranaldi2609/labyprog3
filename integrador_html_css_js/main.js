import { renderCategories } from "./src/services/categories.js";
import { setInLocalStorage,handleGetProductLocalStorage } from "./src/persistence/localstorage.js";
import { handleSearchProductByName } from "./src/services/searchBar.js";
import { handleGetProductsToStore } from "./src/views/store.js";
import Swal from "sweetalert2";

/*===========APLICACION==================== */
/*handleGetProductsToStore();
renderCategories();*/
export let categoriaActiva=null
export const setCategoriaActiva=(categoriaIn)=>{
    categoriaActiva=categoriaIn
}

export let productoActivo=null
export const setProductoActivo=(productoIn)=>{
    productoActivo=productoIn
}
handleGetProductsToStore();
window.onload = () => {
    renderCategories();
};
/*===========POPUP============ */

const cancelButton=document.getElementById("cancelButton")
cancelButton.addEventListener('click',()=>{
    handleCancelButton()
})
const handleCancelButton=()=>{
    closeModal()
}
//FUNCIONES ABRIR - CERRAR MODAL
export const openModal=()=>{
    const modal=document.getElementById("modalPopUp")
    modal.style.display='flex'
    const buttonDelete=document.getElementById("deleteButton")
    if (productoActivo) {
        buttonDelete.style.display="block"
    }else{
        buttonDelete.style.display="none"
    }
    if (productoActivo) {
        const name=document.getElementById("nombre"),
        img=document.getElementById("img"),
        price=document.getElementById("precio"),
        categories=document.getElementById("categoria");
        name.value=productoActivo.name
        img.value=productoActivo.img
        price.value=productoActivo.price
        categories.value=productoActivo.categories
    }
}
export const closeModal=()=>{
    const modal=document.getElementById("modalPopUp")
    modal.style.display='none'
    setProductoActivo(null)
    resetModal()
}

const resetModal=()=>{
    const name=document.getElementById("nombre"),
        img=document.getElementById("img"),
        price=document.getElementById("precio"),
        categories=document.getElementById("categoria");
    name.value=""
    img.value=""
    price.value=0
    categories.value="Seleccione una categoria"
}
const deleteButton=document.getElementById("deleteButton")
deleteButton.addEventListener('click',()=>{
    handleDeleteProduct()
})

//GUARDAR O MODIFICAR ELEMENTOS

//=================productos

/* ===========product================== */
///header
const buttonAdd=document.getElementById("buttonAddElement")
buttonAdd.addEventListener('click',()=>{
    openModal()
})

//button search
const buttonSearch=document.getElementById("buttonSearch")
buttonSearch.addEventListener('click',()=>{
    handleSearchProductByName()
})



// guardamos 
const acceptButton=document.getElementById("acceptButton")
acceptButton.addEventListener('click',()=>{
    handleSaveOrModifyElement()
})
const handleSaveOrModifyElement=()=>{
    const name=document.getElementById("nombre").value,
        img=document.getElementById("img").value,
        price=document.getElementById("precio").value,
        categories=document.getElementById("categoria").value;
    let object=null
    if (productoActivo) {
        object={
            ...productoActivo,
            name, 
            img,
            price,
            categories
        };
    }else{
        object={
            id:new Date().toISOString(),
            name, 
            img,
            price,
            categories
        }
    }
    
    
    setInLocalStorage(object)
    handleGetProductsToStore()
    closeModal()
}

/// eliminar elemento
/*
export const handleDeleteProduct=()=>{
    Swal.fire({
        title: "¿Desea eliminar el producto?",
        text: "Se va a eliminar permanentemente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar"
      }).then((result) => {
        if (result.isConfirmed) {
            const products= handleGetProductLocalStorage()
            const result=products.filter((el)=>el.id!==productoActivo.id)
            localStorage.setItem('products',JSON.stringify(result))
            const newProducts= handleGetProductLocalStorage()
            handleRenderList(newProducts)
            closeModal()
        }else{
            closeModal()
        }
      });
    
}*/
export const handleDeleteProduct = () => {
    Swal.fire({
        title: "¿Desea eliminar el producto?",
        text: "Se va a eliminar permanentemente",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Si, eliminar"
    }).then((result) => {
        if (result.isConfirmed) {
            const products = handleGetProductLocalStorage();
            console.log('productoActivo:', productoActivo);
            console.log('products:', products);

            const newProducts = productoActivo ? products.filter((el) => el.id !== productoActivo.id) : products;
            localStorage.setItem('products', JSON.stringify(newProducts));
            handleRenderList(newProducts);
            closeModal();
        } else {
            closeModal();
        }
    });
}


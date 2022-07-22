import {pintar} from './controladorPintarInfoProducto.js'


console.log("hola estamos comprando")
let producto=JSON.parse(localStorage.getItem("infoProducto"))

let carrito
//verificar si hay productos en el carrito
if(JSON.parse(localStorage.getItem("carrito"))==null){
   
    //creamos un carrito
    carrito=[]
}else{
    carrito=JSON.parse(localStorage.getItem("carrito"))
}

console.log(JSON.parse(localStorage.getItem("carrito")))
pintar(producto)
// let foto = document.getElementById("foto")
// foto.src=producto.foto

// let ubicacion = document.getElementById("ubicacion")
// ubicacion.textContent = producto.ubicacion
// let barrio=document.getElementById("barrio")
// barrio.textContent=producto.barrio

// let descripcion=document.getElementById("descripcion")
// descripcion.textContent=producto.descripcion

// let precio=document.getElementById("precio")
// precio.textContent=producto.precio


//capturar la cantidad del producto seleccionado 
//capturar el avlue el input
let cantidad = document.getElementById("cantidad").value


//agrego un nuevo atributo(cantidad) al objeto producto
//CEAMOS EL EL CARRITO DE COMPRAS



let botonAgregar =document.getElementById("agregar")
    botonAgregar.addEventListener("click",function(evento){
    let cantidad = document.getElementById("cantidad").value
    producto.cantidad=cantidad

    //agregando un nuevo elemento a un arreglo
    carrito.push(producto)
    //almaceno el carrito en el local storage
    localStorage.setItem("carrito",JSON.stringify(carrito))

})


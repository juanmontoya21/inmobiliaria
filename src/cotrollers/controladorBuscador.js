import { productosBD } from "../helper/baseDatos.js"
import {pintarProductos} from "./controladorPintar.js"

export function buscarProductos(){

    let buscador=document.getElementById("buscador")

    buscador.addEventListener("keyup",function(evento){
        let productoBuscado=evento.target.value
        
        let filtro=productosBD.filter(function(producto){
            return(producto.ubicaion.toLowerCase().includes(productoBuscado))
        })
        console.log(filtro)
        pintarProductos(filtro)
    })
}
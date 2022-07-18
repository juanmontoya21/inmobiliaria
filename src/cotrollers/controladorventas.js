import { productosBD } from '../helper/baseDatos.js'
console.log(productosBD)

import { pintarProductos } from './controladorpintar.js'
pintarProductos(productosBD)

import { buscarProductos } from './controladorBuscador.js'
buscarProductos()
import {ampliarInfoProducto} from './controladorAmpliarInfo.js'


let contenedor = document.getElementById("fila")
contenedor.addEventListener("click",function(evento){
    let producto = ampliarInfoProducto(evento)
    console.log(producto)

    //almacenar en el local storage la informacion del producto selecionado
    localStorage.setItem("infoProducto",JSON.stringify(producto))
    console.log(localStorage.getItem("infoProducto"))
    //abro nueva ventana
    window.location.href="./ampliarinfo.html"
})
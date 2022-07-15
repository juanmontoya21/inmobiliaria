import { productosBD } from '../helper/baseDatos.js'
console.log(productosBD)

import { pintarProductos } from './controladorpintar.js'
pintarProductos(productosBD)

import { buscarProductos } from './controladorBuscador.js'
buscarProductos()
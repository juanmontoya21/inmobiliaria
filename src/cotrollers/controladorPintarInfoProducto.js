export function pintar(producto){
    
    let foto = document.getElementById("foto")
    foto.src=producto.foto

    let ubicacion = document.getElementById("ubicacion")
    ubicacion.textContent = producto.ubicacion
    let barrio=document.getElementById("barrio")
    barrio.textContent=producto.barrio

    let descripcion=document.getElementById("descripcion")
    descripcion.textContent=producto.descripcion

    let precio=document.getElementById("precio")
    precio.textContent=producto.precio
}
export function ampliarInfoProducto (evento){
    let producto={
        foto:evento.target.parentElement.querySelector("img").src,
        ubicacion:evento.target.parentElement.querySelector("h3").textContent,
        barrio:evento.target.parentElement.querySelector("h4").textContent,
        descripcion:evento.target.parentElement.querySelector("p").textContent    
    }
    return(producto)
} 
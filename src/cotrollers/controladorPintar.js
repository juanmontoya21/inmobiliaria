export function pintarProductos(productos){
    let fila=document.getElementById("fila")
    fila.innerHTML=""

    productos.forEach(function(producto){
        let columna=document.createElement("div")
        columna.classList.add("col")

        let tarjeta=document.createElement("div")
        tarjeta.classList.add("card","h-100","shadow","text-center")

        let foto=document.createElement("img")
        foto.classList.add("img-fluid","w-100","h-100")
        foto.src=producto.fotos[0]

        let ubicaion=document.createElement("h3")
        ubicaion.textContent=producto.ubicaion

        let barrio=document.createElement("h4")
        barrio.textContent=producto.barrio

        let precio=document.createElement("h2")
        precio.classList.add("fw-bold")
        precio.textContent="$"+producto.precio

        let descripcion=document.createElement("p")
        descripcion.classList.add("d-none")
        descripcion.textContent=producto.descripcion

        columna.addEventListener("mouseover",function(evento){
            foto.src=producto.fotos[1]

        })
        columna.addEventListener("mouseleave",function(evento){
            foto.src=producto.fotos[0]
            
        })

        tarjeta.appendChild(foto)
        tarjeta.appendChild(ubicaion)
        tarjeta.appendChild(barrio)
        tarjeta.appendChild(precio)
        tarjeta.appendChild(descripcion)
        columna.appendChild(tarjeta)
        fila.appendChild(columna)

    })
}
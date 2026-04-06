import fs from 'fs'

function mostrarProductos(productoBuscado) {
    const productos = JSON.parse(fs.readFileSync('./productos.json', 'utf-8'))

    const producto = productos.find(p => p.nombre === productoBuscado)

    if (producto) {
        console.log('Producto encontrado:\n', producto)
    } else {
        console.log('No se encontró el producto')
    }
}

mostrarProductos("Monitor")
mostrarProductos("ASDASDASD")
import fs from 'fs'

function mostrarProductos() {
    const productos = JSON.parse(fs.readFileSync('./productos.json', 'utf-8'))
    console.log(productos)
}

mostrarProductos()
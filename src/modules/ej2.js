import fs from 'fs'

function agregarProducto(nombre, precio) {
    const productos = JSON.parse(fs.readFileSync('./productos.json', 'utf-8'))
    productos.push({
        nombre: nombre,
        precio: precio
    })
    fs.writeFileSync('./productos.json', JSON.stringify(productos, null, 2))
    console.log(`${nombre} agregado exitosmente!`)
}

agregarProducto('Monitor', 30000)
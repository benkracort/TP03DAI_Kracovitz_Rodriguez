import fs from 'fs'

function generarCSV() {
    const productos = JSON.parse(fs.readFileSync('./productos.json', 'utf-8'))

    let csv = 'nombre,precio\n'

    for (const producto of productos) {
        csv += `${producto.nombre},${producto.precio}\n`
    }

    fs.writeFileSync('./productos.csv', csv)

    console.log('Archivo CSV generado correctamente')
}

generarCSV()
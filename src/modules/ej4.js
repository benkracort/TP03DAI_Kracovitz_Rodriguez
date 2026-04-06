async function obtenerPais(nombrePais) {
    try {
        const respuesta = await fetch(`https://restcountries.com/v3.1/name/${nombrePais}`)
        const datos = await respuesta.json()

        const pais = datos[0]

        console.log(`País: ${pais.name.common}`)
        console.log(`Capital: ${pais.capital[0]}`)
        console.log(`Región: ${pais.region}`)
        console.log(`Población: ${pais.population}`)
    } catch (error) {
        console.log('Error al obtener el país:', error)
    }
}

obtenerPais("Argentina")
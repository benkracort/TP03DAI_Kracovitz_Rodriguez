function analizarTexto(texto) {
    let datosTexto = {};
    if (texto != "") {
        datosTexto = {
            caracteres: texto.length,
            palabras: texto.split(' ').length,
            vocales: (texto.match(/[aeiouAEIOU]/g) || []).length,
            consonantes: (texto.match(/[bcdfghjklmnpqrstvwxyzBCDFGHJKLMNPQRSTVWXYZ]/g) || []).length
        }
        console.log(datosTexto)
    } else {
        console.log("ERROR! - El texto está vacío")
    }
}

analizarTexto("Hola, Alison de Slowdive es un muy buen tema")
analizarTexto("Hola")
analizarTexto("CBC")
analizarTexto("")
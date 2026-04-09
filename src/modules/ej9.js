function validarPassword(password) {
    if (password.length > 8 && password.match(/[1234567890]/g) || [] && password.match(/[ABCDEFGHIJKLMNÑOPQRSTUVWXYZ]/g)) {
        console.log('Contraseña valida')
    } else {
        console.log('ERROR! - Contraseña valida')
    }
}
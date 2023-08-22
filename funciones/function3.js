
function validarUsuario(pass, repass, user) {
    if (pass.length < 8 && pass!=repass){
        return " vuelve a intentar"
    } else{
        return " bienvenido"
    }
}

let leerResultado =validarUsuario("123456","123456","usuario")
console.log(leerResultado)
// Dado que localStorage solo almacena cadenas de texto, es necesario convertir objetos o arreglos a formato JSON antes de guardarlos.

const usuario = {
    nombre: "Carlos",
    edad: 28,
    isVerify:true
}

// Convertimos el objeto a JSON
localStorage.setItem('user', JSON.stringify(usuario));

//recuperar y convertirlo de JSON a objeto
const usuarioGuardado = JSON.parse(localStorage.getItem('user'));
console.log(usuarioGuardado.nombre);
console.log(usuarioGuardado.edad);
console.log(usuarioGuardado.isVerify);




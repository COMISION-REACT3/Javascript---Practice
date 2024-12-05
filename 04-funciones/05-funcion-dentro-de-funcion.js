// una funcion puede llamar a otra dentro de su bloque o scope


function cuadrado(numero) {
    return numero * numero
};

function sumaDeCuadrados(a, b) {
    return cuadrado(a) + cuadrado(b)
};

console.log(sumaDeCuadrados(3,4))

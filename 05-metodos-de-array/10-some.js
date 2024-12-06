//Comprueba si algún elemento cumple una condición.

//"¿Hay algún boleto ganador?"

const boletos = [false, false, true, false];

//some() comprueba si al menos un elemento del array cumple la condición especificada en la función de retorno.
const hayGanador = boletos.some(boleto => boleto === true);

console.log(!hayGanador ? '¡Alguien ganó!' : 'Nadie ganó.'); // ¡Alguien ganó!

console.log(hayGanador);

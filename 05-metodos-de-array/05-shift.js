//Elimina el primer elemento del array y lo devuelve.

const fila = ['Cliente 1', 'Cliente 2', 'Cliente 3'];

const atendido = fila.shift();

console.log(`Se atendió a: ${atendido}`);
console.log(fila); // ['Cliente 2', 'Cliente 3']
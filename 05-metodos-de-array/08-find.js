//Encuentra el primer elemento que cumple una condición.

const jugadores = [
    {nombre: 'Jugador1', esImpostor: false},
    {nombre: 'Jugador2', esImpostor: true},
    {nombre: 'Jugador3', esImpostor: false}
];

const impostor = jugadores.find(jugador => !jugador.esImpostor);

console.log(`!${impostor.nombre} es el impostor!`);

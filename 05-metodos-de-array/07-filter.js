//Crea un nuevo array con los elementos que cumplen una condición.

const juegos = [
    {nombre: 'Zelda', calificacion:10},
    {nombre:'Warcraft', calificacion:5},
    {nombre:'Warhammer', calificacion:2},
    {nombre:'Counter Strike', calificacion:1},
]

const juegosTop = juegos.filter(juego => juego.calificacion > 8)

console.log(juegosTop);

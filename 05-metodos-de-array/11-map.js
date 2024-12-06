//Crea un nuevo array aplicando una función a cada elemento.


//"Multiplicando por dos las puntuaciones de un juego"


const puntuaciones = [10, 20, 30];

const puntuacionesDobles = puntuaciones.map(punto => punto * 2);

console.log(puntuacionesDobles); // [20, 40, 60]

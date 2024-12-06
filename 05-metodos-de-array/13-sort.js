//organiza los elementos de un array en su lugar (modificando el array original) basándose en una función de comparación

//"Ordenando jugadores por puntaje"


const jugadores = [
    { nombre: 'Alice', puntaje: 50 },
    { nombre: 'Bob', puntaje: 100 },
    { nombre: 'Charlie', puntaje: 75 }
  ];

  
  jugadores.sort((a, b) => b.puntaje - a.puntaje);
   /* a y b son dos objetos tomados del array.
  b.puntaje - a.puntaje calcula la diferencia entre el puntaje del segundo objeto (b) y el del primero (a). 
  
    Si el puntaje de b es mayor que el de a, la resta es positiva → b va antes.
    Si el puntaje de b es menor que el de a, la resta es negativa → a va antes.
    Si los puntajes son iguales, el resultado es 0, y el orden relativo no cambia.
  */

  console.log(jugadores);
  // [{ nombre: 'Bob', puntaje: 100 }, { nombre: 'Charlie', puntaje: 75 }, { nombre: 'Alice', puntaje: 50 }]
  
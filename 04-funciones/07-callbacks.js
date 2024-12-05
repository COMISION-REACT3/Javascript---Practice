//En JavaScript, un callback es una función que se pasa como argumento a otra función y se ejecuta después de que la función principal haya terminado. Esto permite manejar tareas de forma flexible, como ejecutar una acción específica cuando algo sucede.

/* ¿Por qué es útil?

Imagina que estás cocinando y necesitas que alguien te avise cuando termine de hervir el agua para poner la pasta. Ese "aviso" es un callback: ocurre después de que algo haya pasado.

 */
/* 
function prepararFiesta(tarea, callback) {
    console.log('Comenzamos la fiesta!');
    console.log('Tarea actual: ' + tarea);
    callback(); // aca ejecutamos el callback    
}


function finalizarFiesta(){
    console.log('La fiesta ha terminado, gracias por venir!');
};

//
prepararFiesta('Decorar la sala', finalizarFiesta) */



/* 
Ejercicio: "El pedido de pizza"
Vamos a simular el proceso de pedir una pizza.

El usuario elige un tipo de pizza.
Después de elegir, se le informa que su pizza está en camino, utilizando un callback.
*/

// funcion principal:

function pedirPizza(tipoDePizza, callback){
    console.log('Has pedido una pizza de: ' + tipoDePizza);
    console.log('Preparando pizza');
    setTimeout(callback, 3000) // Simula el tiempo de preparacion  
}

// callback que se ejecuta cuando la pizza está lista
function entregarPizza(){
    console.log('¡Tu pizza esta lista! en camino a tu casa...');    
}

//llamo a la funcion y le paso el callback
const tipoDePizza = prompt("¿Que tipo de pizza queres?");

pedirPizza(tipoDePizza, entregarPizza);




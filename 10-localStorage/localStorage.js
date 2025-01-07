/* 
- ¿Qué es localStorage?

localStorage es una funcionalidad del navegador web que permite almacenar datos en el lado del cliente de forma persistente. Esto significa que los datos guardados en localStorage permanecen disponibles incluso si el usuario cierra y vuelve a abrir el navegador.

- Características principales:

Almacena datos en pares clave-valor.

Los datos no tienen fecha de expiración.

Solo almacena cadenas de texto (string). Si deseas guardar objetos, primero necesitas convertirlos a JSON.

Tiene un límite de almacenamiento aproximado de 5 MB por dominio (varía según el navegador).

*/

//Metodos principales de localStorage

//setItem(key, value): Almacena un par clave-valor en localStorage.
localStorage.setItem('nombre', 'Eze');

//getItem(key): Obtiene el valor asociado a la clave especificada en localStorage.
const nombre = localStorage.getItem('nombre');



//removeItem(key): Elimina el par clave-valor asociado a la clave especificada en localStorage.
localStorage.removeItem('nombre');


//clear(): Elimina todos los pares clave-valor almacenados en localStorage.
localStorage.clear();

//key(index): devuelve el noombre de la clave en una posición especifica

localStorage.setItem('nombre', 'Eze');
localStorage.setItem("edad", "30");

console.log(localStorage.key(1)); // nombre


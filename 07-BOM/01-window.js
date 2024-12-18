/* 

¿Para qué sirve el BOM?
El BOM permite:

Controlar la ventana del navegador (abrir, cerrar o redimensionar).
Interactuar con el historial (ir hacia adelante o atrás en las páginas visitadas).
Leer y modificar la URL actual.
Obtener información del navegador y del usuario (por ejemplo, la ubicación geográfica).
Programar temporizadores para acciones (como setTimeout o setInterval).


¿De dónde sale el window y cómo lo proporciona el navegador?
El objeto window es la raíz del BOM (Browser Object Model). Es un objeto global que el navegador crea automáticamente cuando se carga una página web. Representa la ventana del navegador o, más específicamente, el contenedor que aloja tu página web.

Cuando abres una página en un navegador, como por ejemplo un archivo HTML en tu computadora o un sitio web desde internet, el navegador se encarga de:

Leer el archivo HTML (o el que esté vinculado desde la URL que visitas).
Crear una representación interna de ese documento (el DOM) y asociarlo al BOM.
Proporcionar el objeto window, que actúa como el entorno principal donde vive tu página.

*/

//Controlar la ventana del navegador
/* let nuevaVentana = window.open("https://www.youtube.com/", '_blank', 'width=800, height=800');

nuevaVentana.close() */

//Interactuar con el historial

/* history.back() */

/* history.forward() */


//modificar la url del navegador

console.log(window.location.href)

//redireccioname

/* window.location.reload() */


/* Programar acciones con temporizadores
Con setTimeout y setInterval puedes ejecutar código después de un tiempo: */


/* setTimeout(() => {
    console.log('Han pasado 3 segundos');
}, 3000) */

let contador = 0;

let intervalo = setInterval(() => {
    contador++;
    console.log(`Pasaron ${contador} segundos`);  
    if(contador === 5) {
        clearInterval(intervalo);
        console.log('El intervalo se ha detenido');
    }  
}, 2000)

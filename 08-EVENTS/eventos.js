/* 

Un evento en JavaScript es una acción o suceso que ocurre en la página web y que puede ser detectado por JavaScript para ejecutar una función asociada, llamada manejador de eventos. Los eventos pueden ser generados por el usuario (como un clic, pulsar una tecla, o mover el ratón) o por el navegador (como cargar la página o redimensionar la ventana).

Tipos de Eventos:

- Mouse Events: click, dblclick, mouseover, mouseout, mousemove.
- Keyboard Events: keydown, keyup, keypress.
- Form Events: submit, focus, blur, change.
- Window Events: resize, scroll.

Manejadores de Eventos: Son funciones que se ejecutan cuando ocurre un evento específico.

Registro de Eventos: En JavaScript moderno, se utiliza addEventListener para asociar eventos a elementos. Este método permite registrar múltiples eventos en el mismo elemento y separar la lógica del HTML.

*/

//Sintaxis

element.addEventListener(event, handler, options);

/*

- element: El elemento DOM al que se le asocia el evento.
- event: El tipo de evento (ej., click).
- handler: La función que se ejecuta cuando ocurre el evento.
- options (opcional): Configuración avanzada como once, capture o passive.

*/

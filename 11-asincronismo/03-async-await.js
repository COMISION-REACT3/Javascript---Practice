/*
Explicación
La sintaxis async/await es una forma más moderna y legible de trabajar con promesas.

async: Declara que una función contiene código asincrónico.
await: Pausa la ejecución hasta que la promesa sea resuelta (o rechazada).
Esto hace que el código sea más parecido a una estructura síncrona, lo que mejora su claridad.
*/

//FUNCION PARA OBTENER TODOS LOS POST

  /*   
- Usamos fetch para realizar la solicitud GET.
- await espera a que la solicitud se complete antes de seguir.
- Si ocurre un error, se captura en el bloque catch.   
  */

async function obtenerPost (){
    try {
        const response = await fetch("https://jsonplaceholder.typicode.com/posts");
        if (!response.ok) {
            throw new Error(`Error:  ${response.status}`);            
        }
        const posts = await  response.json();
        console.log(posts);             
    } catch (error) {
        console.log("error al obtener los posts: ", error);
    }
}
//llamar a la funcion
obtenerPost()


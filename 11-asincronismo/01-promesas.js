/* 

Explicación
En JavaScript, las operaciones asincrónicas (como leer un archivo, realizar una petición HTTP, o esperar un tiempo) no bloquean el flujo del programa. Las promesas son un mecanismo para manejar este tipo de operaciones.

Una promesa es un objeto que representa la eventual finalización (o fallo) de una operación asincrónica y su resultado. Puede estar en uno de los tres estados:

Pending (pendiente): La operación aún no se ha completado.
Fulfilled (resuelta): La operación se completó con éxito.
Rejected (rechazada): La operación falló.

Podemos usar los métodos .then() para manejar los resultados exitosos y .catch() para manejar errores.

*/


//EJEMPLO

//crear una funcion que devuelva un promesa

function obtenerUsuarioPorId(id){
        return new Promise((resolve, reject) => {
            //realizar la solicitud con un el fetch
            fetch(`https://jsonplaceholder.typicode.com/users/${id}`)
            .then((response) => {
               
             if(!response.ok){
                reject(`Error: ${response.status}`)
             }   
                
               return response.json();              
            })
            .then((usuario) => {
                resolve(usuario); //resolver la promesa                
            })
            .catch((error) => {
                reject(error);
            })
        })
}

//consumir la promesa
obtenerUsuarioPorId(1)
.then((usuario) =>{
    console.log('Usuario:', usuario);
})
.catch((error) => {
    console.log(error);    
})
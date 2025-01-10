/* 

Explicación
Las peticiones HTTP permiten que nuestro código interactúe con servidores remotos, por ejemplo, para obtener datos o enviarlos. Una de las formas más comunes de hacer estas peticiones es usando el método fetch, que devuelve una promesa.

Con fetch, podemos realizar solicitudes GET, POST, PUT, DELETE

*/

//CREAR UN RECURSO CON EL METODO POST

const crearPost = () => {
    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json; charset=UTF-8",
        },
        body: JSON.stringify({
            title:"Nuevo post",
            body:"Este es un nuevo post de prueba",
            userId:1
        }),
    })
    .then((response) => {
        if(!response.ok){
            console.log("Hubo un error con el proceso");            
            throw new Error(`Error al crear el post: ${response.status}`);
        }
        return response.json();
    })
    .then((post) => {
        console.log("Post creado:", post);        
    })
    .catch((error) => {
        console.log("Error:", error);        
    })
} 

crearPost()


//ACTUALIZAR UN RECURSO CON EL METODO PUT
const actualizarPost = (id) =>{
    fetch(`https://jsonplaceholder.typicode.com/posts/${id}`,{
        method: "PUT",
        headers:{
            "Content-Type": "application/json; charset=UTF-8"
        },
        body: JSON.stringify({
            title:"Post actualizado",
            body:"Este post fue actualizado",
            userId:1
        }),
    })
    .then((response) => {
        if(!response.ok){
            console.log("Hubo un error con el proceso");            
            throw new Error(`Error al actualizar el post: ${response.status}`);
        }

        return response.json();
    })
    .then((datos) => {
        console.log("Post actualizado: ", datos);        
    })
    .catch((error) =>{
        console.log("Error:", error);
    })
}

actualizarPost(1)
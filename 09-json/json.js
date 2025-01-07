/* 
- ¿Qué es JSON?

JSON (JavaScript Object Notation) es un formato de texto ligero para intercambiar datos. Es fácil de leer y escribir para los humanos, y sencillo de interpretar y generar para las máquinas.

JSON se basa en una estructura de clave-valor, similar a los objetos en JavaScript, y se utiliza comúnmente para enviar y recibir datos entre un cliente (por ejemplo, un navegador web) y un servidor.


- Sintaxis de JSON

Claves: Siempre deben estar entre comillas dobles (" ").

Valores: Pueden ser de los siguientes tipos:

Cadenas de texto (strings) entre comillas dobles.

Números (enteros o decimales).

Booleanos (true o false).

Objetos (otra colección de pares clave-valor).

Arreglos (listas de valores).

null (representa un valor nulo).

*/

//EJEMPLO DE JSON

let jsonUser = `{
    "nombre" : "juan",
    "edad" : 25,
    "hobbies" : ["leer", "programar", "cocinar"],
    "direccion": {
    "calle": "avenida Siempre Viva",
        "numero": 123,
        "ciudad": "Buenos Aires",
        "estado": {}
    }
`

//CONVERTIR UN OBJETO JAVASCRIPT A JSON

const jsObjet = {nombre: 'juan', edad:30, isVerify: true};
const jsonString = JSON.stringify(jsObjet);
console.log(`Formato JSON: ${jsonString}`);
console.log(jsObjet);


//CONVERTIR UN JSON A UN OBJETO JAVASCRIPT

const peliculasJson = `{
    "peliculas": [
    {
    "id": 1,
    "title": "La La Land",
    "director": "Kate Winslet",
    "year": 2016},
    {
    "id": 2,
    "title": "Parasite",
    "director": "Jungkook Park",
    "year": 2019}
    ]}
`

const peliculasParse = JSON.parse(peliculasJson);
console.log(peliculasParse);
console.log(peliculasJson);


//ejemplo de solicitud get y respuesta en formato json desde un servicio:




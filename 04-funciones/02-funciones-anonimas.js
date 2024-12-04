// Las funciones anonimas son las que no tienen nombre y se le pasan variables. Suelen guardarse o asignarse a una variable.

const despedirse = function(nombre){
    return "Adios, " + nombre + " " +  "Que te vaya bien!" 
}

/* alert(despedirse("Rolling")); */


const generarCodigo = function(nombre, color){
    return (
        "Tu código de agente secreto es: " + 
        nombre.slice(0, 2).toUpperCase() + 
        "-" + color.slice(-2).toUpperCase()
    );
};


const nombre = prompt('Ingrese un nombre')
const color = prompt('Ingrese un color')

alert(generarCodigo(nombre, color))
/* 
    El alcance de una funcion determina donde se puedne usar las variables. Las variables dentro de una funcion no se pueden acceder desde afuera 


    Explicación:
Scope local: Variables definidas dentro de una función solo son accesibles dentro de esa función.

Scope global: Variables definidas fuera de cualquier función son accesibles en todo el código.
*/


let mensaje = "Hola desde el scope global";

function mostrarMensaje() {
        let mensaje = "Hola desde el scope local"
        console.log(mensaje);        
}

mostrarMensaje();

console.log(mensaje);

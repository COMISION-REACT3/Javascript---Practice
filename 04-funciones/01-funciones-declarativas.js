//Son funciones definidas con la palabra reservada function, seguidas de su nombre. Pueden ser llamadas antes de ser definidas gracias a algo que se llama "hoisting"


function saludar(){
    console.log('Hola mundo!'); 
    alert('Hola mundo')   
}

/* saludar(); */



//Una función que determina si un número es primo.

function esPrimo(numero){
    if(numero <= 1) return false;
    for (let i = 2; i < numero; i++) {
       if(numero % i === 0 ) return false        
    }
    return true;
}

console.log(esPrimo(6));

// Crea una función que construya una "historia loca" a partir de los datos ingresados por el usuario.

function contarHistoria(nombre, lugar, actividad){
    return(
        "Habia una vez un valiente  " + 
        nombre + " que fue a " + lugar + 
        " para " + actividad
    )
}

const unNombre = prompt('Ingrese un nombre')
const unLugar = prompt('Ingrese un lugar')
const unaActividad = prompt('Ingrese una actividad')


alert(contarHistoria(unaActividad, unLugar, unNombre));




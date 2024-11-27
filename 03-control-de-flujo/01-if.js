let edad = 15;

// if simple

if(!edad){
    console.log("La edad es requerida");
} else if( edad >= 18){
    console.log("Sos mayor de edad");    
} else {
    console.log("Sos menor de edad");
}


console.log("El codigo continua.....");


// 7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.

/* let num1 = +(prompt("Ingrese el primer numero"))
let num2 = +(prompt("Ingrese el segundo numero"))
let num3 = +(prompt("Ingrese el tercero numero")) */


/* if((num1 > num2) && (num1 > num3)){
    console.log(`El numero mayor es ${num1}`);    
} else if((num2 > num1) && (num2 > num3)){
    console.log(`El numero mayor es ${num2}`);    
} else if((num3 > num1) && (num3 > num2)){
    console.log(`El numero mayor es ${num3}`);
}else {
    console.log("Todos los numeros son iguales");
}
 */


let esAdmin = false;

let estaRegistrado = false;

if (esAdmin || estaRegistrado) {
    console.log("Podes ingresar a tu perfil");    
} else {
    console.log("Acceso denegado. Inicia Sesion");    
}

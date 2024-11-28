//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)

let num = +(prompt('Ingrese un numero'));

if(
   num % 2 === 0 ||
   num % 3 === 0 ||
   num % 5 === 0 || 
   num % 7 === 0 
) {
    console.log('El numero ingresado es divisible');  
} else {
    console.log('NO es divisible por 2, 3, 5 o 7');
}

//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

let divisibles = [];






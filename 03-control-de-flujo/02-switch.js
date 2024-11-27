// un programa para pedir un helado según su sabor

let sabor = prompt('¿Que sabor de helado queres?').trim();



switch(sabor){
        case "vainilla" :
            console.log("Marche un cuarto de helado de vainilla");
            break;
        case "chocolate":
            console.log("Marche un cuarto de helado de chocolate");
            break;
        case "frutilla":
            console.log("Marche un cuarto de helado de frutilla");
            break
        case "dulce de leche granizado" :
            console.log("Marche un cuarto de helado de dulce de leche");
            break;
         case "crema del cielo" :
            console.log("¿NO queres pedirte otro sabor de verdad??");
            break;
        default:
            console.log(`No tengo el sabor ${sabor} :(`);
            break;                 
}





//Imagina que estás desarrollando un sistema de recompensas para una app educativa. Dependiendo de los puntos que un usuario obtiene en un test, se le asigna una recompensa específica. Las recompensas son (medalla de oro, de plata y de bronce)



/* 
if(puntos >= 90){
    recompensa = "medalla de oro";
} else  if (puntos >= 70){
    recompensa = "medalla de plata";
} else if(puntos >= 50){
    recompensa = "medalla de bronce";
} else {
    recompensa = "ninguna. Seguí participando!";
}

console.log(`La recompensa obtenida es: ${recompensa}`); */

let puntos = 70;
let recompensa = '';


switch (true) { //evaluar en true para encontrar la primer coincidencia contra el booleano

    case puntos >= 90:
        recompensa = "medalla de oro";
        break;
    case puntos >= 70:
        recompensa = "medalla de plata";
        break;
    case puntos >= 50:
        recompensa = "medalla de bronce";
        break;
    default:
        recompensa = "ninguna. Seguí participando!";
        break;       
}

console.log(`La recompensa obtenida es: ${recompensa}`);


console.log("El codigo continua......");
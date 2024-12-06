//Reduce el array a un solo valor.

//"Calculando la suma de monedas recogidas"

const monedas = [10, 20, 50];

//reduce recibe dos parámetros: el acumulador y el elemento actual.
const total = monedas.reduce((acumulado, actual) => acumulado + actual, 0);

console.log(`Total de monedas: ${total}`); // Total de monedas: 80

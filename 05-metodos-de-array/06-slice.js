//Crea una copia de una parte del array. No modifica el original.

const pizza = ['Pepperoni', 'Champiñones', 'Queso', 'Piña'];

const porciones = pizza.slice(1, 3);

console.log(porciones); // ['Champiñones', 'Queso']
console.log(pizza);

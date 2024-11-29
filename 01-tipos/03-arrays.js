// arrays / arreglos / colecciones

let frutas = ['manzana', 'naranja', 'mandarina'];

frutas[3] = 'uva';
frutas[0] = 'tomate';
frutas.push('pera');

console.log(frutas);
console.log(frutas[0]);

for (let i = 0; i < frutas.length; i++) {
    console.log(frutas[i]);    
}


// heroes de marvel y de dc

let heroesMarvel = ['Iron Man', 'Capitan America', 'Batman', 'Superman'];

let heroesDc = heroesMarvel.splice(2, 2, 'Hulk', 'Spiderman', 'Thor')

console.log(heroesMarvel);
console.log(heroesDc);













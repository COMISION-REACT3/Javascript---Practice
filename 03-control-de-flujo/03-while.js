// programa para cazar pokemon

let pokeballs = 15;

let pokemonAtrapados = 0;


while (pokeballs > 0) {
        console.log('Atrapaste un pokemon!!!');
        pokeballs--;
        pokemonAtrapados++;
        console.log(`te quedan ${pokeballs} pokeballs`); 
}

console.log(`¡Atrapaste un total de ${pokemonAtrapados} pokemon!!!!!`);

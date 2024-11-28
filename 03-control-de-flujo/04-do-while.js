//programa para simular una tirada de dados hasta que el nos de 6 para encontrar un ganador

let dado;

/* console.log(Math.floor(10.9));
console.log(Math.random()*6 + 1); */



do {
    dado = Math.floor(Math.random() * 6) + 1;
    console.log(`Tu numero es: ${dado}`);    

} while (dado != 6);

if(dado == 6){
    console.log('Felicidades ganaste!!!!!');    
}
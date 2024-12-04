// es una manera mas corta de escribir las funciones. Usan la sintaxis => 


    const multiplicar = (a,b) => a *b;

    function multiplicarDosNumeros(a,b) {
            return a*b
    }

    console.log(multiplicar(5,5));
    


    // sin parametros

    const saludar = () => console.log('Hola mundo!');

    saludar()


    const generarApodo = (nombre) => {
        const longitud = nombre.length;
        return longitud > 5  ? "Tu apodo es: " + nombre.slice(0, 3) + "ín" : "Tu apodo es:  Super" + nombre.toUpperCase()
    }

    const nombre = prompt('¿Cual es tu nombre?')

    alert(generarApodo(nombre))


  
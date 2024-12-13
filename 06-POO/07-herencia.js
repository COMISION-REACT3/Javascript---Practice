/* 
La herencia en programación es un concepto clave de la Programación Orientada a Objetos (POO) que permite crear nuevas clases a partir de otras existentes. Esto permite reutilizar código, extender funcionalidades y organizar mejor los programas.

En JavaScript, la herencia se logra utilizando la palabra clave extends, que indica que una clase está heredando las propiedades y métodos de otra.

La herencia puede ser simple o múltiple, es decir, una clase puede heredar de varias clases base. La clase que hereda se denomina clase hija y la clase base se denomina clase padre.

Ventajas de la herencia
Reutilización de código: No necesitas reescribir el mismo código en múltiples clases.
Extensibilidad: Puedes extender las funcionalidades de las clases existentes.
Organización: Ayuda a estructurar mejor el programa siguiendo jerarquías lógicas.
*/


class Zombie {
    constructor(nombre, salud, velocidad){
      this._nombre = nombre;
      this._salud = salud;
      this._velocidad = velocidad;
      this._estaVivo = true;
    } 
  
    // Método para mostrar el estado del zombie
      estado() {
        console.log(`Nombre: ${this._nombre}`);
        console.log(`Salud: ${this._salud}`);
        console.log(`Velocidad: ${this._velocidad}`);
        console.log(`Estado: ${this._estaVivo ? "Vivo" : "Muerto"}`);
      }  
  }
  
  //clase derivada: ZombieExplosivo
  class ZombieExplosivo extends Zombie{
      constructor(nombre, salud, velocidad, dañoExplosivo){
        super(nombre, salud, velocidad) //llama al constructor de la clase base Zombie,
        this._dañoExplosivo = dañoExplosivo; //Nueva propiedad especifica del zombie explosivo
      }
  
  
    //metodo para detonarlo
    detonar(){
      if(this._estaVivo){
        console.log(`El zombie explosivo ${this._nombre} se ha detonado y ha causado ${this._dañoExplosivo} de daño`)
        this._salud = 0;
        this._estaVivo = false; //muere despues de detonar
      } else {
        console.log("Ya esta muerto y no puede explotar")
      }
    }
  
    //sobreescritura del metodo estado
    estado(){
      super.estado() // llama al metodo estado de la clase Zombie
      console.log(`Daño Explosivo: ${this._dañoExplosivo}`)
    }
  }
  
  
  //Crear instancias
  
  const zombie1 = new Zombie("Zombie1", 100, 5);
  const zombieExplosivo = new ZombieExplosivo("Zombie Explosivo", 200, 10, 50);
  
  //Mostrar estado de los zombies
  console.log("Estado del zombie común:")
  zombie1.estado()
  
  console.log("\nEstado del zombie explosivo:")
  zombieExplosivo.estado()
  
  //Detonar el zombie explosivo
  console.log("\nDetonacion del zombie explosivo:")
  zombieExplosivo.detonar()
  
  //Mostrar estado actualizado
  console.log("\nEstado del zombie explosivo después de la detonacion:")
  zombieExplosivo.estado()
  
  
  
  
  
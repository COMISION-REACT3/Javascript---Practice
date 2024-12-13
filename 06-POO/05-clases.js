class Zombie {
    constructor(nombre, salud, velocidad){
      this._nombre = nombre;
      this._salud = salud;
      this._velocidad = velocidad;
      this._estaVivo = true;
    }
  
    //metodo para atacar
    atacar(objetivo){
      if(this._estaVivo){
        console.log(`El zombie ${this._nombre} ataca a ${objetivo}`)
      } else {
        console.log(`El zombie ${this._nombre} ya esta muerto y no puede atacar a nadie`)
      }
    }
  
    //metodo para recibir daño
    recibirDanio(cantidad){
      if(this._estaVivo){
        console.log(`${this._nombre} recibe ${cantidad} de daño.     Salud restante: ${this._salud -= cantidad}`)
        if(this._salud <= 0){
          this.morir()
        }
      } else {
        console.log(`El zombie ${this._nombre} ya esta muerto`)
      }
    }
  
    //Metodo para morir
    morir(){
      this._estaVivo = false;
      console.log(`El zombie ${this._nombre} ha muerto`)
    }
  
  
    //metodo para mostrar el estado del zombie
    estado(){
      console.log(`Nombre: ${this._nombre}`)
      console.log(`Salud: ${this._salud}`)   
      console.log(`Estado: ${this._estaVivo ? 'Vivo' : 'Muerto'}`)
    }
  }
  
  //Crear nuevos zombies (instanciar nuevos objetos a partir de la clase Zombie)
  
  const zombie1 = new Zombie("Zombie 1", 100, 50);
  const zombie2 = new Zombie("Zombie 2", 300, 150);
  
  //utilizar los metodos de los zombies
  
  zombie1.estado();
  zombie1.atacar(zombie2._nombre);
  zombie2.recibirDanio(50);
  zombie2.estado();
  zombie2.atacar(zombie1._nombre);
  zombie1.recibirDanio(100);
  zombie1.estado();
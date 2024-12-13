class Zombie {
    constructor(nombre, salud, velocidad){
      this._nombre = nombre;
      this._salud = salud;
      this._velocidad = velocidad;
      this._estaVivo = true;
    }
  
    //GETTERS
    get nombre(){
      return this._nombre;
    }
  
    get salud(){
      return this._salud;
    }
  
    get velocidad(){
      return this._velocidad;
    }
  
    get estado(){
      return this._estaVivo;
    }
  
    //SETTERS
    
    set nombre(nuevoNombre){
      if(nuevoNombre.trim().length > 0){
        this._nombre = nuevoNombre;
      } else {
        console.log('El nombre no puede estar vacio')
      }
    }
  
    set salud(nuevaSalud){
      if(nuevaSalud > 0){
        this._salud = nuevaSalud;
      } else {
        console.log('La salud tiene que ser mayor a 0')
      }
    }
  
  
    set velocidad(nuevaVelocidad){
      if(nuevaVelocidad > 0){
        this._velocidad = nuevaVelocidad
      } else {
        console.log('La velocidad no puede ser cero')
      }
    }
  
    set estado(nuevoEstado){
      if(typeof nuevoEstado === 'boolean'){
        this._estaVivo = nuevoEstado;
      } else {
        console.log('El estado tiene que ser un booleando: true o false')
      }
    }
  }
  
  //crear un nuevo zombie
  const zombie1 = new Zombie('Zombie 1', 500, 200);
  
  //acceder a las propiedades con los getters
  console.log(zombie1.nombre)
  console.log(zombie1.salud)
  console.log(zombie1.velocidad)
  console.log(zombie1.estado)
  
  //modificar las propiedades con los setters
  zombie1.nombre = 'Zombie Master';
  zombie1.salud = 1000;
  zombie1.velocidad = 800;
  zombie1.estado = false;
  
  console.log(zombie1)
  
  
  
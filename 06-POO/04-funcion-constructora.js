
function Usuario(name, email, password, phone){
    this.name = name;
    this.email = email;
    this.password = password;
    this.phone = phone;
}


const usuario1 = new Usuario('Eze', 'eze@example', '123456', '1125203244');
const usuario2 = new Usuario('Agustin', 'eze@example', '123456', '1125203244');
const usuario3 = new Usuario('Ivan', 'eze@example', '123456', '1125203244');
const usuario4 = new Usuario('Raul', 'eze@example', '123456', '1125203244');

console.log(Usuario)

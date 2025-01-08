// Verificar y aplicar el tema guardado

const savedTheme = localStorage.getItem('theme');

if(savedTheme){
    document.body.classList.add(savedTheme);
    document.getElementById('theme-select').value = savedTheme
}




// Manejar el formulario de selección de tema
document.getElementById('theme-form').addEventListener('submit', (e) => {
    e.preventDefault(); // Prevenir el envío del formulario

    //obtener el tema seleccionado
    const selectedTheme = document.getElementById('theme-select').value

    //guardar el tema seleccionado en localStorage
    localStorage.setItem('theme', selectedTheme);

    //aplicar el tema seleccionado
    document.body.className = ''; //limpio de todas las clases anteriores
    document.body.classList.add(selectedTheme); //asigna las clases correspondientes al tema seleccionado

    Swal.fire({
        toast:true,
        position: "center",
        icon: "success",
        title: "Your work has been saved",
        showConfirmButton: false,
        timer: 2000,
        timerProgressBar: true,
        background: `${selectedTheme === "dark" ? "#fff" : "#3d3a3a"}`,
        color: `${selectedTheme === "dark" ? "#3d3a3a" : "#fff"}`,
      });
})
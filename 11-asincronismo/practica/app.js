async function fetchPeliculas(){
    const peliculasContainer = document.getElementById('peliculas-container');
    const url = 'https://my-json-server.typicode.com/IsmaelAxel/API_Pelis/pelicula';
    try {
        const response = await fetch(url);
        console.log(response);
        if(!response.ok){
            console.log("Error al cargar las películas");            
        }

        const peliculas = await response.json();
        console.log(peliculas);

        peliculas.forEach((pelicula) =>{
            const col = document.createElement('div');
            col.className = 'col-12 col-md-6 col-lg-3';

            col.innerHTML = `
            <div class="card" h-100">
            <img src="${pelicula.Poster}" class="card-img-top" alt="${pelicula.Title}">
            <div class="card-body d-flex flex-column">
                <h5 class="card-title">${pelicula.Title}</h5>
                <hr class="text-white">
                <p class="card-text">Director: ${pelicula.Director || 'No disponible'}</p>
                <p class="card-text"><small class="text-white">Lanzamiento: ${pelicula.Released || 'No disponible'}</small></p>
                <a href="${pelicula.Trailer}" class="btn btn-danger">Ver más <i class="fa-brands fa-youtube"></i></a>
            </div>
            </div>            
            `;

            peliculasContainer.appendChild(col);
        })       
    } catch (error) {
        peliculasContainer.innerHTML = `
        <div class="alert alert-danger" role="alert">
        Hubo un error al cargar las películas. Por favor, intenta más tarde <i class="fa-solid fa-triangle-exclamation"></i>
        </div>        
        `
        console.log("Error al consumir la API de movies:", error);        
    }
}

fetchPeliculas();
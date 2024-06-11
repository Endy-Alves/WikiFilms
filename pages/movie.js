 // Função para obter detalhes do filme com base no ID
 function getMovieDetails(movieId) {
    const apiKey = 'b077bb54011e9be4ffb2c73cfd60b476';
    const apiUrl = 'https://api.themoviedb.org/3';
    
    fetch(`${apiUrl}/movie/${movieId}?api_key=${apiKey}`)
        .then(response => response.json())
        .then(data => {
            const movieDetails = document.getElementById('movie-details');
            // Renderiza as informações do filme
            movieDetails.innerHTML = ``;
            const image = document.createElement('div')
            const titulo = document.createElement('h2')
            const overview = document.createElement('p')
            const Date = document.createElement('p')
            movieDetails.appendChild(titulo)
            movieDetails.appendChild(image)
            movieDetails.appendChild(Date)
            movieDetails.appendChild(overview)
            image.style.backgroundImage = `url(https://image.tmdb.org/t/p/w500${data.poster_path})`
            image.style.backgroundSize = 'cover';
            titulo.innerHTML = `${data.title}`
            overview.innerHTML = `${data.overview}`
            Date.innerHTML = `${data.release_date}`
        })
        .catch(error => {
            console.error('Erro ao buscar detalhes do filme:', error);
        });
}

// Obtém o ID do filme da consulta na URL
const urlParams = new URLSearchParams(window.location.search);
const movieId = urlParams.get('id');
if (movieId) {
    // Se o ID do filme estiver presente, obtém os detalhes do filme
    getMovieDetails(movieId);
} else {
    console.error('ID do filme não encontrado na URL.');
}
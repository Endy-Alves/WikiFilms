const apiKey = 'b077bb54011e9be4ffb2c73cfd60b476';
const apiUrl = 'https://api.themoviedb.org/3';


// Função para buscar filmes por título
function searchMovies(query) {
    fetch(`${apiUrl}/search/movie?api_key=${apiKey}&query=${query}`)
        .then(response => response.json())
        .then(data => {
            const listFilms = document.getElementById('films');
            listFilms.innerHTML = ''; // Limpa os resultados anteriores
            if (data.results && data.results.length > 0) {
                data.results.forEach(function(films) {
                    const div = document.createElement('div');
                    div.textContent = films.title;
                    listFilms.appendChild(div);
                    listFilms.setAttribute('id', 'listFilms')
                    console.log(films)
                });
            } else {
                listFilms.textContent = 'Nenhum resultado encontrado.';
            }
        })
        .catch(error => {
            console.error('Erro ao buscar filmes:', error);
        });
}

// Adiciona um event listener para o botão
document.getElementById('btn').addEventListener('click', function() {
    var parametro = document.getElementById('searchInput').value;
    searchMovies(parametro);
});




function filmAction(genreId){
    fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=${genreId}`)
    .then(response => response.json())
    .then(data => {
        var divFilmAction = document.getElementById('filmAction')
            data.results.forEach(function(films) {
                console.log(films.title)
        const forFilm = document.createElement('div')
        divFilmAction.appendChild(forFilm)
        forFilm.innerHTML = `${films.title}`
    })
})}

filmAction(28)
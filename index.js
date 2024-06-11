const apiKey = 'b077bb54011e9be4ffb2c73cfd60b476';
const apiUrl = 'https://api.themoviedb.org/3';

let movieCount = 5; // Inicializa o contador de filmes

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
        divFilmAction.innerHTML = ''; // Limpa os resultados anteriores
        // Limita os resultados
        data.results.slice(0, movieCount).forEach(function(films) {
            const forFilm = document.createElement('div')
            const p = document.createElement('p')
            forFilm.appendChild(p)
            forFilm.style.background = `linear-gradient(rgb(0 0 0), rgb(255 102 102 / 0%)), url(https://image.tmdb.org/t/p/w500${films.poster_path})`;
            forFilm.style.backgroundSize = 'cover'; // Para cobrir toda a div
            forFilm.style.color = 'white'
            p.innerHTML = `${films.overview}`
            p.style.color = 'white'
            const title = document.createElement('h2')
            title.innerHTML = `${films.title}`
            title.style.color = 'white'
            title.style.fontSize = '12px'
            forFilm.appendChild(title)
            divFilmAction.appendChild(forFilm)
            console.log(films)
        })
    })
}

// Adiciona um event listener para o botão de mostrar mais
document.getElementById('showMore').addEventListener('click', function() {
    movieCount += 5; // Aumenta o contador de filmes
    filmAction(28); // Atualiza os resultados
});

// Adiciona um event listener para o botão de mostrar menos
document.getElementById('showLess').addEventListener('click', function() {
    movieCount = Math.max(5, movieCount - 5); // Diminui o contador de filmes, mas não menos que 5
    filmAction(28); // Atualiza os resultados
});

filmAction(28)

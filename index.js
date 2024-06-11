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
                    div.setAttribute('data-id', films.id); // Adiciona um identificador único para cada filme
                    div.addEventListener('click', function() {
                        // Redireciona para a página de detalhes do filme quando clicado
                        window.location.href = `./pages/movie.html?id=${films.id}`;
                    });
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

// Função para exibir filmes com base no gênero
function filmAction(genreId, containerId) {
    fetch(`${apiUrl}/discover/movie?api_key=${apiKey}&with_genres=${genreId}`)
        .then(response => response.json())
        .then(data => {
            var container = document.getElementById(containerId);
            container.innerHTML = ''; // Limpa os resultados anteriores
            // Limita os resultados
            data.results.slice(0, movieCount).forEach(function(films) {
                const forFilm = document.createElement('div')
                const p = document.createElement('p')
                forFilm.appendChild(p)
                forFilm.style.background = `linear-gradient(rgb(0 0 0/ 33%), rgb(255 102 102 / 0%)), url(https://image.tmdb.org/t/p/w500${films.poster_path})`;
                forFilm.style.backgroundSize = 'cover'; // Para cobrir toda a div
                forFilm.style.color = 'white'
                p.innerHTML = `${films.overview}`
                p.style.color = 'white'
                const title = document.createElement('h2')
                title.innerHTML = `${films.title}`
                title.style.color = 'white'
                forFilm.appendChild(title)
                container.appendChild(forFilm)
                console.log(films)
                forFilm.setAttribute('data-id', films.id); // Adiciona um identificador único para cada filme
                forFilm.addEventListener('click', function() {
                    // Redireciona para a página de detalhes do filme quando clicado
                    window.location.href = `./pages/movie.html?id=${films.id}`;
                });
            })
        })
        .catch(error => {
            console.error('Erro ao buscar filmes:', error);
        });
}
// Adiciona um event listener para o botão de mostrar mais de Anime
document.getElementById('showMore5').addEventListener('click', function() {
    movieCount += 5; // Aumenta o contador de filmes
    filmAction(16, 'filmAnime'); // Atualiza os resultados
});

// Adiciona um event listener para o botão de mostrar menos de Anime
document.getElementById('showLess5').addEventListener('click', function() {
    movieCount = Math.max(5, movieCount - 5); // Diminui o contador de filmes, mas não menos que 5
    filmAction(16, 'filmAnime'); // Atualiza os resultados
});

filmAction(16, 'filmAnime'); // Exibe inicialmente os filmes de Anime

// Adiciona um event listener para o botão de mostrar mais de Romance
document.getElementById('showMore4').addEventListener('click', function() {
    movieCount += 5; // Aumenta o contador de filmes
    filmAction(53, 'filmSus'); // Atualiza os resultados
});

// Adiciona um event listener para o botão de mostrar menos de Romance
document.getElementById('showLess4').addEventListener('click', function() {
    movieCount = Math.max(5, movieCount - 5); // Diminui o contador de filmes, mas não menos que 5
    filmAction(53, 'filmSus'); // Atualiza os resultados
});

filmAction(53, 'filmSus'); // Exibe inicialmente os filmes de Suspense

// Adiciona um event listener para o botão de mostrar mais de Romance
document.getElementById('showMore3').addEventListener('click', function() {
    movieCount += 5; // Aumenta o contador de filmes
    filmAction(12, 'filmAdventure'); // Atualiza os resultados
});

// Adiciona um event listener para o botão de mostrar menos de Romance
document.getElementById('showLess3').addEventListener('click', function() {
    movieCount = Math.max(5, movieCount - 5); // Diminui o contador de filmes, mas não menos que 5
    filmAction(12, 'filmAdventure'); // Atualiza os resultados
});

filmAction(12, 'filmAdventure'); // Exibe inicialmente os filmes de Aventura

// Adiciona um event listener para o botão de mostrar mais de Romance
document.getElementById('showMore2').addEventListener('click', function() {
    movieCount += 5; // Aumenta o contador de filmes
    filmAction(10749, 'filmRomance'); // Atualiza os resultados
});

// Adiciona um event listener para o botão de mostrar menos de Romance
document.getElementById('showLess2').addEventListener('click', function() {
    movieCount = Math.max(5, movieCount - 5); // Diminui o contador de filmes, mas não menos que 5
    filmAction(10749, 'filmRomance'); // Atualiza os resultados
});

filmAction(10749, 'filmRomance'); // Exibe inicialmente os filmes de Romance

// Exibe filmes de Ação

// Adiciona um event listener para o botão de mostrar mais de Ação
document.getElementById('showMore').addEventListener('click', function() {
    movieCount += 5; // Aumenta o contador de filmes
    filmAction(28, 'filmAction'); // Atualiza os resultados
});

// Adiciona um event listener para o botão de mostrar menos de Ação
document.getElementById('showLess').addEventListener('click', function() {
    movieCount = Math.max(5, movieCount - 5); // Diminui o contador de filmes, mas não menos que 5
    filmAction(28, 'filmAction'); // Atualiza os resultados
});

filmAction(28, 'filmAction'); // Exibe inicialmente os filmes de Ação


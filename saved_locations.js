let watchlist = JSON.parse(localStorage.getItem('watchlist'));

function renderMovies (watchlist) {
    const movieHtmlArray = watchlist.map(function(currentMovie){
        return `<div class="movie col-4">
        <img src="${currentMovie.Poster}"<br/>
        <h2>${currentMovie.Title}</h2>
        <time datetime="\`0001\`">${currentMovie.Year}</time><br>
        <button class="add-button" data-imdbid="${currentMovie.imdbID}">Add Me!</button><br/>
        </div>
        `
    });

    results = document.querySelector("#results");
    results.innerHTML = movieHtmlArray.join('')
};

renderMovies(watchlist)
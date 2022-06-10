// API KEY:8f32460e07msh82e48d9017e28a2p1a1156jsncedaa79245ad



const searchForm = document.querySelector("#search-form");
searchForm.addEventListener('submit', function (event) {
    event.preventDefault();


    const searchBar = document.querySelector('.search-bar')
    const searchString = searchBar.value;
    const urlEncodedSearchString = encodeURIComponent(searchString);

    fetch("https://imdb8.p.rapidapi.com/title/find?q=" + urlEncodedSearchString, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "8f32460e07msh82e48d9017e28a2p1a1156jsncedaa79245ad"
        }
    })
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
            visualMediaData = data
            renderVisualMedia(data.results)
        })
})


function renderVisualMedia(visualMedia) {
    const visualMediaHtmlArray = visualMedia.map(function (currentVisualMedia) {
        const id = currentVisualMedia.id.replace(/\/title\/(tt\d+).*/, "$1")
        if (currentVisualMedia.titleType == "tvSeries") {
            return `
        <div class="col">
        <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <img src="${currentVisualMedia.image?.url || "../pics/poster.jpeg"}" class="card-img-top"/>
        <div class="card-body">  
        <h5 class="card-title">${currentVisualMedia.title}</h5>
            <p><time datetime="\`0001\`">${currentVisualMedia.year}</time><br>
            <div class="type">${currentVisualMedia.titleType}</div></p>
            <a href="/map.html?id=${id}" class="btn btn-secondary">Explore Me!</a><br/>
            </div>
            </div>
            </div>
            `
        } else if (currentVisualMedia.titleType == 'movie') {
            return `
            <div class="col">
            <div class="card shadow-lg p-3 mb-5 bg-body rounded" style="width: 18rem;">
        <img src="${currentVisualMedia.image?.url || "../pics/poster.jpeg"}" class="card-img-top"/>
        <div class="card-body">    
        <h5 class="card-title">${currentVisualMedia.title}</h5>
            <p><time datetime="\`0001\`">${currentVisualMedia.year}</time><br>
            <div class="type">${currentVisualMedia.titleType}</div></p>
            <a href="/map.html?id=${id}" class="btn btn-secondary">Explore Me!</a><br/>
            </div>
            </div>
            </div>
       
            `
        } else {
            console.log(currentVisualMedia)
            return ""
        }
    });


    results = document.querySelector("#results");
    results.innerHTML = visualMediaHtmlArray.join('')
};


function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });
}


function renderLocation(location) {
    const locationHtml = `<div class="location" col-4">
            <img src="${location.image.url}"<br/>
            <h2>${location.title}</h2>
            <time datetime="\`0001\`">${location.year}</time><br>
            <button class="explore-button" data-imdbid="${location.imdbID}">Add Me!</button><br/>
            </div>
            `

    results = document.querySelector("#results");
    results.innerHTML = locationHtml
};

// access title

document.addEventListener('DOMContentLoaded', function (event) {

    // Maybe have a "save destination"????
    document.addEventListener('click', function (event) {
        console.log(event.target)
        if (event.target.classList.contains('explore-button')) {
            let movieID = event.target.dataset.id
            renderMovieToMap(movieID)
        }
    });
});
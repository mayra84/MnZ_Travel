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


// fetch("https://imdb8.p.rapidapi.com/title/find?q=game%20of%20thr", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "imdb8.p.rapidapi.com",
//             "x-rapidapi-key": "750787b786msh3494b73242ba7b4p1baff1jsnca241a92c7a4"
//         }
//     })
//         .then(response => {
//             console.log(response);
//         })
//         .catch(err => {
//             console.error(err);
//         });



function renderVisualMedia(visualMedia) {
    const visualMediaHtmlArray = visualMedia.map(function (currentVisualMedia) {
        const id = currentVisualMedia.id.replace(/\/title\/(tt\d+).*/,"$1")
        if (currentVisualMedia.titleType == "tvSeries") {
        return `<div class="media col-4">
        <img src="${currentVisualMedia.image.url}"<br/>
            <h2>${currentVisualMedia.title}</h2>
            <time datetime="\`0001\`">${currentVisualMedia.year}</time><br>
            <div class="type">${currentVisualMedia.titleType}</div>
            <a href="/map.html?id=${id}" class="explore-button">Explore Me!</a><br/>
            </div>
            `
        } else if (currentVisualMedia.titleType == 'movie') {
            return `<div class="media col-4">
        <img src="${currentVisualMedia.image.url}"<br/>
            <h2>${currentVisualMedia.title}</h2>
            <time datetime="\`0001\`">${currentVisualMedia.year}</time><br>
            <div class="type">${currentVisualMedia.titleType}</div>
            <a href="/map.html?id=${id}" class="explore-button">Explore Me!</a><br/>
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

// const visualMedia = document.querySelector("#house");

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


    document.addEventListener('click', function(event) {
        console.log(event.target)
        if (event.target.classList.contains('explore-button')) {
            let movieID = event.target.dataset.imdbid
            saveToWatchList(movieID)
        }
      });


    // fetch("https://imdb8.p.rapidapi.com/title/get-filming-locations?tconst=tt0944947", {
    //     "method": "GET",
    //     "headers": {
    //         "x-rapidapi-host": "imdb8.p.rapidapi.com",
    //         "x-rapidapi-key": "750787b786msh3494b73242ba7b4p1baff1jsnca241a92c7a4"
    //     }
    // })
    //     .then(response => {

    //         return response.json()
    //     })
    //     .then(function (data) {
    //         console.log(data.locations);
    //         // .base.title
    //         // .locations[20].location
    //         renderLocation(data.base)

    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });

});
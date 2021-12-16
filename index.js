// API KEY:AIzaSyCTyX4izBaLSUMvtZMxEjOCPo_IpDJITRs



const searchForm = document.querySelector("#search-form");
searchForm.addEventListener('submit', function(event) {
    event.preventDefault();

    
    const searchBar = document.querySelector('.search-bar')
    const searchString = searchBar.value;
    const urlEncodedSearchString = encodeURIComponent(searchString);

    fetch("https://imdb8.p.rapidapi.com/title/find?q=" + urlEncodedSearchString)
    .then(function(response) {
        return response.json();
    })
    .then(function(data) {

        visualMediaData = data.Search
        renderVisualMedia(data.Search)
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



function renderVisualMedia (visualMedia) {
    const visualMediaHtmlArray = visualMedia.map(function(currentVisualMedia){
        return `<div class="media col-4">
            <img src="${currentVisualMedia.image}"<br/>
            <h2>${currentVisualMedia.title}</h2>
            <time datetime="\`0001\`">${currentVisualMedia.Year}</time><br>
            <button class="add-button" data-imdbid="${currentVisualMedia.imdbID}">Add Me!</button><br/>
            </div>
            `
        });

        results = document.querySelector("#results");
        results.innerHTML = movieHtmlArray.join('')
};

// const visualMedia = document.querySelector("#house");

function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
      center: { lat: -34.397, lng: 150.644 },
      zoom: 8,
    });
  }





function renderLocation(location) {
    const locationHtml =  `<div class="location" col-4">
            <img src="${location.image.url}"<br/>
            <h2>${location.title}</h2>
            <time datetime="\`0001\`">${location.year}</time><br>
            <button class="add-button" data-imdbid="${location.imdbID}">Add Me!</button><br/>
            </div>
            `

    results = document.querySelector("#results");
    results.innerHTML = locationHtml
};



// access title




document.addEventListener('DOMContentLoaded', function (event) {


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
    //         console.log(data.base);
    //         // .base.title
    //         // .locations[20].location
    //         renderLocation(data.base)

    //     })
    //     .catch(err => {
    //         console.error(err);
    //     });

});
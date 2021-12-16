// API KEY:AIzaSyCTyX4izBaLSUMvtZMxEjOCPo_IpDJITRs








// function renderVisualMedia (visualMedia) {
//     const visualMediaHtmlArray = visualMedia.map(function(currentVisualMedia){
//         return `<div class="media col-4">
//             <img src="${currentVisualMedia.image}"<br/>
//             <h2>${currentVisualMedia.title}</h2>
//             <time datetime="\`0001\`">${currentVisualMedia.Year}</time><br>
//             <button class="add-button" data-imdbid="${currentVisualMedia.imdbID}">Add Me!</button><br/>
//             </div>
//             `
//         });

//         results = document.querySelector("#results");
//         results.innerHTML = movieHtmlArray.join('')
// };

// const visualMedia = document.querySelector("#house");

function renderLocation(location) {
    const locationHtmlArray = location.map(function (currentLocation) {
        return `<div class="location" col-4">
            <img src="${currentLocation.image}"<br/>
            <h2>${currentLocation.title}</h2>
            <time datetime="\`0001\`">${currentLocation.Year}</time><br>
            <button class="add-button" data-imdbid="${currentLocation.imdbID}">Add Me!</button><br/>
            </div>
            `
    });

    results = document.querySelector("#results");
    results.innerHTML = locationHtmlArray.join('')
};



// access title









document.addEventListener('DOMContentLoaded', function (event) {

    //     fetch("https://imdb8.p.rapidapi.com/title/find?q=game%20of%20thr", {
    // 	"method": "GET",
    // 	"headers": {
    // 		"x-rapidapi-host": "imdb8.p.rapidapi.com",
    // 		"x-rapidapi-key": "750787b786msh3494b73242ba7b4p1baff1jsnca241a92c7a4"
    // 	}
    // })
    // .then(response => {
    // 	console.log(response);
    // })
    // .catch(err => {
    // 	console.error(err);
    // });




    fetch("https://imdb8.p.rapidapi.com/title/get-filming-locations?tconst=tt0944947", {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": "750787b786msh3494b73242ba7b4p1baff1jsnca241a92c7a4"
        }
    })
        .then(response => {

            return response.json()
        })
        .then(function (data) {
            console.log(data.base);
            // .base.title
            // .locations[20].location
            renderLocation(data.base)

        })
        .catch(err => {
            console.error(err);
        });

});
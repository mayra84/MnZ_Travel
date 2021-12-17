// API KEY:AIzaSyCTyX4izBaLSUMvtZMxEjOCPo_IpDJITRs


//function for maps, sets viewpoint at "center"
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: -34.397, lng: 150.644 },
        zoom: 8,
    });




    //Set Markers
    function addMarker(location) {
        const marker = new google.maps.Marker({
            position: location,
            map: map
        })
    }

    addMarker({ lat: 37.9922, lng: -1.1207 })
}


//Callback function
geocode();

//Geocode API used here to get latitude and Longitude
function geocode() {
    const location = '22 Main st Boston MA';
    axios.get("https://maps.googleapis.com/maps/api/geocode/json", {
        params: {
            address: location,
            key: 'AIzaSyCTyX4izBaLSUMvtZMxEjOCPo_IpDJITRs'
        }
    })
        .then(function (response) {
            //log response
            console.log(response.data.results);

            const lat = response.data.results[0].geometry.location.lat;
            const lng = response.data.results[0].geometry.location.lng;
            const geometryOutput = `
          <ul class="list-group">
            <li class="list-group-item">${lat}</li>
            <li class="list-group-item">${lng}</li>
          </ul>
          `;



            //Output to App
            document.getElementById("geometry").innerHTML =
                geometryOutput;
        })
        .catch(function (error) {
            console.log(error);
        })
}



// function renderLocation(location) {
//     const locationHtmlArray = location.map(function (currentLocation) {
//         return `<div class="location" col-4">
//             <img src="${currentLocation.image}"<br/>
//             <h2>${currentLocation.title}</h2>
//             <time datetime="\`0001\`">${currentLocation.Year}</time><br>
//             <button class="add-button" data-imdbid="${currentLocation.imdbID}">Add Me!</button><br/>
//             </div>
//             `
//     });

//     results = document.querySelector("#results");
//     results.innerHTML = locationHtmlArray.join('')
// };


// document.addEventListener('DOMContentLoaded', function (event) {


//     fetch("https://imdb8.p.rapidapi.com/title/get-filming-locations?tconst=tt0944947", {
//         "method": "GET",
//         "headers": {
//             "x-rapidapi-host": "imdb8.p.rapidapi.com",
//             "x-rapidapi-key": "750787b786msh3494b73242ba7b4p1baff1jsnca241a92c7a4"
//         }
//     })
//         .then(response => {

//             return response.json()
//         })
//         .then(function (data) {
//             console.log(data.base);
//             // .base.title
//             // .locations[20].location
//             renderLocation(data.base)

//         })
//         .catch(err => {
//             console.error(err);
//         });
// });
// API KEY:AIzaSyCTyX4izBaLSUMvtZMxEjOCPo_IpDJITRs


//function for maps, sets viewpoint at "center"
function initMap() {
    map = new google.maps.Map(document.getElementById("map"), {
        center: { lat: 0, lng: 0 },
        zoom: 1,
    });




    //Set Markers
    function addMarker(location) {
        const marker = new google.maps.Marker({
            position: location,
            map: map
        })

    }
    

    //Callback function

    //Geocode API used here to get latitude and Longitude
    function geocode(location) {
        // const location = '22 Main st Boston MA';
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

                addMarker({ lat: lat, lng: lng })

            })
            .catch(function (error) {
                console.log(error);
            })
    }
    const query = new URLSearchParams(location.search)
    const id = query.get("id")
    // Pass in map.html??
    // getFakeLocations()
        getLocations(id)

        .then(function (data) {
            for (let i = 0; i < data.locations.length; i++) {
                console.log(data.locations[i].location);
                geocode(data.locations[i].location)
                // addMarker(data.locations[i].location)

            }


        })
        .catch(err => {
            console.error(err);
        });




}
function getLocations(id) {
    return fetch(`https://imdb8.p.rapidapi.com/title/get-filming-locations?tconst=${id}`, {
        "method": "GET",
        "headers": {
            "x-rapidapi-host": "imdb8.p.rapidapi.com",
            "x-rapidapi-key": 'd12441956bmshf4bbccccda3f093p160a26jsn3124647e03f2'
        }
    })
        .then(response => {

            return response.json()
        })
}


function getFakeLocations() {
    return Promise.resolve({
        "@type": "imdb.api.title.filminglocations",
        "base": {
            "id": "/title/tt0944947/",
            "image": {
                "height": 1500,
                "id": "/title/tt0944947/images/rm4204167425",
                "url": "https://m.media-amazon.com/images/M/MV5BYTRiNDQwYzAtMzVlZS00NTI5LWJjYjUtMzkwNTUzMWMxZTllXkEyXkFqcGdeQXVyNDIzMzcwNjc@._V1_.jpg",
                "width": 1102
            },
            "runningTimeInMinutes": 57,
            "nextEpisode": "/title/tt1480055/",
            "numberOfEpisodes": 73,
            "seriesEndYear": 2019,
            "seriesStartYear": 2011,
            "title": "Game of Thrones",
            "titleType": "tvSeries",
            "year": 2011
        },
        "id": "/title/tt0944947/",
        "locations": [
            {
                "id": "/title/tt0944947/filminglocations/lc0820830",
                "interestingVotes": {
                    "down": 7,
                    "up": 351
                },
                "location": "Split, Split-Dalmatia County, Croatia"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0820831",
                "interestingVotes": {
                    "down": 6,
                    "up": 204
                },
                "location": "Vrsno, Sibenik, Croatia"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0449596",
                "interestingVotes": {
                    "down": 20,
                    "up": 408
                },
                "location": "Dubrovnik, Croatia"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0449602",
                "interestingVotes": {
                    "down": 7,
                    "up": 183
                },
                "location": "Ouarzazate, Morocco"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0449600",
                "interestingVotes": {
                    "down": 11,
                    "up": 229
                },
                "location": "Marrakech, Morocco"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0927887",
                "interestingVotes": {
                    "down": 3,
                    "up": 102
                },
                "location": "Klis Fortress, Klis, Croatia"
            },
            {
                "attributes": [
                    "studio"
                ],
                "extras": [
                    "CLA Studios, Ouarzazate, Morocco"
                ],
                "id": "/title/tt0944947/filminglocations/lc0449590",
                "interestingVotes": {
                    "down": 3,
                    "up": 100
                },
                "location": "Atlas Corporation Studios, Ouarzazate, Morocco"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0449598",
                "interestingVotes": {
                    "down": 3,
                    "up": 98
                },
                "location": "Harland and Wolff Paint Hall, Titanic-Quarter, Belfast, County Antrim, Northern Ireland, UK"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0449605",
                "interestingVotes": {
                    "down": 5,
                    "up": 123
                },
                "location": "Valletta, Malta"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0622867",
                "interestingVotes": {
                    "down": 10,
                    "up": 190
                },
                "location": "Iceland"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0449601",
                "interestingVotes": {
                    "down": 5,
                    "up": 117
                },
                "location": "Mdina, Malta"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0449599",
                "interestingVotes": {
                    "down": 6,
                    "up": 126
                },
                "location": "Magheramorne Quarry, Larne, County Antrim, Northern Ireland, UK"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0889669",
                "interestingVotes": {
                    "down": 4,
                    "up": 98
                },
                "location": "Seville, Andalucia, Spain"
            },
            {
                "extras": [
                    "Winterfell"
                ],
                "id": "/title/tt0944947/filminglocations/lc0449594",
                "interestingVotes": {
                    "down": 5,
                    "up": 111
                },
                "location": "Castle Ward, Strangford, County Down, Northern Ireland, UK"
            },
            {
                "extras": [
                    "Water Gardens of Dorne"
                ],
                "id": "/title/tt0944947/filminglocations/lc0985383",
                "interestingVotes": {
                    "down": 1,
                    "up": 50
                },
                "location": "Real Alcázar, Seville, Andalucia, Spain"
            },
            {
                "extras": [
                    "City of Braavos"
                ],
                "id": "/title/tt0944947/filminglocations/lc1232932",
                "interestingVotes": {
                    "up": 32
                },
                "location": "Gerona, Catalonia, Spain"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0449595",
                "interestingVotes": {
                    "down": 9,
                    "up": 130
                },
                "location": "Doune Castle, Doune, Stirling, Scotland, UK"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0449592",
                "interestingVotes": {
                    "down": 5,
                    "up": 87
                },
                "location": "Belfast, County Antrim, Northern Ireland, UK"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0449597",
                "interestingVotes": {
                    "down": 5,
                    "up": 86
                },
                "location": "Dwejra, Gozo Island, Malta"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0449603",
                "interestingVotes": {
                    "down": 6,
                    "up": 92
                },
                "location": "Shane's Castle, County Antrim, Northern Ireland, UK"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0449604",
                "interestingVotes": {
                    "down": 6,
                    "up": 92
                },
                "location": "Tollymore Forest Park, Bryansford, County Down, Northern Ireland, UK"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0449591",
                "interestingVotes": {
                    "down": 5,
                    "up": 77
                },
                "location": "Ballymoney, County Antrim, Northern Ireland, UK"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0449593",
                "interestingVotes": {
                    "down": 5,
                    "up": 72
                },
                "location": "Carncastle, County Antrim, Northern Ireland, UK"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0927885",
                "interestingVotes": {
                    "down": 1,
                    "up": 34
                },
                "location": "Volcano, Skaftafell National Park, Iceland"
            },
            {
                "extras": [
                    "ramparts of Astapor"
                ],
                "id": "/title/tt0944947/filminglocations/lc0927888",
                "interestingVotes": {
                    "down": 3,
                    "up": 51
                },
                "location": "Ramparts, Essaouira, Morocco"
            },
            {
                "extras": [
                    "Tower of Joy"
                ],
                "id": "/title/tt0944947/filminglocations/lc1232931",
                "interestingVotes": {
                    "up": 21
                },
                "location": "Castle of Zafra, Guadalajara, Castilla-La Mancha, Spain"
            },
            {
                "extras": [
                    "Vaes Dothrak"
                ],
                "id": "/title/tt0944947/filminglocations/lc1240268",
                "interestingVotes": {
                    "up": 21
                },
                "location": "El Chorrillo, Pechina, Almeria, Andalucia, Spain"
            },
            {
                "extras": [
                    "Peak of Meereen"
                ],
                "id": "/title/tt0944947/filminglocations/lc1240269",
                "interestingVotes": {
                    "up": 20
                },
                "location": "Tower of Mesa Roldan, Carboneras, Almeria, Spain"
            },
            {
                "attributes": [
                    "exterior"
                ],
                "extras": [
                    "Outskirts of Vaes Dothrak exterior scenes"
                ],
                "id": "/title/tt0944947/filminglocations/lc1240267",
                "interestingVotes": {
                    "up": 19
                },
                "location": "Sierra de la Alhamilla, Almeria, Andalucia, Spain"
            },
            {
                "attributes": [
                    "exterior"
                ],
                "extras": [
                    "Dragonstone exterior scenes"
                ],
                "id": "/title/tt0944947/filminglocations/lc1425030",
                "interestingVotes": {
                    "up": 18
                },
                "location": "San Juan de Gaztelugatxe, Bermeo, Vizcaya, País Vasco, Spain"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0927884",
                "interestingVotes": {
                    "down": 3,
                    "up": 42
                },
                "location": "Svínafellsjökull Glacier, Iceland"
            },
            {
                "extras": [
                    "Long Bridge of Volantis"
                ],
                "id": "/title/tt0944947/filminglocations/lc1002349",
                "interestingVotes": {
                    "down": 2,
                    "up": 34
                },
                "location": "Cordoba, Andalucía, Spain"
            },
            {
                "extras": [
                    "Casterly Rock"
                ],
                "id": "/title/tt0944947/filminglocations/lc1425033",
                "interestingVotes": {
                    "up": 17
                },
                "location": "Trujillo, Cáceres, Extremadura, Spain"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc1425034",
                "interestingVotes": {
                    "up": 15
                },
                "location": "Cáceres, Cáceres, Extremadura, Spain"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0927886",
                "interestingVotes": {
                    "down": 3,
                    "up": 35
                },
                "location": "Giant's Causeway, County Antrim, Northern Ireland, UK"
            },
            {
                "extras": [
                    "Fighting pit of Meereen"
                ],
                "id": "/title/tt0944947/filminglocations/lc0985384",
                "interestingVotes": {
                    "down": 3,
                    "up": 34
                },
                "location": "Osuna, Sevilla, Andalucía, Spain"
            },
            {
                "extras": [
                    "location"
                ],
                "id": "/title/tt0944947/filminglocations/lc1000718",
                "interestingVotes": {
                    "down": 2,
                    "up": 28
                },
                "location": "Canet de Mar, Barcelona, Catalonia, Spain"
            },
            {
                "attributes": [
                    "exterior"
                ],
                "extras": [
                    "Dragonstone beach exterior scenes"
                ],
                "id": "/title/tt0944947/filminglocations/lc1425032",
                "interestingVotes": {
                    "up": 14
                },
                "location": "Zumaia, Guipúzcoa, País Vasco, Spain"
            },
            {
                "attributes": [
                    "exterior"
                ],
                "extras": [
                    "Dragonstone beach exterior scenes"
                ],
                "id": "/title/tt0944947/filminglocations/lc1425031",
                "interestingVotes": {
                    "up": 13
                },
                "location": "Barrika, Vizcaya, País Vasco, Spain"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc1425035",
                "interestingVotes": {
                    "up": 13
                },
                "location": "Malpartida de Cáceres, Cáceres, Extremadura, Spain"
            },
            {
                "extras": [
                    "Frozen lake beyond the wall scenes"
                ],
                "id": "/title/tt0944947/filminglocations/lc1440798",
                "interestingVotes": {
                    "up": 13
                },
                "location": "Wolf Hill Quarry, Belfast, County Antrim, Northern Ireland, UK"
            },
            {
                "extras": [
                    "Dragonpit summit"
                ],
                "id": "/title/tt0944947/filminglocations/lc1440801",
                "interestingVotes": {
                    "up": 12
                },
                "location": "Itálica, Santiponce, Sevilla, Andalucía, Spain"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc0845726",
                "interestingVotes": {
                    "down": 18,
                    "up": 90
                },
                "location": "Los Angeles, California, USA"
            },
            {
                "extras": [
                    "Underground storage with skeletons of dragons in King's Landing"
                ],
                "id": "/title/tt0944947/filminglocations/lc1440799",
                "interestingVotes": {
                    "down": 1,
                    "up": 13
                },
                "location": "Reales Atarazanas de Sevilla, Sevilla, Sevilla, Andalucía, Spain"
            },
            {
                "extras": [
                    "Interior castle"
                ],
                "id": "/title/tt0944947/filminglocations/lc1440800",
                "interestingVotes": {
                    "down": 1,
                    "up": 11
                },
                "location": "Almodóvar del Río, Córdoba, Andalucía, Spain"
            },
            {
                "id": "/title/tt0944947/filminglocations/lc1455576",
                "interestingVotes": {
                    "down": 1,
                    "up": 11
                },
                "location": "Kastilac Fort, Kastel Gomilica, Kastela, Croatia"
            },
            {
                "extras": [
                    "House Martell, Water gardens of Dorne"
                ],
                "id": "/title/tt0944947/filminglocations/lc1863779",
                "interestingVotes": {
                    "up": 4
                },
                "location": "La Alcazaba, Almería, Almería, Andalucia, Spain"
            },
            {
                "extras": [
                    "Daenerys brings Jorah Mormont back together after the rescue of Vaes Dothrak"
                ],
                "id": "/title/tt0944947/filminglocations/lc1998246",
                "interestingVotes": {
                    "up": 4
                },
                "location": "Sierra de Caldereros, Guadalajara, Castilla-La Mancha, Spain"
            },
            {
                "extras": [
                    "Season 2 beach scenes"
                ],
                "id": "/title/tt0944947/filminglocations/lc2201016",
                "interestingVotes": {
                    "down": 1
                },
                "location": "Downhill Strand, Ireland, UK"
            },
            {
                "extras": [
                    "Season 5 Beech landing, dune sword fights + Sand sisters & scorpion scenes"
                ],
                "id": "/title/tt0944947/filminglocations/lc2201017",
                "interestingVotes": {
                    "down": 2
                },
                "location": "Portstewart Strand, Ireland, UK"
            }
        ]
    })
}





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
            console.log(data.locations);
            // .base.title
            // .locations[20].location
            renderLocation(data.base)

        })
        .catch(err => {
            console.error(err);
        });






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

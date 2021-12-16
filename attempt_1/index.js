// API KEY:AIzaSyCTyX4izBaLSUMvtZMxEjOCPo_IpDJITRs

// function initMap(){
    
//     const options = {
//         zoom: 8,
//         center: {lat: 0, lng: 0}
//     }
//     const map = new google.maps.Map(document.getElementById('map'), options);
    
//     const marker = new google.maps.Marker({
//         position:{lat:42,lng:-70},
//         map:map
//     })
// }


function initMap() {
  map = new google.maps.Map(document.getElementById("map"), {
    center: { lat: -34.397, lng: 150.644 },
    zoom: 8,
  });
}

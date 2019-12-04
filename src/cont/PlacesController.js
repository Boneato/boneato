//import GooglePlacesSuggest from "react-google-places-suggest";

// uses give string search and returns relevant locations
// if locations are outside of Seattle area, return an empty list
export default function validateLocation(address) {
    codeAddress(address);
}

function codeAddress(address) {
    console.log("the codeAddress has been called!");
    var address = address;
    geocoder.geocode( { 'address': address}, function(results, status) {
      if (status == 'OK') {
        // map.setCenter(results[0].geometry.location);
        // var marker = new google.maps.Marker({
        //     map: map,
        //     position: results[0].geometry.location
        // });
        console.log(results[0].geometry.location);
      } else {
        alert('Geocode was not successful for the following reason: ' + status);
      }
    });
  }
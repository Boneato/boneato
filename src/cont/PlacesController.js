import React, {Component} from 'react';
/* global google */

// uses give string search and returns relevant locations
// if locations are outside of Seattle area, return an empty list
export default function validateLocation(address) {
    //codeAddress(address);
}

export class GoogleSearch extends Component {

  constructor(props) {
    super(props);
    this.autocompleteInput = React.createRef();
    this.autocomplete = null;
    this.handlePlaceChanged = this.handlePlaceChanged.bind(this);
  }

  componentDidMount() {
    var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(47.720255, -122.402083),
        new google.maps.LatLng(47.589166, -122.286779)
    );
    this.autocomplete = new google.maps.places.Autocomplete(this.autocompleteInput.current,
        {
            bounds: defaultBounds,
            types: ['establishments'],
            strictBounds: true
        });
        console.log("googleplacesmounted");
    this.autocomplete.addListener('place_changed', this.handlePlaceChanged);
  }

  handlePlaceChanged(){
    const place = this.autocomplete.getPlace();
    this.props.onPlaceLoaded(place);
  }

  render() {
    return (
        <input ref={this.autocompleteInput}  id="autocomplete" placeholder="Enter your address..."
         type="text"></input>
    );
  }
}

        // Initialize Google Autocomplete 
        /*global google*/

// function codeAddress(address) {
//     console.log("the codeAddress has been called!");
//     var address = address;
//     geocoder.geocode( { 'address': address}, function(results, status) {
//       if (status == 'OK') {
//         // map.setCenter(results[0].geometry.location);
//         // var marker = new google.maps.Marker({
//         //     map: map,
//         //     position: results[0].geometry.location
//         // });
//         console.log(results[0].geometry.location);
//       } else {
//         alert('Geocode was not successful for the following reason: ' + status);
//       }
//     });
//   }
  

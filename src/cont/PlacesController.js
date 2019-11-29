import useScript from './useScript';
//import GooglePlacesSuggest from "react-google-places-suggest";
import React from 'react';

// uses give string search and returns relevant locations
// if locations are outside of Seattle area, return an empty list
export function AutoComplete(props) {
    useScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBc3Fp0o53RverdEZuHI4wSG4gmqDlCTTw&callback=initMap");
    useScript("https://maps.googleapis.com/maps/api/js?key=AIzaSyBc3Fp0o53RverdEZuHI4wSG4gmqDlCTTw&libraries=places");
    loaded.current = true;
    var defaultBounds = new google.maps.LatLngBounds(
        new google.maps.LatLng(47.720255, -122.402083),
        new google.maps.LatLng(47.589166, -122.286779)
    );
    var input = (
        <input type="text" placeholder="Store name or address..."/>
    )
    var options = {
        bounds: defaultBounds,
        types: ['establishments'],
        strictBounds: true
    };
    var autocomplete = new google.maps.places.Autocomplete(input, options);
    return input;
}
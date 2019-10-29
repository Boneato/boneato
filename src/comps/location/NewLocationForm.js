import React, { Component } from 'react';
import Modal from '../modules/Modal';
import PlacesController from '../../cont/PlacesController';

export class NewLocationForm extends Component {
    constructor(props) {

    }

    // loads PlacesController to communicate with Google Places API
    componentDidMount() {

    }

    
    // create new LocationModel from given location data upon form submit.
    // Stores LocationModel into Firestore for admin approval.
    // When location form is submitted, render Modal to indicate submittal is approved.
    newLocation = (newLocation) => {

    }
    // if PlacesController successfully loads the Google Places API,
    // render form that takes in user input to be submitted
    // through the PlacesController.
    // If PlacesController returns empty list, disallow submittal of form.
    render() {
        
    }
}
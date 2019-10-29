import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LocationList from './modules/LocationsList';
import LocationsController from '../cont/LocationsController';
import Modal from './modules/Modal';
import firebase from 'firebase';
import NewLocationForm from './location/NewLocationForm';
require('firebase/firestore');

// renders the SpecingPage for a specific ingredient
export class SpecingPage extends Component {
    // takes in valid ingredientID, boolean indicating user is signed in
    constructor(props) {

    }

    // take in valid ingredientID, query firebase for IngredientModel
    // run LocationsController to capture list of relevant LocationModel(s)
    // store dictionary of LocationModel(s) and IngredientModel into state
    oneItemController = (ingredientID) => {

    }

    // run oneItemController
    componentDidMount() {

    }

    // render LocationList with LocationModel(s) and IngredientModel
    // if user not signed, prevent interaction with NewLocationForm component.
    render() {

    }
}
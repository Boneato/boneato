import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LocationList from './modules/LocationsList';
import LocationsController from '../cont/LocationsController';
import firebase from 'firebase';
require('firebase/firestore');

// renders the SpecingPage for a specific ingredient
export class SpecingPage extends Component {
    // takes in valid ingredientID
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
    render() {

    }
}
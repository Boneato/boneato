import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LocationList from './modules/LocationsList';
import LocationsController from '../cont/LocationsController';
import firebase from 'firebase';
require('firebase/firestore');

export class SpecingPage extends Component {
    // takes in ingredientID
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
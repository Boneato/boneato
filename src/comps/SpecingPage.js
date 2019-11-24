import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LocationsList from './modules/LocationsList';
import LocationsController from '../cont/LocationsController';
import EmbeddedMap from './modules/EmbeddedMap';
import Modal from './modules/Modal';
import firebase from 'firebase';
import NewLocationForm from './location/NewLocationForm';
//import test from '../index';
require('firebase/firestore');

// renders the SpecingPage for a specific ingredient
export default class SpecingPage extends Component {
    // takes in valid ingredientID, boolean indicating user is signed in
    constructor(props) {
        super(props);
        this.state={
            ingredientID: null,
            ingredientName:'',
            locationIDList: [],
        };
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
        let searchRes = null, i=null, output=null, output2;

        if(this.state.locationIDList.length==0){
            searchRes = <p>Phooey. There are no known locations yet.</p>;
        }else{
            searchRes = <LocationsList locationIDList={this.state.locationIDList} ingredientID={this.state.ingredientID}/>
        }

        output2 = 123

        
        return(
            <body>
                <div>
                    <p>INGREDIENT</p>
                </div>
                <div>
                    <h1>{this.state.ingredientName}</h1>
                </div>
                <div>
                    <p>
                    Know where to buy this?
                    <NavLink to="/NewLocationForm">Report a new location.</NavLink>
                    </p>
                </div>
                    <div>
                        {searchRes}
                        <EmbeddedMap />
                    </div>
                    <p>{output}</p>
                    <p>{output2}</p>
            </body>
        );
    }
}
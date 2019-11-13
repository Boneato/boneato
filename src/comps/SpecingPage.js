import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LocationList from './modules/LocationsList';
import LocationsController from '../cont/LocationsController';
import EmbeddedMap from './modules/EmbeddedMap';
import Modal from './modules/Modal';
import firebase from 'firebase';
import NewLocationForm from './location/NewLocationForm';
require('firebase/firestore');

// renders the SpecingPage for a specific ingredient
export class SpecingPage extends Component {
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
        let searchRes = null, i=null;

        if(this.state.locationIDList.length==0){
            searchRes = <p>Phooey. There are no known locations yet.</p>;
        }else{
            for(i in this.state.locationIDList){
                searchRes += <div>
                    // It shall pass a dictionary of locationID along with other variables.
                    <LocationList ingredientID={this.state.ingredientID} locationID={this.state.locationIDList[i]}/>
                    </div>
            }
        }

        return(
            <body>
                <div>
                    <p>INGREDIENT</p>
                </div>
                <div>
                    <h1>{this.state.ingredientName}</h1>
                </div>
                <div>
                    <span>
                        <p>Know where to buy this?</p>
                        <link href="/NewLocationForm" onChange={defaultStatus}>Report a new location.</link>
                    </span>
                </div>
                <div>
                    <span>
                        {searchRes}
                        <EmbeddedMap/>
                    </span>
                </div>
            </body>
        );
    }
}
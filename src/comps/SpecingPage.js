import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import LocationsList from './modules/LocationsList';
import LocationsController from '../cont/LocationsController';
import EmbeddedMap from './modules/EmbeddedMap';
import Modal from './modules/Modal';
import firebase from 'firebase';
import NewLocationForm from './location/NewLocationForm';
import Grid from '@material-ui/core/Grid';
require('firebase/firestore');

// renders the SpecingPage for a specific ingredient
export default class SpecingPage extends Component {
    // takes in valid ingredientID, boolean indicating user is signed in
    constructor(props) {
        super(props);
        this.state = {
            ingredientID: null,
            ingredientName: '',
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
        let searchRes = null, i = null;

        if (this.state.locationIDList.length == 0) {
            searchRes = <div className="large-italic">Phooey. There are no known locations yet.</div>;
        } else {
            searchRes = <LocationsList locationIDList={this.state.locationIDList} ingredientID={this.state.ingredientID} />
        }


        return (
            <div>
                <Grid container direction="row" justify="center" spacing={3}>
                    
                    <Grid item xs={10} xl={9}>


                        <div className="spec-ingredient-label">
                            Ingredient
                        </div>
                        <div className="spec-ingredient-title">
                            {this.state.ingredientName}
                        </div>
                        <div className="spec-ingredient-subtext">
                            <span>Know where to buy this? </span>
                            <NavLink to="/NewLocationForm">Report a new location.</NavLink>
                        </div>

                        <Grid container spacing={8} justify="flex-start">
                            <Grid item xs={12} md={6}>
                                <div className="locations-container" />{searchRes}
                            </Grid>

                            <Grid item xs={12} md={6}>
                                <div className="map-container">
                                    <EmbeddedMap />
                                </div>

                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>
            </div>
        );
    }
}
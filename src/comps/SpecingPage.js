import React, { Component, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LocationsList from './modules/LocationsList';
import LocationsController from '../cont/LocationsController';
import EmbeddedMap from './modules/EmbeddedMap';
import Modal from './modules/Modal';
import firebase from 'firebase';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import { db } from '../firestore';
import { fbind } from 'q';
require('firebase/firestore');

// renders the SpecingPage for a specific ingredient
export default class SpecingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // below ID is for testing purposes
            ingredientID : "V5MFG9iQMnhIkRcs4PDV",  //will eventually be props.ingredientID,
            isEmpty : true,
            ingredientName : ""
        }
    }

    // updates ingredient name 
    updateIngredName = () => {
        db.firestore().collection("ingredients").doc(this.state.ingredientID).onSnapshot(function (doc) {
            this.setState({ingredientName : doc.data().name})
        }.bind(this))
    }
    
    // sees if there are any known locations for that ingredient
    checkLocations = () => {
        var locationQuery = db.firestore().collection("ingredients").doc(this.state.ingredientID)
        .collection("locations").get();
        locationQuery.then(function (querySnapshot) {
            console.log(querySnapshot.empty)
            this.setState({
                isEmpty : querySnapshot.empty
            })
        }.bind(this))
    }

    componentDidMount(){
        this.updateIngredName();
        this.checkLocations();
    }


    render() {

        let searchRes = null, i = null;

        if (this.state.isEmpty) { 
            searchRes = <div className="large-italic">Phooey. There are no known locations yet.</div>;
        } else {
            searchRes = <LocationsList ingredientID={this.state.ingredientID} />
        }

        return (
            <div className="content-container">
                <Grid container direction="row" justify="center" spacing={3}>

                    <Grid item xs={12}>


                        <div className="spec-ingredient-label">
                            Ingredient
                        </div>
                        <div className="spec-ingredient-title">
                            {this.state.ingredientName}
                        </div>
                        <div className="spec-ingredient-subtext">
                            <span>Know where to buy this? </span>
                            <Tab label="Report a new location." href="location/NewLocationForm" />
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
        )
    }
}
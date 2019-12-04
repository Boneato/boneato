import React, { Component, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LocationsList from './modules/LocationsList';
import LocationsController from '../cont/LocationsController';
import EmbeddedMap from './modules/EmbeddedMap';
import Modal from './modules/Modal';
import firebase from 'firebase';
import Grid from '@material-ui/core/Grid';
import { db } from '../firestore';
import { fbind } from 'q';
import {NewLocationModal} from '../comps/modules/Modal';
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

        this.updatefunction = this.checkLocations.bind(this);
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

        // if (!loggedIn(this.locationInfo.userID)) {
            var cannotVote = <div className="cannot-vote-alert"> Please <a href="../LoginPage">sign in with Google</a> to share where you found this ingredient.</div>;
        //}

        return (
            <div className="content-container">
                <Grid container direction="row" justify="center" spacing={3}>

                    <Grid item xs={12}>
                        {cannotVote}
                        <div className="spec-ingredient-label">
                            Ingredient
                        </div>
                        <div className="spec-ingredient-title">
                            {this.state.ingredientName}
                        </div>
                        <div className="spec-ingredient-subtext">
                            <span>Know where to buy this? <a href='NewLocationModal'>Report a new location</a>.</span>
                        </div>

                        <Grid container spacing={8} justify="flex-start">
                            <Grid item xs={12} md={7}>
                                <div className="locations-container" />{searchRes}
                            </Grid>

                            <Grid item xs={12} md={5}>
                                <div className="map-container">
                                    <EmbeddedMap locationIDList={this.state.locationIDList}/>
                                </div>

                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>
            </div>
        )
    }
}
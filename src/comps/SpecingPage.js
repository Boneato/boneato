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
// import signedIn from '../cont/LoginController';
import LoginController from '../cont/LoginController';
import {NewLocationModal} from '../comps/modules/Modal';
require('firebase/firestore');

// renders the SpecingPage for a specific ingredient
export default class SpecingPage extends Component {
    constructor(props) {
        super(props);
        console.log(props)
        this.state = {
            ingredientID : this.props.location.state.ingredientID,
            ingredientName : this.props.location.state.ingredientName,
            isEmpty : true,
            modalOpen: false
        }
        this.updatefunction = this.checkLocations.bind(this);
    }
    
    //updates ingredient name 
    // updateIngredName = () => {
    //     db.firestore().collection("ingredients").doc(this.state.ingredientID).onSnapshot(function (doc) {
    //         this.setState({ingredientName : doc.data().name})
    //     }.bind(this))
    // }
    
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

    handleLoc = () => {
        this.setState({modalOpen : true});
    }

    handleClose = () => {
        this.setState({modalOpen : false});
    }

    // TODO: update location list when new location is submitted
    handleMap = () => {
    }

    componentDidMount(){
        this.checkLocations();
    }

    componentDidUpdate() {

    }
    render() {

        let searchRes = null, i = null;
        let cannotVote = null;
        let suggestLoc = null;
        if (this.state.isEmpty) { 
            searchRes = <div className="large-italic">Phooey. There are no known locations yet.</div>;
        } else {
            searchRes = <LocationsList signedIn={this.props.signedIn} ingredientID={this.state.ingredientID} />
        }

        console.log(this.props.signedIn)
        if (!this.props.signedIn) {
            cannotVote = <div className="cannot-vote-alert"> Please <a href="../LoginPage">sign in with Google</a> to share where you found this ingredient.</div>;
        } else {
            suggestLoc = (
                <span>Know where to buy this? <span id="location-report" onClick={this.handleLoc}>Report a new location</span>.</span>
            );
        }
        
        return (
            <div className="content-container">
                <NewLocationModal open={this.state.modalOpen} onClose={this.handleClose} 
                user={this.props.signedIn} ingredName={this.state.ingredientName} mapUpdated={this.handleMap}/>
                <Grid container direction="row" justify="center" spacing={3} >
                    <Grid item xs={12} >
                        {cannotVote}
                        <div className="spec-ingredient-label">
                            Ingredient
                        </div>
                        <div className="spec-ingredient-title">
                            {this.state.ingredientName}
                        </div>
                        <div className="spec-ingredient-subtext">
                            {suggestLoc}
                        </div>

                        <Grid container spacing={8} justify="flex-start" id="special-snowflake-grid">
                            <Grid item xs={12} md={7} id="spec-ingredient-grid-block">
                                <div className="locations-container" />{searchRes}
                            </Grid>

                            <Grid item xs={12} md={5 } >
                                <div className="map-container">
                                    {this.state.modalOpen ? <p></p> : 
                                    <EmbeddedMap ingredientID={this.state.ingredientID}/>
                                    }
                                </div>

                            </Grid>

                        </Grid>

                    </Grid>

                </Grid>
            </div>
        )
    }
}
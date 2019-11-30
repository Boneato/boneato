import React, { Component, useState } from 'react';
import { NavLink } from 'react-router-dom';
import LocationsList from './modules/LocationsList';
import LocationsController from '../cont/LocationsController';
import EmbeddedMap from './modules/EmbeddedMap';
import Modal from './modules/Modal';
import firebase from 'firebase';
import NewLocationForm from './location/NewLocationForm';
import Tab from '@material-ui/core/Tab';
import Grid from '@material-ui/core/Grid';
import {getNamebyIngredientID} from '../firestore';
import {getLocasbyIngredientID} from '../firestore';
import {db} from '../firestore';
require('firebase/firestore');

// renders the SpecingPage for a specific ingredient
export default function SpecingPage(props){
    let ingredientID = props.ingredientID;
    let locationIDList = [];
    let [currentLocationID, setLoca] = useState([]);
    let [ingredientName, setIngred] = useState("");
    //Below is just for testing purpose
    ingredientID = "V5MFG9iQMnhIkRcs4PDV";

    //get ingredient name and locationIDLists
    db.firestore().collection("ingredients").doc(ingredientID).onSnapshot(function(doc) {
        setIngred(doc.data().name);
    })


    // render LocationList with LocationModel(s) and IngredientModel
    // if user not signed, prevent interaction with NewLocationForm component.
    let searchRes = null, i = null;

    if (locationIDList.length == 0) {
        searchRes = <div className="large-italic">Phooey. There are no known locations yet.</div>;
    } else {
        searchRes = <LocationsList locationIDList={locationIDList} ingredientID={ingredientID} />
    }


    return (
         <div className="content-container">
            <Grid container direction="row" justify="center" spacing={3}>
                    
                <Grid item xs={12}>


                    <div className="spec-ingredient-label">
                        Ingredient
                    </div>
                    <div className="spec-ingredient-title">
                        {ingredientName}
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
    );
}
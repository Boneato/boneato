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
import { db } from '../firestore';
import { fbind } from 'q';
require('firebase/firestore');

// renders the SpecingPage for a specific ingredient
export default class SpecingPage extends Component {

    constructor(props) {
        super(props);
        this.state = {
            // below ID is for testing purposes
            ingredientID: "V5MFG9iQMnhIkRcs4PDV",  //props.ingredientID,
            //let locationIDList = props.locationIDList;
            test: "",
            j: 0,
            // let [locationIDList, setTheArray] = useState([]);
            // let [ingredientName, setIngred] = useState("");
            // let [locationID, setLoca] = useState("");
            locationIDList: [],
            ingredientName: "",
            locationID: ""
        }
    }

    updateIngredName = () => {
        db.collection("ingredients").doc(this.ingredientID).onSnapshot(function (doc) {
            this.setState({ingredientName : doc.data().name})
        })
    }

    // this.setState({locationID : doc.id})

    functionname = () => {
        var locationQuery = db.firestore().collection("ingredients").doc(this.ingredientID).collection("locations").get();

        locationQuery.then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                //console.log(doc.id, " => ", doc.data());
                this.setState({
                    locationID : doc.id,
                    locationIDList: this.state.locationIDList.push(doc.id)
                });
            })
        })
    }

    render() {

        // //get ingredient name and locationIDLists - works
        // db.firestore().collection("ingredients").doc(this.ingredientID).onSnapshot(function (doc) {
        //     this.setIngred(doc.data().name);
        // });

        // GET THE LOCATIONIDLIST - not working
        // var locationQuery = db.firestore().collection("ingredients").doc(this.ingredientID).collection("locations").get();

        // locationQuery.then(function (querySnapshot) {
        //     querySnapshot.forEach(function (doc) {
        //         //console.log(doc.id, " => ", doc.data());
        //         this.setLoca(doc.id);
        //         this.locationIDList.push(doc.id);
        //     });
        // });

        // console.log(this.locationID)
        // console.log(this.locationIdList)


        // render LocationList with LocationModel(s) and IngredientModel
        // if user not signed, prevent interaction with NewLocationForm component.
        let searchRes = null, i = null;

        if (this.state.locationIDList.length == 0) {
            searchRes = <div className="large-italic">Phooey. There are no known locations yet.</div>;
        } else {
            searchRes = <LocationsList locationIDList={this.locationIDList} ingredientID={this.ingredientID} />
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
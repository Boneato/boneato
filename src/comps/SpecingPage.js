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
        // this.updateIngredName = this.updateIngredName.bind(this);
        // this.updateLocations = this.updateLocations.bind(this);
    }

    updateIngredName = () => {
        db.firestore().collection("ingredients").doc(this.state.ingredientID).onSnapshot(function (doc) {
            this.setState({ingredientName : doc.data().name})
        }.bind(this))
    }

    // this.setState({locationID : doc.id})

    updateLocations = () => {
        var locationQuery = db.firestore().collection("ingredients").doc(this.state.ingredientID).collection("locations").get();

        locationQuery.then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.id, " => ", doc.data());
                let tempList = this.state.locationIDList;
                tempList.push(doc.id);
                this.setState({
                    locationID : doc.id,
                    locationIDList: tempList
                })
            }.bind(this))
        }.bind(this))
    }

    componentDidMount(){
        console.log(this.state.locationIDList);
        this.updateIngredName();
        this.updateLocations();
        console.log(this.state.locationIDList);
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
        console.log("locationIDlist type is ")
        console.log(typeof this.state.locationIDList)

        if (this.state.locationIDList.length == 0) {
            searchRes = <div className="large-italic">Phooey. There are no known locations yet.</div>;
        } else {
            console.log(this.state.locationIDList)
            searchRes = <LocationsList locationIDList={this.state.locationIDList} ingredientID={this.state.ingredientID} />
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
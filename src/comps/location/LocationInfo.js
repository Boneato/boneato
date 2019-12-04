import React, { Component, useImperativeHandle } from 'react';
import UpVoteButton from '../location/UpVoteButton';
import DownVoteButton from '../location/DownVoteButton';
<<<<<<< HEAD
//import {loggedIn} from '../../cont/LoginController';
import Tab from '@material-ui/core/Tab';

export default function LocationInfo(props) {
    let locationInfo = props.locationInfo;
    // let locationInfo = {
    //     ingredientID: null,
    //     locationID:null,
    //     upVote: 0,
    //     downVote: 0,
    //     userID: null,
    //     dateFirstReport:null,
    // };
    let detailedLoca = getDetailedLocation(locationInfo.locationID)
    let index = props.index;
    let upDownVoteRight = null;
    let errorWarning = null;

   // if(!loggedIn(locationInfo.userID)){
        upDownVoteRight = <p>Please <Tab label="sign in with Google" href="../LoginPage" /> to share whether you foung this ingredient here. </p>
   // }
=======
import { loggedIn } from '../../cont/LoginController';
import Tab from '@material-ui/core/Tab';

import { db } from '../../firestore';
import Grid from '@material-ui/core/Grid';

export default class LocationInfo extends Component {
    constructor(props) {
        super(props);

        //locationInfo includes:
        // upVote
        // downVote
        // userID
        // dateFirstReport
        // lat
        // long
        // address
        // name
        this.ingredID = props.ingredID
        this.locationInfo = props.locationInfo
    }
>>>>>>> 98ae956227fe05462821ebc434d402e4c6bdf683

    componentDidMount() {
    }

    render() {

        if (this.locationInfo.downVote >= 5) {
            var errorWarning = <div className="location-alert">The 5 most recent voters reported that they didn't find this ingredient here.</div>
        }

        return (
            <div className="loc-info-container">
                {errorWarning}

                <Grid container direction="row" justify="center" spacing={3}>
                    <Grid item xs={12} md={5} lg={4}>
                        <UpVoteButton locID={this.props.locID} ingredID={this.props.ingredID} locationInfo={this.locationInfo} />
                        <DownVoteButton locID={this.props.locID} ingredID={this.props.ingredID} locationInfo={this.locationInfo} />
                    </Grid>
                    <Grid item xs={12} md={7} lg={8}>
                        <span>
                            <div className="location-name">{this.locationInfo.name}</div>
                            <div className="location-address">{this.locationInfo.address}</div>
                            <div className="location-reported-by">Reported by <span className="location-author">~a person with id {this.locationInfo.userID}~</span> on {this.locationInfo.date}.</div>
                        </span>
                    </Grid>
                </Grid >
            </div>
        )
    }
}

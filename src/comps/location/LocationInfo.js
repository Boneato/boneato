import React, { Component, useImperativeHandle } from 'react';
import UpVoteButton from '../location/UpVoteButton';
import DownVoteButton from '../location/DownVoteButton';
//import {loggedIn} from '../../cont/LoginController';
import { loggedIn } from '../../cont/LoginController';
import Tab from '@material-ui/core/Tab';

import { db } from '../../firestore';
import Grid from '@material-ui/core/Grid';
import ErrorIcon from '@material-ui/icons/ErrorOutline';

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
        // dv counter
        this.ingredID = props.ingredID
        this.locationInfo = props.locationInfo
        this.state = {
            upVotePressed: false,
            downVotePressed: false
        }
    }
    componentDidMount() {
        if (this.props.signedIn) {
            var userLoc = db.firestore().collection('users').doc(this.props.signedIn.uid).collection('ingredients')
            .doc(this.props.ingredID).collection('locations').doc(this.props.locID)
            userLoc.get().then((doc) => {
                console.log(doc.data());
            }).catch((e) => {
                console.log(e);
            })
        }
    }

    votePress = () => {

    }
    render() {

        if (this.locationInfo.dvcounter >= 5) {
            var errorWarning = <div className="location-alert"><ErrorIcon style={{ height: '20px', width: '20px', paddingRight: '2px', marginBottom: '-4px' }} /> The 5 most recent voters reported that they didn't find this ingredient here.</div>
        }
        console.log("location info rendering")
        console.log(this.locationInfo.upvotes)

        return (

            <div className="loc-info-container">
                {errorWarning}

                <Grid container direction="row" justify="center" spacing={3}>
                    <Grid item xs={12} md={5} lg={4}>
                        <UpVoteButton signedIn={this.props.signedIn} updatefunction={this.props.updatefunction} 
                        locID={this.props.locID} ingredID={this.props.ingredID} locationInfo={this.locationInfo}
                        downVotePress={this.VotePress} />
                        <DownVoteButton signedIn={this.props.signedIn} updatefunction={this.props.updatefunction} 
                        locID={this.props.locID} ingredID={this.props.ingredID} locationInfo={this.locationInfo}
                        upVotePress={this.VotePress} />
                    </Grid>
                    <Grid item xs={12} md={7} lg={8}>
                        <span>
                            <div className="location-name">{this.locationInfo.name}</div>
                            <div className="location-address">{this.locationInfo.address}</div>
                            <div className="location-reported-by">Reported by <span className="location-author">{this.locationInfo.newUserName}</span> on {this.locationInfo.date}.</div>
                        </span>
                    </Grid>
                </Grid >
            </div>
        )
    }
}

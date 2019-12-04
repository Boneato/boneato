import React, { Component, useImperativeHandle } from 'react';
import UpVoteButton from '../location/UpVoteButton';
import DownVoteButton from '../location/DownVoteButton';
import { loggedIn } from '../../cont/LoginController';
import { db } from '../../firestore';
import Grid from '@material-ui/core/Grid';

export default class LocationInfo extends Component {
    constructor(props) {
        super(props);

        //locationInfo includes:
        // ingredientID
        // locationID
        // upVote
        // downVote
        // userID
        // dateFirstReport
        // lat
        // long
        // address
        // name
        this.locationInfo = props.locationInfo

    }

    // let upDownVoteRight = null;

    componentDidMount() {
    }

    render() {

        // if (!loggedIn(this.locationInfo.userID)) {
        var upDownVoteRight = <div>Please <a href="../LoginPage">sign in with Google</a> to share whether you found this ingredient here. </div>;
        //}
        if (this.locationInfo.downVote >= 5) {
            var errorWarning = <div>The 5 most recent voters reported that they didn't find this ingredient here.</div>
        }

        return (
            <div className="loc-info-container">
                {upDownVoteRight}
                {errorWarning}

                <Grid container direction="row" justify="center" spacing={3}>
                    <Grid item xs={12} md={5} lg={4}>
                            <UpVoteButton locationInfo={this.locationInfo} />
                            <DownVoteButton locationInfo={this.locationInfo} />
                    </Grid>
                    <Grid item xs={12} md={7} lg={8}>
                    <span>
                        <div>{this.locationInfo.name}</div>
                        <div>{this.locationInfo.address}</div>
                        <div>Reported by <i>~a person with id {this.locationInfo.userID}~</i> on {this.locationInfo.date}.</div>
                    </span>
                    </Grid>
                </Grid >
            </div>
        )
    }
}

import React, { Component, useImperativeHandle } from 'react';
import UpVoteButton from '../location/UpVoteButton';
import DownVoteButton from '../location/DownVoteButton';
import { loggedIn } from '../../cont/LoginController';
import Tab from '@material-ui/core/Tab';
import { db } from '../../firestore';

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
            var upDownVoteRight = <p>Please <Tab label="sign in with Google" 
            href="../LoginPage" /> to share whether you found this ingredient here. </p>;
        //}
        if (this.locationInfo.downVote >= 5) {
            var errorWarning = <p>The 5 most recent voters reported that they didn't find this ingredient here.</p>
        }

        return (
            <div>
                {upDownVoteRight}
                {errorWarning}
                <span>
                    <UpVoteButton locationInfo={this.locationInfo} />
                    <DownVoteButton locationInfo={this.locationInfo} />
                </span>
                <span>
                    <p>{this.locationInfo.name}</p>
                    <p>{this.locationInfo.address}</p>
                    <p>Reported by <i>~a person with id {this.locationInfo.userID}~</i> on {this.locationInfo.date}.</p>
                </span>
            </div>
        )
    }
}

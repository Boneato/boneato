import React, { Component, useImperativeHandle } from 'react';
import UpVoteButton from '../location/UpVoteButton';
import DownVoteButton from '../location/DownVoteButton';
import { loggedIn } from '../../cont/LoginController';
import Tab from '@material-ui/core/Tab';


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

    componentDidMount() {
    }

    render() {

        if (this.locationInfo.downVote >= 5) {
            var errorWarning = <p>The 5 most recent voters reported that they didn't find this ingredient here.</p>
        }

        return (
            <div>
                {errorWarning}
                <span>
                    <UpVoteButton ingredID={this.ingredID} locID={this.props.locID} locationInfo={this.locationInfo} />
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

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

        //let ingredientID = props.ingredientID
        //this.index = props.index

        // this.state = {
        //     detailedLoca: null,
        //     upDownVoteRight: null,
        //     errorWarning: null
        // }
    }
    // let locationInfo = {
    //     ingredientID: null,
    //     locationID:null,
    //     upVote: 0,
    //     downVote: 0,
    //     userID: null,
    //     dateFirstReport:null,
    // };

    // let detailedLoca = getDetailedLocation(locationInfo.locationID)
    // let index = props.index;
    // let upDownVoteRight = null;
    // let errorWarning = null;

    // need to set state with getdetailed location

    getDetailedLocation(locationID) {
        let detailedLoca = {
            locationID: locationID,
            locationName: null,
            locationAddress: null,
            UserName: null,
        };

        //function to fetch other location infomation in location model
        this.setState({ detailedLoca: detailedLoca })
    }

    // updateDetailedLocation = () => {
    //     db.firestore().collection("ingredients").doc(this.state.ingredientID)
    //         .collections("locations").onSnapshot(function (doc) {
    //             console.log(doc.id, " => ", doc.data());
    //             this.setState({
    //                 detailedLoca : {
    //                     locationID: "",
    //                     locationName: "hi"
    //                 }
    //             })
    //     }.bind(this))
    // }

    componentDidMount() {
    }


    render() {

        // if (!loggedIn(this.locationInfo.userID)) {
            var upDownVoteRight = <p>Please <Tab label="sign in with Google" href="../LoginPage" /> to share whether you found this ingredient here. </p>
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
                    <p>Reported By <i>~a person with id {this.locationInfo.userID}~</i> on {this.locationInfo.date}.</p>
                </span>
            </div>
        )
    }
}

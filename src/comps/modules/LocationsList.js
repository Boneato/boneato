import React, { Component } from 'react';
import VotingController from '../../cont/VotingController';
import LocationInfo from '../location/LocationInfo';
import UpvoteButton from '../location/UpVoteButton';
import DownVoteButton from '../location/DownVoteButton';
import LoginController from '../../cont/LoginController';
import LoginPage from '../LoginPage';
import { db } from '../../firestore';


// NEED TO FIGURE OUT HOW TO ORDER THESE, think it's supposed to be ordered by most upvotes

export default class LocationsList extends Component {

    constructor(props) {
        super(props);
        this.ingredientID = props.ingredientID;
        this.state = {
            searchRes: []
        }
    }

    //locationInfo includes:
    // ingredientID
    // locationID
    // upvotes
    // downvotes
    // userID
    // dateFirstReport
    // lat
    // long
    // address
    // name

    updateLocationDetails = () => {
        var locationQuery = db.firestore().collection("ingredients").doc(this.ingredientID)
            .collection("locations").get();

        locationQuery.then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                // console.log(doc.id, " => ", doc.data());
                let newData = doc.data();
                let newAddress = newData.address;
                let newDate = newData.date.toDate().toString(); // maybe we can format this later if we have tons of time
                let newDVotes = newData.downvotes;
                let newLat = newData.lat;
                let newLong = newData.long;
                let newName = newData.name;
                let newUVotes = newData.upvotes;
                let newUID = newData.userid;

                let tempList = this.state.searchRes;
                let newLocInfo = {
                    address: newAddress,
                    date: newDate,
                    downvotes: newDVotes,
                    lat: newLat,
                    long: newLong,
                    name: newName,
                    upvotes: newUVotes,
                    userID: newUID
                }
                tempList.push(<LocationInfo locationInfo={newLocInfo} />)
                this.setState({
                    searchRes: tempList
                })
            }.bind(this))
        }.bind(this))
    }

    componentDidMount() {
        this.updateLocationDetails()
    }

    render() {
        return (
            <div>
                {this.state.searchRes}
            </div>
        )
    }
}
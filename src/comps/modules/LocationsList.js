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

        this.updatefunction = this.updateLocationDetails.bind(this);
    }

    //locationInfo includes:
    // upvotes
    // downvotes
    // userID
    // dateFirstReport
    // lat
    // long
    // address
    // name

    // if user is not logged in
    //            var upDownVoteRight = <p>Please <Tab label="sign in with Google" 
    //            href="../LoginPage" /> to share whether you found this ingredient. </p>;


    updateLocationDetails = () => {
        console.log("the update function is being called")
        var locationQuery = db.firestore().collection("ingredients").doc(this.ingredientID)
            .collection("locations").get();

        locationQuery.then(function (querySnapshot) {
            this.setState({searchRes : []})
            querySnapshot.forEach(function (doc) {
                // console.log(doc.id, " => ", doc.data());
                let locationID = doc.id;
                let newData = doc.data();
                let newAddress = newData.address;
                let newDate = newData.date.toDate().toString(); // maybe we can format this later if we have tons of time
                let newDVotes = newData.downvotes;
                let newLat = newData.lat;
                let newLong = newData.long;
                let newName = newData.name;
                let newUVotes = newData.upvotes;
                let newUID = newData.userid;
                let newDVC = newData.dvcounter;

                console.log("in the LOCLIST method " + newUVotes);

                let tempList = this.state.searchRes;
                let newLocInfo = {
                    address: newAddress,
                    date: newDate,
                    downvotes: newDVotes,
                    lat: newLat,
                    long: newLong,
                    name: newName,
                    upvotes: newUVotes,
                    userID: newUID,
                    dvcounter: newDVC
                }
                tempList.push(<LocationInfo updatefunction={this.updatefunction} 
                    ingredID= {this.ingredientID} locID={locationID} locationInfo={newLocInfo} />)
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
        console.log("render locations list")
        
        return (
            <div>
                {/* updownvoteright */}
                {this.state.searchRes}
            </div>
        )
    }
}
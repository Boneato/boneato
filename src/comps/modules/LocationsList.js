import React, { Component } from 'react';
import VotingController from '../../cont/VotingController';
import LocationInfo from '../location/LocationInfo';
import UpvoteButton from '../location/UpVoteButton';
import DownVoteButton from '../location/DownVoteButton';
import LoginController from '../../cont/LoginController';
import LoginPage from '../LoginPage';
import {db} from '../../firestore';



export default class LocationsList extends Component {

    constructor(props) {
        super(props);
        this.ingredientID = props.ingredientID;
        // locationIDList = props.locationIDList;
        this.state = {
            searchRes: []
        }
    }

    // updateLocationDetails = () => {
    //     db.firestore().collection("ingredients").doc(ingredientID)
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

//     //locationInfo includes:
    //     // ingredientID
    //     // locationID
    //     // upvotes
    //     // downvotes
    //     // userID
    //     // dateFirstReport
    //     // lat
    //     // long
    //     // address
    //     // name

    updateLocationDetails = () => {
        var locationQuery = db.firestore().collection("ingredients").doc(this.ingredientID)
            .collection("locations").get();

        locationQuery.then(function (querySnapshot) {
            querySnapshot.forEach(function (doc) {
                console.log(doc.id, " => ", doc.data());
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
                let newLocInfo ={
                    address : newAddress, 
                    date : newDate,
                    downvotes : newDVotes,
                    lat : newLat,
                    long : newLong,
                    name : newName,
                    upvotes : newUVotes,
                    userID : newUID
                }
                tempList.push(<LocationInfo locationInfo = {newLocInfo}/>)
                this.setState({
                    searchRes: tempList
                })
            }.bind(this))
        }.bind(this))
    }

    componentDidMount() {
        this.updateLocationDetails()
    }



    // function componentDidUpdate(locationID) {
    //     let locationInfo = {
    //         ingredientID: null,
    //         locationID: null,
    //         upVote: 0,
    //         downVote: 0,
    //         userID: null,
    //         dateFirstReport: null,
    //         lat: 0,
    //         long: 0,
    //         address: null,
    //         name: null
    //     };
    //     //function to fetch other information in JSON file
    //     //the ingredientID and locationID is given
    //     return locationInfo
    // }

    // pre-conditions: 
    //      props must have list of LocationModels with respective LocationItems
    //      pass in boolean indicating user is signed-in or not.
    // let locationIDList = props.locationIDList;
    // //let ingredientID = props.ingredientID;
    // let searchRes = [];

    // for (let [index, locID] of locationIDList.entries()) {

   
    //     searchRes.push(<LocationInfo locationInfo={componentDidUpdate(locID)} index={index + 1} />)
    // }



    // if (props.currentUser) {
    //     voteAllow = 
    //     <span>
    //         <div>
    //             <UpvoteButton/>
    //             <DownVoteButton/>
    //         </div>
    //         <LocationInfo locationInfo={this.locationInfo} index={i++}/>
    //     </span>
    // }else{
    //     voteAllow = <div>
    //         <p>You need to sign to see the result</p>
    //     <LoginPage/>
    //     </div>;
    // }

    render() {
        return (
            <div>
                {this.state.searchRes}
            </div>
        )
    }
}



    // Displays list of locations with subcomponents:
    //      UpvoteButton, DownvoteButton, LocationInfo
    // as well as vote count for upvotes and downvotes.
    // Communicate with VotingController to check whether user can upvote or downvote.
    // If VotingController indicates user has already voted, prevent user from voting.
    // If user is not signed, disallow interaction with UpvoteButton,
    // DownvoteButton.




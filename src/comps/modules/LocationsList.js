import React, { Component } from 'react';
import VotingController from '../../cont/VotingController';
import LocationInfo from '../location/LocationInfo';
import UpvoteButton from '../location/UpVoteButton';
import DownVoteButton from '../location/DownVoteButton';
import LoginController from '../../cont/LoginController';
import LoginPage from '../LoginPage';
//import {db} from '../../firestore';



export default function LocationsList(props){
    
    // pre-conditions: 
    //      props must have list of LocationModels with respective LocationItems
    //      pass in boolean indicating user is signed-in or not.
    let locationIDList = props.locationIDList;
    let ingredientID = props.ingredientID;
    let searchRes = [];

    for(let [index,value] of locationIDList.entries()){
        searchRes.push(<LocationInfo locationInfo={componentDidUpdate(ingredientID,value)} index={index+1}/>)
    }

    

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

    return(
        <div>
            {searchRes}
        </div>
    )

}

function componentDidUpdate(ingredientID,locationID) {
        let locationInfo = {
            ingredientID: null,
            locationID:null,
            upVote: 0,
            downVote: 0,
            userID: null,
            dateFirstReport:null,
        };
        //function to fetch other information in JSON file
        //the ingredientID and locationID is given
        return locationInfo
    }

    // Displays list of locations with subcomponents:
    //      UpvoteButton, DownvoteButton, LocationInfo
    // as well as vote count for upvotes and downvotes.
    // Communicate with VotingController to check whether user can upvote or downvote.
    // If VotingController indicates user has already voted, prevent user from voting.
    // If user is not signed, disallow interaction with UpvoteButton,
    // DownvoteButton.

    


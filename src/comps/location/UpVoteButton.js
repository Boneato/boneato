import React, { Component } from 'react';
import { voteTotal, canVote } from '../../cont/VotingController';

var voteRight = true;

export default function UpVoteButton(props) {

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
    let locationInfo = props.locationInfo;

    return (<button onClick={componentDidUpdate(locationInfo)}> <b>{locationInfo.upvotes}</b> CONFIRMED</button>);

}

// updates vote counter when clicked
function componentDidUpdate(locationInfo) {
    //this right now is taking in the user's ID that initially logged the location.
    //we need to pass the CURRENT user's ID as a prop somehow
    if (canVote(locationInfo.userID)) { 
        voteTotal(locationInfo.ingredientID, locationInfo.userID, locationInfo.locationID, true, false);
        voteRight = true;
    }
}
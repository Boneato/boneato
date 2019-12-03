import React, {Component} from 'react';
import { voteTotal, canVote} from '../../cont/VotingController';

var voteRight = false;

export default function DownVoteButton(props){

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
    

    return(<button onClick="componentDidUpdate(locationInfo)"> <b>{locationInfo.downvotes}</b> DIDN'T FIND</button>);
    
}

 // updates vote counter when clicked
function componentDidUpdate(locationInfo) {
    if(canVote(locationInfo.userID)){
        voteTotal(locationInfo.ingredientID, locationInfo.userID, locationInfo.locationID, false, true);
        voteRight = true;
    }
}



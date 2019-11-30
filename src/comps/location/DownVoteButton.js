import React, {Component} from 'react';
import { voteTotal, canVote} from '../../cont/VotingController';

var voteRight = false;

export default function DownVoteButton(props){

    let locationInfo = props.locationInfo;
    // let locationInfo = {
    //     ingredientID: null,
    //     locationID:null,
    //     upVote: 0,
    //     downVote: 0,
    //     userID: null,
    //     dateFirstReport:null,
    // };
    

    return(<button onclick="componentDidUpdate(locationInfo)"> {locationInfo.downVote} DIDN'T FIND</button>);
    
}

 // updates vote counter when clicked
function componentDidUpdate(locationInfo) {
    if(canVote(locationInfo.userID)){
        voteTotal(locationInfo.ingredientID, locationInfo.userID, locationInfo.locationID, false, true);
        voteRight = true;
    }
}



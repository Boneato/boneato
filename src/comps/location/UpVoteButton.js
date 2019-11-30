import React, {Component} from 'react';
import canVote from '.../cont/VotingController';
import { voteTotal , canVote} from '../../cont/VotingController';

var voteRight = true;

export default function UpVoteButton(props){

    let locationInfo = props.locationInfo;
    // let locationInfo = {
    //     ingredientID: null,
    //     locationID:null,
    //     upVote: 0,
    //     downVote: 0,
    //     userID: null,
    //     dateFirstReport:null,
    // };
    

    return(<button onclick="componentDidUpdate()"> {locationInfo.upVote} CONFIRMED</button>);
    
}

 // updates vote counter when clicked
 function componentDidUpdate() {
    if(!canVote(userID)){
        return false;
    }else{
        voteTotal(locationInfo.ingredientID, locationInfo.userID, locationInfo.locationID, true, false);
        return true;
    }
}

export default voteRight;
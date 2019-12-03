import React, {Component} from 'react';
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
    

    return(<button onClick="componentDidUpdate(locationInfo)"> {locationInfo.upVote} CONFIRMED</button>);
    
}

 // updates vote counter when clicked
 function componentDidUpdate(locationInfo) {
    if(canVote(locationInfo.userID)){
        voteTotal(locationInfo.ingredientID, locationInfo.userID, locationInfo.locationID, true, false);
        voteRight =  true;
    }
}
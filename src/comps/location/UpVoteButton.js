import React, {Component} from 'react';

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
    

    return(<button> {locationInfo.upVote} CONFIRMED</button>);
    
}

 // updates vote counter when clicked
// function componentDidUpdate() {

// }
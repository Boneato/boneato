import React, {Component} from 'react';


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
    

    return(<button> {locationInfo.downVote} DIDN'T FIND</button>);
    
}

 // updates vote counter when clicked
// function componentDidUpdate() {

// }


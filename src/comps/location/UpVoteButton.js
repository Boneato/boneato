import React, { Component } from 'react';
import { voteTotal, canVote } from '../../cont/VotingController';

//var voteRight = true;

export default class UpVoteButton extends Component {

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
    constructor(props) {
        super(props);

        this.state = {
            locationInfo: props.locationInfo
        }

    }

    handleClick = () => {
        voteTotal(this.props.ingredID, this.props.locID, this.state.locationInfo, true)
    }    

    render() {
        return (
            <button onClick={this.handleClick}>
                <b>{this.state.locationInfo.upvotes}</b> CONFIRMED
            </button>
        )
    }
}


// updates vote counter when clicked
// componentDidUpdate(locationInfo) {
//     //this right now is taking in the user's ID that initially logged the location.
//     //we need to pass the CURRENT user's ID as a prop somehow

//     //if (canVote(locationInfo.userID)) {
//     voteTotal(locationInfo.ingredientID, locationInfo.userID, locationInfo.locationID, true, false);
//     voteRight = true;
//     }
// }
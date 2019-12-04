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
        voteTotal(this.props.updatefunction, this.props.ingredID, this.props.locID, this.state.locationInfo, true)
    }    

    render() {

        return (
            <button className="button-upvote" onClick={this.handleClick}>
                <b>{this.state.locationInfo.upvotes}</b> CONFIRMED
            </button>
        )
    }
}
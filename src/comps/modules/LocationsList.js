import React, { Component } from 'react';
import VotingController from '../../cont/VotingController';
import LocationInfo from '../location/LocationInfo';
import UpvoteButton from '../location/UpVoteButton';
import DownvoteButton from '../location/DownVoteButton';

export class LocationsList extends Component {
    
    // pre-conditions: 
    //      props must have list of LocationModels with respective LocationItems
    constructor(props) {

    }

    // if the vote count is updated by the UpvoteButton or DownvoteButton,
    // update the DOM to reflect the accurate vote and 
    // communicate with the VotingController to update the database.
    componentDidUpdate() {

    }

    // Displays list of locations with subcomponents:
    //      UpvoteButton, DownvoteButton, LocationInfo
    // as well as vote count for upvotes and downvotes.
    render() {

    }
}
import React, { Component } from 'react';
import VotingController from '../../cont/VotingController';
import LocationInfo from '../location/LocationInfo';
import UpvoteButton from '../location/UpVoteButton';
import DownVoteButton from '../location/DownVoteButton';
import LoginController from '../../cont/LoginController';
import LoginPage from '../LoginPage';

export class LocationsList extends Component {
    
    // pre-conditions: 
    //      props must have list of LocationModels with respective LocationItems
    //      pass in boolean indicating user is signed-in or not.
    constructor(props) {
        super(props);
        this.state={
            ingredientID: null,
            locationModel: [{locationID:null,
                            upVote: 0,
                            downVote: 0,
                            userID: null,
                            dataFirstReport:null}],
        };

    }

    // if the vote count is updated by the UpvoteButton or DownvoteButton,
    // update the DOM to reflect the accurate vote and 
    // communicate with the VotingController to update the database.
    componentDidUpdate() {

    }

    // Displays list of locations with subcomponents:
    //      UpvoteButton, DownvoteButton, LocationInfo
    // as well as vote count for upvotes and downvotes.
    // Communicate with VotingController to check whether user can upvote or downvote.
    // If VotingController indicates user has already voted, prevent user from voting.
    // If user is not signed, disallow interaction with UpvoteButton,
    // DownvoteButton.

    
    render() {
        let voteAllow = null;

        if (this.props.currentUser) {
            voteAllow = <div>
            <span>
                <UpvoteButton/>
                <DownVoteButton/>
            </span>
            <span>
                <LocationInfo/>
            </span>
        </div>
        }else{
            voteAllow = <LoginPage/>
        }
        return(
            <body>
               {voteAllow}
            </body>
        );
    }
}

export default DownVoteButton;
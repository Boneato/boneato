import React, { Component } from 'react';
import { voteTotal, canVote } from '../../cont/VotingController';
import {db} from '../../firestore';

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
            locationInfo: props.locationInfo,
            disabled: false
        }

        this.state.disabled = props.signedIn == null

        // look up if user has already voted on this and disable
    }

    canVote = (user, ingredID, locID) => {
        var userLocRef = db.firestore().collection("users").doc(user.uid).collection("ingredients")
            .doc(ingredID).collection("locations").doc(locID);
        console.log("inside canvote")
        console.log(userLocRef)
        
         userLocRef.get().then((doc) => {
            console.log("what is this:")
            if (doc.exists) {
                console.log("Document data:", doc.data());
            } else {
                // doc.data() will be undefined in this case
                console.log("No such document!");
                voteTotal(this.props.signedIn, this.props.updatefunction, this.props.ingredID, this.props.locID, this.state.locationInfo, true)
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    handleClick = () => {
       // console.log(this.canVote(this.props.signedIn, this.props.ingredID, this.props.locID))
       this.canVote(this.props.signedIn, this.props.ingredID, this.props.locID)
         //   console.log(this.canVote(this.props.signedIn, this.props.ingredID, this.props.locID))
    }

    render() {
        return (
            <button disabled={this.state.disabled} className="button-upvote" onClick={this.handleClick}>
                <b>{this.state.locationInfo.upvotes}</b> CONFIRMED
            </button>
        )
    }
}
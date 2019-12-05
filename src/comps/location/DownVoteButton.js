import React, { Component } from 'react';
import { voteTotal } from '../../cont/VotingController';
import {db} from '../../firestore';

export default class DownVote extends Component {

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

        this.votable = props.signedIn != null
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
                voteTotal(this.props.signedIn, this.props.updatefunction, this.props.ingredID, this.props.locID, this.state.locationInfo, false)
            }
        }).catch(function(error) {
            console.log("Error getting document:", error);
        });
    }

    handleClick = () => {
        this.canVote(this.props.signedIn, this.props.ingredID, this.props.locID)
    }    

    render() {
        return (
            <button disabled={!this.votable} className="button-downvote" onClick={this.handleClick}>
                <b>{this.state.locationInfo.downvotes}</b> DIDN'T FIND
            </button>
        )
    }
}
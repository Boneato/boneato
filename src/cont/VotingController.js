import firebase from 'firebase';
require("firebase/firestore");

// takes in locationID and returns list of upvotes and downvotes
// if upvote/downvote is true, update database and return updated vote count as list
export function voteTotal(locationID, upvote = false, downvote = false) {

}

// takes in user id and location id
// validates if user can vote
export function canVote(userID, locationID) {
    
}
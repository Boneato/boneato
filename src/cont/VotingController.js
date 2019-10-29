import firebase from 'firebase';
require("firebase/firestore");

// takes in locationID and returns list of upvotes and downvotes
// if upvote/downvote is true, update database and return updated vote count
export function voteTotal(locationID, upvote = false, downvote = false) {

}
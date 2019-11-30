import firebase from 'firebase';
require("firebase/firestore");

// takes in locationID and returns list of upvotes and downvotes
// if upvote/downvote is true, update database and return updated vote count as list
export function voteTotal(ingredientID, userID, locationID, upvote, downvote) {
    if(upvote){
        //upvote, update the database and return updated vote count
    }else{
        //downvote, update the database and return updated vote count
    }
}

// takes in user id and location id
// validates if user can vote
export function canVote(userID) {
    if(loggedIn(userID)){
        return true;
    }else{
        return false;
    }
}


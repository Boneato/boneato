import { loggedIn } from './LoginController';
import { db } from '../firestore';

// takes in locationID and returns list of upvotes and downvotes
// if upvote/downvote is true, update database and return updated vote count as list
export function voteTotal(ingredientID, locationID, locationInfo, upvote) {

    // first check if user is logged in before any changes made

    if (upvote) {

        var newUpvotes = locationInfo.upvotes + 1;
        var ingredID = ingredientID;
        var locID = locationID;

        var locRef = db.firestore().collection("ingredients").doc(ingredID)
            .collection("locations").doc(locID);

        return locRef.update({
            upvotes: newUpvotes
        })
            .then(function () {
                console.log("Document successfully updated! (but need to refresh to see changes)");
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });

    } else {
        var newDownvotes = {
            downvotes: locationInfo.downvotes + 1
        };
        var ingredID = locationInfo.ingredientID;
        var locID = locationInfo.locationID;
        var updates = {};
        updates['/ingredients/' + ingredID + 'locations/' + locID + 'upvotes/'] = newDownvotes;

        return db.update(updates);
    }
}

// takes in user id and location id
// validates if user can vote
export function canVote(userID) {
    if (loggedIn) {
        //if the userID hasn't voted for this location yet
        return true;
    }
    return false;
}


import { loggedIn } from './LoginController';
import { db } from '../firestore';
import LocationsList from '../comps/modules/LocationsList';

// takes in locationID and returns list of upvotes and downvotes
// if upvote/downvote is true, update database and return updated vote count as list
export function voteTotal(updatefunction, ingredientID, locationID, locationInfo, upvote) {

    // first check if user is logged in before any changes made
    var ingredID = ingredientID;
    var locID = locationID;
    console.log(ingredID)
    console.log(locID)

    if (upvote) {

        var newUpvotes = locationInfo.upvotes + 1;

        var locRef = db.firestore().collection("ingredients").doc(ingredID)
            .collection("locations").doc(locID);

        return locRef.update({
            upvotes: newUpvotes
        })
            .then(function () {
                updatefunction();
                console.log("Document successfully updated! (but need to refresh to see changes)");
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });

    } else {
        var newDownvotes = locationInfo.downvotes + 1;

        var locRef = db.firestore().collection("ingredients").doc(ingredID)
            .collection("locations").doc(locID);

        return locRef.update({
            downvotes: newDownvotes
        })
            .then(function () {
                updatefunction();
                console.log("Document successfully updated! (but need to refresh to see changes)");
            })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    }
}

// takes in user id and location id
// validates if user can vote
export function canVote(userID) {
    //if(loggedIn(userID)){
        //if the userID hasn't voted for this location yet
      //  return true;
    //}
    return false;
}


import { loggedIn } from './LoginController';
import { db } from '../firestore';
import LocationsList from '../comps/modules/LocationsList';

// takes in locationID and returns list of upvotes and downvotes
// if upvote/downvote is true, update database and return updated vote count as list
export function voteTotal(user, updatefunction, ingredientID, locationID, locationInfo, upvote) {

    // first check if user is logged in before any changes made
    var ingredID = ingredientID;
    var locID = locationID;
    console.log(ingredID);
    console.log(locID);

    // need help figuring out how to update this simultaneously with upvote and downvote
    // ALSO (huge also) this only works if the user is for sure in the firestore


    var batch = db.firestore().batch();

    

    var locRef = db.firestore().collection("ingredients").doc(ingredID)
        .collection("locations").doc(locID);
    var userLocRef = db.firestore().collection("users").doc(user.uid).collection("ingredients")
        .doc(ingredID).collection("locations").doc(locID);

    // userLocRef.set({ upvote: true })
    //     .then(function (docRef) {
    //         console.log("Document written with ID: ", docRef.id);
    //     })
    //     .catch(function (error) {
    //         console.error("Error adding document: ", error);
    //     });

    if (upvote) {
        var newUpvotes = locationInfo.upvotes + 1;

        batch.set(userLocRef, {upvote: true, downvote: false});
        batch.update(locRef, {
            upvotes: newUpvotes,
            dvcounter: 0
        });

        return batch.commit().then(function () {
            updatefunction();
            console.log("Document successfully updated!");
        })
            .catch(function (error) {
                // The document probably doesn't exist.
                console.error("Error updating document: ", error);
            });
    } else {
        var newDownvotes = locationInfo.downvotes + 1;
        var newDVC = locationInfo.dvcounter + 1;

        batch.set(userLocRef, {upvote: false, downvote: true});
        batch.update(locRef, {
            downvotes: newDownvotes,
            dvcounter: newDVC
        });

        return batch.commit().then(function () {
            updatefunction();
            console.log("Document successfully updated!");
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


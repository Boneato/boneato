import firebase from 'firebase';
require("firebase/firestore");

// query database for list of LocationModel(s) for given ingredient ID.
// return list of LocationModel(s).
export function listLocations(ingredID) {

}


//The LocationsController can get relevant location information from LocationModel according to the given Location Item id.
// The LocationsController can import new location data into LocationModel
// Vote ID - a unique id for each vote with a suffix 'U' indicating upvote and 'D' indicating downvote.
// User ID - underneath the Vote ID is the user's id of who created the vote.
// The controller resides on the client-side.
// LocationsController queries all location(s) attached to the given ingredient ID and returns the batch of location(s) to the OneItemController.
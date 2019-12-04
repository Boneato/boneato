import firebase from 'firebase';
require("firebase/firestore");
export default class LoginController {
    constructor() {
        this.uid = "";
        this.token = "";
        this.name = "";
        this.user = "";
        this.toggleSignIn = this.toggleSignIn.bind(this);
        this.signedIn = this.signedIn.bind(this);
    };

    // pre-conditions: Only used within the LoginPage.
    // post-conditions: 
    //      if the user is signed in, returns a True boolean
    //      otherwise returns false.
    signedIn() {
        return this.user;
    };

    /**
     * Function called when clicking the Login/Logout button.
     */
    // [START buttoncallback]
    toggleSignIn() {
        if (!firebase.auth().currentUser) {
            // [START createprovider]
            var provider = new firebase.auth.GoogleAuthProvider();
            var userInfo = firebase.auth().signInWithPopup(provider).then(function(result) {
                this.token = result.credential.accessToken;
                this.uid = result.user.uid;
                this.name = result.user.name;
                this.user = result.user;
                console.log(this.user);
            }).catch(function(error) {
                var errorCode = error.code;
                var errorMessage = error.message;
                // The email of the user's account used.
                var email = error.email;
                // The firebase.auth.AuthCredential type that was used.
                var credential = error.credential;
            });
        } else {
            firebase.auth().signOut();
        }
    }

    /**
    * initApp handles setting up UI event listeners and registering Firebase auth listeners:
    *  - firebase.auth().onAuthStateChanged: This listener is called when the user is signed in or
    *    out, and that is where we update the UI.
    *  - firebase.auth().getRedirectResult(): This promise completes when the user gets back from
    *    the auth redirect flow. It is where you can get the OAuth access token from the IDP.
    */
    initApp() {

        /*
        
        // Result from Redirect auth flow.
        // [START getidptoken]
        firebase.auth().getRedirectResult().then(function (result) {
            if (result.credential) {
                // This gives you a Google Access Token. You can use it to access the Google API.
                var token = result.credential.accessToken;
                // [START_EXCLUDE]
                document.getElementById('quickstart-oauthtoken').textContent = token;
            } else {
                document.getElementById('quickstart-oauthtoken').textContent = 'null';
                // [END_EXCLUDE]
            }
            // The signed-in user info.
            var user = result.user;
        }).catch(function (error) {
            // Handle Errors here.
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
            // [START_EXCLUDE]
            if (errorCode === 'auth/account-exists-with-different-credential') {
                alert('You have already signed up with a different auth provider for that email.');
                // If you are using multiple auth providers on your app you should handle linking
                // the user's accounts here.
            } else {
                console.error(error);
            }
            // [END_EXCLUDE]
        });
        // [END getidptoken]
        // Listening for auth state changes.
        // [START authstatelistener]
        firebase.auth().onAuthStateChanged(function (user) {
            if (user) {
                // User is signed in.
                var displayName = user.displayName;
                var email = user.email;
                var emailVerified = user.emailVerified;
                var photoURL = user.photoURL;
                var isAnonymous = user.isAnonymous;
                var uid = user.uid;
                var providerData = user.providerData;
                // [START_EXCLUDE]
                document.getElementById('quickstart-sign-in-status').textContent = 'Signed in';
                document.getElementById('quickstart-sign-in').textContent = 'Sign out';
                document.getElementById('quickstart-account-details').textContent = JSON.stringify(user, null, '  ');
                // [END_EXCLUDE]
            } else {
                // User is signed out.
                // [START_EXCLUDE]
                document.getElementById('quickstart-sign-in-status').textContent = 'Signed out';
                document.getElementById('quickstart-sign-in').textContent = 'Sign in with Google';
                document.getElementById('quickstart-account-details').textContent = 'null';
                document.getElementById('quickstart-oauthtoken').textContent = 'null';
                // [END_EXCLUDE]
            }
            // [START_EXCLUDE]
            document.getElementById('quickstart-sign-in').disabled = false;
            // [END_EXCLUDE]
        });

        */
        
        /* Previous code (changed by Laura):
            document.getElementById('quickstart-sign-in').addEventListener('click', toggleSignIn, false);
        */

        // [END authstatelistene
        
    }

    // pre-conditions: User must be signed in.
    // post-conditions: Return true if sign out successful, otherwise false.
    signOut() {

    }

    // Takes in userID.
    // Returns true boolean indicating current user is signed in.
    // Otherwise return false.
    loggedIn(userID) {

    }
}
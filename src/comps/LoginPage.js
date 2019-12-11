import React, { Component } from 'react';
//import LoginController from '../cont/LoginController';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';
import firebase from 'firebase';
require("firebase/firestore")

const useStyles = makeStyles(theme => ({
    link: {
        margin: theme.spacing(1),
    },
}));

// takes in boolean variable indicating if user is logged in
export default function LoginPage(props) {
    // renders login page for sign in
    // if user is signed in, redirects user to homePage
    // if LoginController determines login credentials are invalid,
    // render an error message displaying login was unsuccessful.


    const handleLogIn = (event) => {
        event.preventDefault();
        var provider = new firebase.auth.GoogleAuthProvider();
        // TODO: WHY IS THEN() NOT CALLED?
        // guess it's the problem of the setState function?
        var userInfo = firebase.auth().signInWithPopup(provider).then(function(result) {
          // this.setState({user: result.user});
          localStorage.setItem("userName",result.user.displayName);
        }).catch(function(error) {
            var errorCode = error.code;
            var errorMessage = error.message;
            // The email of the user's account used.
            var email = error.email;
            // The firebase.auth.AuthCredential type that was used.
            var credential = error.credential;
        }).finally(() => {
            props.history.goBack();
        });
       // props.signInCallback();
    }
    return (
        <div className="content-container"> 
            <div className="page-title">Sign In</div>
            <p>Please sign in with Google to continue.</p>
            <Button variant="outlined" onClick={handleLogIn}>
           LOGIN WITH GOOGLE</Button>     
        </div>
    )
}

import React, { Component } from 'react';
import LoginController from '../cont/LoginController';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';

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
    const classes = useStyles();

    return (
        <div>
            <p>Please sign in with Google to continue.</p>
            <Button variant="contained" className={classes.button} id="quickstart-sign-in" />

            {/* Container where we'll display the user details */}
            <div class="quickstart-user-details-container">
                Firebase sign-in status: <span id="quickstart-sign-in-status">Unknown</span>
                <div>Firebase auth <code>currentUser</code> object value:</div>
                <pre><code id="quickstart-account-details">null</code></pre>
                {/* <div>Google OAuth Access Token:</div>
                <pre><code id="quickstart-oauthtoken">null</code></pre> */}
            </div>
        </div>
    )
}

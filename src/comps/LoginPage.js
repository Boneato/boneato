import React, { Component } from 'react';
//import LoginController from '../cont/LoginController';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Grid from '@material-ui/core/Grid';

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
        console.log(props)
        props.signInCallback();
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

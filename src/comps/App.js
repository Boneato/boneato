import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import Navbar from './modules/Navbar.js';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SpecingPage from './SpecingPage';
import AboutPage from './AboutPage';
import ResultsPage from './ResultsPage';
import { Route, Switch, Redirect } from 'react-router-dom';
//import LoginController from '../cont/LoginController';
import { Modal, NewIngredientModal, NewLocationModal } from './modules/Modal';
import {CircularProgress} from '@material-ui/core';
import firebase from 'firebase';
import {GoogleSearch} from '../cont/PlacesController';
require("firebase/firestore");

// renders application with all neccesary components
export default class App extends Component {
  constructor(props) {
    super(props);
    //this.signedIn = this.signedIn.bind(this);
    //var user = new LoginController(this.signedIn);
    this.state = {
      user: null,
      userInput: "",
      ingredList: [],
      loading: false
    }
  }

  handleSignIn = () => {
    var provider = new firebase.auth.GoogleAuthProvider();
    // TODO: WHY IS THEN() NOT CALLED?
    // guess it's the problem of the setState function?
    var userInfo = firebase.auth().signInWithPopup(provider).then(function(result) {
      // this.setState({user: result.user});
      localStorage.setItem("userName",result.user.displayName);
      console.log(this.state.user);
      console.log(localStorage.getItem("userName"));
    }).catch(function(error) {
        var errorCode = error.code;
        var errorMessage = error.message;
        // The email of the user's account used.
        var email = error.email;
        // The firebase.auth.AuthCredential type that was used.
        var credential = error.credential;
    });
  }

  handleSignOut = () => {
    firebase.auth().signOut().then(function() {
      console.log("sign out successfull")
    }).catch(function(error) {
      // An error happened.
    });
  }

  componentDidMount() {
    this.authUnsubFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        this.setState({user: firebaseUser, loading: false});
      } else {
        this.setState({user: null, loading: false});
      }
    });
  }

	// if the user is signed-in, will log user out when exiting the web application
  componentDidUpdate() {
  }

  componentWillUnmount(){
    this.authUnsubFunction();

    this.setState({errorMessage: null});
    firebase.auth().signOut().catch(
      (error) => {
        this.setState({errorMessage : error.message});
      }
    );
  }

  grabSearchInput = (input) => {
    this.setState({userInput: input});
  }

  // TODO: USE REDIRECT WHEN SEARCH IS INITIATED DO NOT USE TO= ON BUTTON PRESS
  render() {
    // if (this.state.loading) {
    //   return <CircularProgress />;
    // } else {
      let signedIn = false;
      let navbar = (
        <Navbar loggedIn={false} />
      );
      if (this.state.user) {
        navbar = <Navbar loggedIn={true} handleSignOut={this.handleSignOut}/>
        signedIn = true;
      }
        return (
          <div>
            {navbar}
            <main>
              <Switch>
                <Route exact path="/" render={(routerProps) => (
                  <HomePage {...routerProps} grabSearchInput={this.grabSearchInput} />
                )}/>
                <Route path="/AboutPage" component={AboutPage} />
                <Route path="/LoginPage" render={(routerProps) => (
                  <LoginPage {...routerProps} signInCallback={this.handleSignIn} />
                )} />
                <Route path='/SpecIngPage/:ingredientID' render={(routerProps) => (
                  <SpecingPage {...routerProps} signedIn={this.state.user} />
                )} />
                <Route path='/results' render={(routerProps) => (
                  <ResultsPage {...routerProps} userInput={this.state.userInput} />
                )} />
              </Switch>
            </main>
          </div>
        );
      }

}

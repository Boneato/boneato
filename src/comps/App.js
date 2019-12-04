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
import LoginController from '../cont/LoginController';
import { Modal, NewIngredientModal, NewLocationModal } from './modules/Modal';

// renders application with all neccesary components
export default class App extends Component {
  constructor(props) {
    super(props);
    var user = new LoginController();
    this.state = {
      user: user,
      userLoggedIn: false,
      userInput: "",
      ingredList: []
    }
  }

	// if the user is signed-in, will log user out when exiting the web application
	componentWillUnmount() {
		//   this.authUnSubFunction()
	}

    //   i  f (firebaseUser) {
    //     this.setState(
    //       {
    //         user: firebaseUser
    //       }
    //     )

    //   }
    //   else {
    //     this.setState({ user: null })
    //   }
    // })
  // if the user is signed-in, will log user out when exiting the web application
  componentWillUnmount() {
 //   this.authUnSubFunction()
  }

  componentDidUpdate() {
    //this.setState({loggedIn: true});
  }

  grabSearchInput = (input) => {
    this.setState({userInput: input});
  }

  // TODO: USE REDIRECT WHEN SEARCH IS INITIATED DO NOT USE TO= ON BUTTON PRESS
  render() {
    let navbar = (
      <Navbar currentUser={this.state.user}/>
    );
    return (
      <div>
        <main>
          <Navbar currentUser={this.state.user}/>
          <Switch>
            <Route exact path="/" render={(routerProps) => (
              <HomePage {...routerProps} grabSearchInput={this.grabSearchInput} />
            )}/>
            <Route path="/AboutPage" component={AboutPage} />
            <Route path="/LoginPage" render={(routerProps) => (
              <LoginPage {...routerProps} LoginController={this.state.user} />
            )} />
            <Route path='/SpecIngPage' component={SpecingPage} />
            <Route path='/results' render={(routerProps) => (
              <Results {...routerProps} userInput={this.state.userInput} />
            )} />
          </Switch>
        </main>
      </div>
      );
  }
}

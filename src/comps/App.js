import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import Navbar from './modules/Navbar.js';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SpecingPage from './SpecingPage';
import AboutPage from './AboutPage';
import Results from './Results';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Modal, NewIngredientModal, NewLocationModal} from './modules/Modal';
import {LoginController} from '../cont/LoginController.js';
import axios from 'axios';

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
    async function getNutrix(food) {
      const response =
        await axios.get("https://trackapi.nutritionix.com/v2/search/instant",
          { headers: {'x-app-id': '3e44cfbe', 'x-app-key': 'be52ed410ebd23630810aa7ca9807c74'},
            params: {'query': food, 'self': false, 'common_general': false, 'common_restaurant': false}}
        )
      return response.data;
    };
    getNutrix(input).then((data) => {
      this.setState({ingredList: data});
    });
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
              <Results {...routerProps} ingredList={this.state.ingredList} userInput={this.state.userInput} />
            )} />
          </Switch>
        </main>
      </div>
      );
  }
}

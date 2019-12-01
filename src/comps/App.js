import React, {Component} from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import Navbar from './modules/Navbar.js';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import ResultsPage from './ResultsPage';
import SpecingPage from './SpecingPage';
import AboutPage from './AboutPage';
import {Route, Switch, Redirect} from 'react-router-dom';
import {Modal, NewIngredientModal, NewLocationModal} from './modules/Modal';
import {LoginController} from '../cont/LoginController.js';
// renders application with all neccesary components
export default class App extends Component {

  constructor(props) {
    super(props);
    var user = new LoginController();
    this.state = {
      user: user,
      userLoggedIn: false
    }
  }

  componentDidMount() {
    // this.fetchData();
    // this.authUnSubFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {

    //   if (firebaseUser) {
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
    
  }

  // if the user is signed-in, will log user out when exiting the web application
  componentWillUnmount() {
 //   this.authUnSubFunction()
  }

  componentDidUpdate() {
    this.setState({loggedIn: true});
  }

  render() {
    let navbar = (
      <Navbar currentUser={this.state.user}/>
    );
    return (
      <div>
        <main>
          <Navbar currentUser={this.state.user}/>
          <Switch>
            <Route exact path="/" component={HomePage} />
            <Route path="/AboutPage" component={AboutPage} />
            <Route path="/LoginPage" render={(routerProps) => (
              <LoginPage {...routerProps} LoginController={this.state.user}/>
            )} />
            <Route path="/ResultsPage" component={ResultsPage} />
            <Route path='/SpecIngPage' component={SpecingPage} />
          </Switch>
        </main>
      </div>
      );
  }
}
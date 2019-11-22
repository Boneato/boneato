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
import LoginController from '../cont/LoginController';
import {Modal, NewIngredientModal, NewLocationModal} from './modules/Modal';

// renders application with all neccesary components
export default class App extends Component {

  // constructor(props) {
  //   super(props);
  //   this.state = {
  //     user: '',
  //   }
  // }

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

  render() {
    return (
      <div>
<<<<<<< HEAD
        <Navbar currentUser={LoginController.user}/>
=======
        <Navbar/>
        <NewIngredientModal submitted={true}/>
>>>>>>> 1a117a7329e6d8da988b380d498a24f073585dc8
        <main>
          <Switch>
            {/* <Route path="/" component={HomePage} /> This was making everything else break*/}
            <Route path="/AboutPage" component={AboutPage} />
            <Route path="/LoginPage" component={LoginPage} />
            <Route path="/ResultsPage" component={ResultsPage} />
            <Route path='/SpecIngPage' component={SpecingPage} />
          </Switch>
        </main>
      </div>
      );
  }
}
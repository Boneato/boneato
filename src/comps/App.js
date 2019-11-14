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
import Modal from './modules/Modal';

// renders application with all neccesary components
export default class App extends Component {

  componentDidMount() {

  }

  // if the user is signed-in, will log user out when exiting the web application
  componentWillUnmount() {

  }

  render() {
    return (
      <div>
        <Navbar/>
        <main>
          <Switch>
            <Route path="/HomePage" component={HomePage} />
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
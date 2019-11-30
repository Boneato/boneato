import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import Navbar from './modules/Navbar.js';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SpecingPage from './SpecingPage';
import AboutPage from './AboutPage';
import { Route, Switch, Redirect } from 'react-router-dom';
import LoginController from '../cont/LoginController';
import { Modal, NewIngredientModal, NewLocationModal } from './modules/Modal';

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
				<main>
					<Navbar currentUser={LoginController.user} />
					<Switch>
						<Route exact path="/" component={HomePage} />
						<Route path="/AboutPage" component={AboutPage} />
						<Route path="/LoginPage" component={LoginPage} />
						<Route path="/SpecIngPage" component={SpecingPage} />
					</Switch>
				</main>
			</div>
		);
	}
}

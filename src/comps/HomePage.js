import React, { Component } from 'react';
import SearchBarView from './modules/SearchBarView';
import SearchBar from './modules/SearchBar.js';

export default class HomePage extends Component {
	// pre-conditions: sign-in status recieved as true or false in props
	// post-conditions: passes props to render proper navbar links
	constructor(props) {
		super(props);
	}

	// post-conditions:
	//      if user signed in, render "Signed in as 'username'" link
	//      otherwise render "Sign In" link.
	render() {
		return (<div>
			<div className="search-container">
				<div className="search-label">Where can I buy</div>

				
				<SearchBar />

				<div className="search-location">Seattle, WA</div>
				<div className="search-description">Source hard-to-find ingredients for your next home-cooked meal.</div>

			</div >
		</div >);
	}
}
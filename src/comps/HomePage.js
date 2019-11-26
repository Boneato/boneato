import React, { Component } from 'react';
import SearchBar from './modules/SearchBar.js';
import LocationIcon from '@material-ui/icons/LocationOn';

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
		return (<div className="homepage-body">
			<div className="search-container">
				<div className="search-label">Where can I buy</div>

				<SearchBar />

				<div className="search-location"><LocationIcon style={{ height: '22px', width: '22px', paddingRight: '3px', marginBottom: '-3px' }} />Seattle, WA</div>
				<div className="search-description">Source hard-to-find ingredients for your next home-cooked meal.</div>

			</div>
		</div >);
	}
}
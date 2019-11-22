import React, { Component } from 'react';
import SearchBarView from './modules/SearchBarView';
import TextField from '@material-ui/core/TextField';
import { Input } from '@material-ui/core';


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

			<div className="search-label">Where can I buy</div>

			<Input
				placeholder="Bonito"
				inputProps={{
					'aria-label': 'bonito search bar'
				}}
			/>


			<div className="search-location">Seattle, WA</div>
			<div className="search-description">Source hard-to-find ingredients for your next home-cooked meal.</div>


		</div>);
	}
}
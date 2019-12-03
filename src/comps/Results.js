import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import { List, ListItem, ListItemText } from '@material-ui/core';
import Grid from '@material-ui/core/Grid';

function ListItemLink(props) {
	return <ListItem button component="a" {...props} />;
}

export default class ResultsPage extends Component {
	// takes in list of links with attached ingredient IDs
	constructor(props) {
		super(props);
	}

	// pre-conditions:
	//      must be accessed directly from the HomePage
	// post-conditions:
	//      renders relevant search results provided by SearchBarView (AgoliaController)
	//      Each relevant result will be linked to their respective SpecingPage.
	render() {
		let commonIngred = this.props.ingredList["common"];
		let displayList = (
			<div></div>
		);
		return (
			<div className="content-container">
				<Grid container direction="row" justify="center" spacing={3}>
					<Grid item xs={12}>
						<div className="page-title">
							"{' '}
							<span className="search-query">
								{this.props.userInput}
							</span>{' '}
							"
						</div>
						<div className="large-italic">
							Found {commonIngred.length} results for "{this.props.userInput}":
						</div>
						<List component="nav" aria-label="search results">
							
						</List>
					</Grid>
				</Grid>
			</div>
		);
	}
}

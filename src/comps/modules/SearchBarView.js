import React, { Component } from 'react';
//import algoliasearch from 'algoliasearch/lite';
//import { InstantSearch } from 'react-instantsearch-dom';
import SearchBar from './SearchBar.js';

// const searchClient = algoliasearch(
//   'YourApplicationID',
//   'YourSearchOnlyAPIKey'
// );

export default class SearchBarView extends Component {
	constructor(props) {
		super(props);
	}

	// The SearchController:
	// Gets search results from InstantSearch and updates SearchResultsView
	// If InstantSearch query returns empty,
	// run algoliaController to grab list of ingredients and update SearchResultsView
	componentDidUpdate() {}

	// takes in search input and runs a GET request to NutritionixAPI
	// returns list of ingredient data, formatted as IngredientModel(s)
	algoliaController = searchInput => {};

	// if list of ingredients for the SearchResultsView is empty, render link
	// allowing suggestion of new ingredient. Otherwise render list of suggested ingredients.
	render() {
		return (
			<div>
				<SearchBar />
			</div>
		);
	}
}

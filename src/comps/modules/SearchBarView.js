import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import SearchResultsView from './SearchResultsView';

const searchClient = algoliasearch(
  'YourApplicationID',
  'YourSearchOnlyAPIKey'
);

export class SearchBarView extends Component {
    constructor(props) {

    }
    
    // The SearchController:
    // Gets search results from InstantSearch and updates SearchResultsView
    // If InstantSearch query returns empty, 
    // run algoliaController to grab list of ingredients and update SearchResultsView
    componentDidUpdate() {

    }

    // takes in search input and runs a GET request to NutritionixAPI
    // returns list of ingredient data, formatted as IngredientModel(s)
    algoliaController = (searchInput) => {

    }

    render() {

    }
}


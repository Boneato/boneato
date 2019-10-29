import React, { Component } from 'react';
import algoliasearch from 'algoliasearch/lite';
import { InstantSearch } from 'react-instantsearch-dom';
import AlgoliaController from '../../cont/AlgoliaController';
import ResultsView from './ResultsView';

const searchClient = algoliasearch(
  'YourApplicationID',
  'YourSearchOnlyAPIKey'
);

export class SearchBarView extends Component {
    constructor(props) {

    }

    // calls AlgoliaController when InstantSearch does not find ingredients in database
    // AlgoliaController will update ResultsView with list of relevant ingredients.
    render() {

    }
}


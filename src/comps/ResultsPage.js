import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {List, ListItem, ListItemText} from '@material-ui/core';
import ResultCard from './modules/ResultCard';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  };


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
        return(
            <div>
                <List component="nav" aria-label="search results">
                    <ResultCard location='safeway' upvotes='4' downvotes='5'/>
                </List>
            </div>
        )
    }
}
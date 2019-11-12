import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';

export class ResultsPage extends Component {
    // takes in list of links with attached ingredient IDs
    constructor(props) {
        
    }
    
    // pre-conditions: must be accessed directly from the HomePage
    // post-conditions: 
    //      renders relevant search results provided by SearchBarView (AgoliaController)
    //      Each relevant result will be linked to their respective SpecingPage.
    render() {
        return(
            <p>hello</p>
        )
    }
}
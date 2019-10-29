import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import { ReactRouterController } from 'react-router-dom';

export class NavBar extends Component {
    
    // pre-conditions: application is open, sign-in status recieved as true or false in props
    // post-conditions: passes props to render proper navbar links
    constructor(props) {}
    
    // post-conditions:
    //      if user signed in, render "Signed in as 'username'" link
    //      otherwise render "Sign In" link.
    //      render "Find Ingredients", "About" links
    //      renders logo which links to homepage
    render () {

    }
}
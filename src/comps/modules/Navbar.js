import React, { Component } from 'react';
import logo from '../../assets/logo.svg';
import { NavLink } from 'react-router-dom';
import { Link, Typography, Select, MenuItem, FormControl } from '@material-ui/core';
import { InputLabel } from '@material-ui/core/esm';
import { makeStyles } from '@material-ui/core/styles';

export default class Navbar extends Component {
    
    // pre-conditions: application is open, sign-in status recieved as true or false in props
    // post-conditions: passes props to render proper navbar links
    constructor(props) {

    }

    
    
    // post-conditions:
    //      if user signed in, render "Signed in as 'username'" link
    //      otherwise render "Sign In" link.
    //      render "Find Ingredients", "About" links
    //      renders logo which links to homepage
    render () {
        var loginLink = 1;

        const useStyles = makeStyles(theme => ({
            link: {
              margin: theme.spacing(1),
            },
          }));

        const classes = useStyles();
        const preventDefault = event => event.preventDefault();

        if (this.props.currentUser) {
            loginLink = 
            <FormControl className={classes.formControl}>
                <InputLabel id="simple-select-label">Signed in as ~current user~</InputLabel>
                <Select
                    labelId="simple-select-label"
                    id="simple-select"
                    onChange={handleChange}                    
                >
                    <MenuItem onClick={this.props.handleSignOut}>Sign out</MenuItem>
                </Select>
            </FormControl>;
        } else {
            loginLink = <Link href="/LoginPage" className="nav-link">Sign In</Link>
        }

        const handleChange = event =>{
            // function that probably is a link?
        };

        return(
            <header>
                <nav className='navbar'>
                    <div>
                        //the logo will go here i think?
                    </div>
                    <div>
                    <Typography>
                        <Link href="/SpecIngPage" onClick={preventDefault} className={classes.link}>
                            Find Ingredients
                        </Link>
                        <Link href="/AboutPage" onClick={preventDefault} className={classes.link}>
                            About
                        </Link>
                        {loginLink}
                    </Typography>
                    </div>
                </nav>
            </header>
        );
    }
}
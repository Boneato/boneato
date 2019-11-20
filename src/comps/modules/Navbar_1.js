import React, { Component } from 'react';
// import logo from '../../assets/logo.svg';
import PropTypes from 'prop-types';
import { NavLink } from 'react-router-dom';
import { Box, Link, Typography, Select, MenuItem, FormControl, AppBar, Tabs, Tab } from '@material-ui/core';
import { InputLabel } from '@material-ui/core/esm';
import { makeStyles } from '@material-ui/core/styles';
//import Navbar from './modules/Navbar.js';
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import ResultsPage from '../ResultsPage';
import SpecingPage from '../SpecingPage';
import AboutPage from '../AboutPage';
import {Route, Switch, Redirect} from 'react-router-dom';
//import logo from '../imgs/bonito_logo-03.png';

const useStyles = makeStyles(theme => ({
    link: {
        margin: theme.spacing(1),
    },
}));

function a11yProps(index) {
    return {
        id: `nav-tab-${index}`,
        'aria-controls': `nav-tabpanel-${index}`,
    };
}

function TabPanel(props) {
    const { children, value, index, ...other } = props;

    return (
        <Typography
            component="div"
            role="tabpanel"
            hidden={value !== index}
            id={`nav-tabpanel-${index}`}
            aria-labelledby={`nav-tab-${index}`}
            {...other}
        >
            <Box p={3}>{children}</Box>
        </Typography>
    );
}

TabPanel.propTypes = {
    children: PropTypes.node,
    index: PropTypes.any.isRequired,
    value: PropTypes.any.isRequired,
};


export default function Navbar(props) {
    // post-conditions:
    //      if user signed in, render "Signed in as 'username'" link
    //      otherwise render "Sign In" link.
    //      render "Find Ingredients", "About" links
    //      renders logo which links to homepage
    var loginLink = <Link href="/LoginPage" className="nav-link">Sign In</Link>;
    const preventDefault = event => event.preventDefault();
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    if (props.currentUser) {
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
    }


    function LinkTab(props) {
        return (
          <Tab
            component="a"
            onClick={event => {
              event.preventDefault();
            }}
            {...props}
          />
        );
      }

      const handleChange = (event, newValue) => {
        setValue(newValue);
      };



    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                    aria-label="nav tabs example"
                >
                    <LinkTab label="Find Ingredients" to="/SpecIngPage" {...a11yProps(0)} />
                    <LinkTab label="About" to="/AboutPage" {...a11yProps(1)} />
                    <LinkTab label="Page Three" href="/ResultsPage" {...a11yProps(2)} />
                </Tabs>
            </AppBar>
            <Switch>
            <Route path="/HomePage" component={HomePage} />
            <Route path="/AboutPage" component={AboutPage} />
            <Route path="/LoginPage" component={LoginPage} />
            <Route path="/ResultsPage" component={ResultsPage} />
            <Route path='/SpecIngPage' component={SpecingPage} />
          </Switch>
            {/* <TabPanel value={value} index={0}>
                Find Ingredients
            </TabPanel>
            <TabPanel value={value} index={1}>
                sup hoes
            </TabPanel>
            <TabPanel value={value} index={2}>
                Page Three
            </TabPanel> */}
        </div>
        // <header>
        //     <nav className='navbar'>
        //         <div>
        //             // i'm going to make this more material freindly
        //         </div>
        //         <div>
        //         <Typography>
        //             <NavLink to="/SpecIngPage" className={classes.link}>
        //                 Find Ingredients
        //             </NavLink>
        //             <NavLink to="/AboutPage" className={classes.link}>
        //                 About
        //             </NavLink>
        //             {loginLink}
        //         </Typography>
        //         </div>
        //     </nav>
        // </header>
    );
}
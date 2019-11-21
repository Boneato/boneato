import React from 'react';
import PageShell from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {Link} from '@material-ui/core'
import HomePage from '../HomePage';
import LoginPage from '../LoginPage';
import ResultsPage from '../ResultsPage';
import SpecingPage from '../SpecingPage';
import AboutPage from '../AboutPage';
import {Route, Switch, Redirect} from 'react-router-dom';

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

const useStyles = makeStyles(theme => ({
    root: {
        flexGrow: 1,
        backgroundColor: theme.palette.background.paper,
    },
}));

export default function NavTabs() {
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

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
                    <Tab label="Home Page" href="/HomePage" />
                    <Tab label="About Page" href="/AboutPage"/>
                    {/* I'm not going to make any more until I can figure this out */}
                </Tabs>
            </AppBar>

            <Switch>
                <Route path="/HomePage" component={HomePage} />
                <Route path="/AboutPage" component={AboutPage} />
            </Switch>
        </div>
    );
}
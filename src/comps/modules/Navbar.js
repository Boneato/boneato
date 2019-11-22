import React from 'react';
import PropTypes from 'prop-types';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import {FormControl, InputLabel, Select, MenuItem} from '@material-ui/core'
import bonito_logo from '../../imgs/bonito_logo-03.png';

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

export default function NavTabs(props) {
    var loginlink = <Tab label="Log in" href="/LoginPage" />
    const classes = useStyles();
    const [value, setValue] = React.useState(0);

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };

    if (props.currentUser) {
        loginlink =
            <FormControl className={classes.formControl}>
                <InputLabel>Signed in as {props.currentUser.name}</InputLabel>
                <Select
                    onChange={handleChange}
                >
                    <MenuItem onClick={this.props.handleSignOut}>Sign out</MenuItem>
                </Select>
            </FormControl>;
    }


    return (
        <div className={classes.root}>
            <AppBar position="static">
                <Tabs
                    variant="fullWidth"
                    value={value}
                    onChange={handleChange}
                >
                    <Tab icon={<img src={bonito_logo}/>} href="/HomePage" />
                    <Tab label="Find Ingredients" href="/HomePage" />
                    <Tab label="About" href="/AboutPage"/>
                    {loginlink}
                </Tabs>
            </AppBar>
        </div>
    );
}
import React from 'react';
import PropTypes from 'prop-types';
import {
    Button, Popper, Grow, Paper, 
    ClickAwayListener, MenuList
} from '@material-ui/core';
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Tabs from '@material-ui/core/Tabs';
import Tab from '@material-ui/core/Tab';
import Typography from '@material-ui/core/Typography';
import Box from '@material-ui/core/Box';
import { FormControl, InputLabel, Select, MenuItem } from '@material-ui/core'
import bonito_logo from '../../imgs/bonito_logo-03.png';
import Toolbar from '@material-ui/core/Toolbar';
import Grid from '@material-ui/core/Grid';
import {Link} from 'react-router-dom';
import KeyboardArrowDownIcon from '@material-ui/icons/KeyboardArrowDown';

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
    const classes = useStyles();
    const [value, setValue] = React.useState(0);
    const [open, setOpen] = React.useState(false);
    const anchorRef = React.useRef(null);

    const handleToggle = () => {
        setOpen(prevOpen => !prevOpen);
    };

    const handleClose = event => {
        if (anchorRef.current && anchorRef.current.contains(event.target)) {
            return;
        }
        setOpen(false);
    };
    
    function handleListKeyDown(event) {
        if (event.key === 'Tab') {
        event.preventDefault();
        setOpen(false);
        }
    }

    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    // return focus to the button when we transitioned from !open -> open
    const prevOpen = React.useRef(open);
    React.useEffect(() => {
        if (prevOpen.current === true && open === false) {
        anchorRef.current.focus();
        }
        prevOpen.current = open;
    }, [open]);
 
    const handleSignOut = (event) => {
        console.log("signed out")
        event.preventDefault();
        props.handleSignOut();
        handleClose(event);
    }

    var loginLink = (
        <Grid container alignItems="flex-start" justify="flex-end" direction="row">
            <Tabs
            className="nav-tabs"
            //value={value}
            onChange={handleChange}
            >   
                <Tab label="Find Ingredients" component={Link} to="/" />
                <Tab label="About"component={Link} to='/AboutPage' />
                <Tab label="Login" component={Link} to='/LoginPage' />
            </Tabs>
        </Grid>
    )
    var chevronDownIcon = (
        <KeyboardArrowDownIcon />
    );
    
    if (props.loggedIn) {
        loginLink = (
            <Grid container alignItems="flex-start" justify="flex-end" direction="row">
                <Tabs
                className="nav-tabs"
                //value={value}
                onChange={handleChange}
                >   
                    <Tab label="Find Ingredients" component={Link} to="/" />
                    <Tab label="About"component={Link} to='/AboutPage' />
                    <Tab label={localStorage.getItem("userName")}
                    ref={anchorRef}
                    aria-controls={open ? 'menu-list-grow' : undefined}
                    aria-haspopup="true"
                    onClick={handleToggle} />
                </Tabs>
                {/* <Button
                ref={anchorRef}
                aria-controls={open ? 'menu-list-grow' : undefined}
                aria-haspopup="true"
                onClick={handleToggle} 
                >
                    Hello! {localStorage.getItem("userName")}
                </Button> */}
                <Popper open={open} anchorEl={anchorRef.current} role={undefined} transition disablePortal>
                {({ TransitionProps, placement }) => (
                    <Grow
                    {...TransitionProps}
                    style={{ transformOrigin: placement === 'bottom' ? 'center top' : 'center bottom' }}
                    >
                    <Paper>
                        <ClickAwayListener onClickAway={handleClose}>
                        <MenuList autoFocusItem={open} id="menu-list-grow" onKeyDown={handleListKeyDown}>
                            <MenuItem onClick={handleSignOut}>Logout</MenuItem>
                        </MenuList>
                        </ClickAwayListener>
                    </Paper>
                    </Grow>
                )}
                </Popper>
            </Grid>
        );
    }
    return (
        <div className={classes.root}>
            <AppBar position="static" style={{ background: 'transparent', boxShadow: 'none'}} className="nav-content">
                <Toolbar>
                    <Typography variant="h6">
                        <a href="/"><img src={bonito_logo} className="bonito-logo" /></a>
                    </Typography>
                    {loginLink}
                </Toolbar>
            </AppBar>
        </div>
    );
}
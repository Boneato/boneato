import React, { Component } from 'react';
import { voteTotal, canVote } from '../../cont/VotingController';
import Button from '@material-ui/core/Button';
import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';

var voteRight = true;

const BootstrapButton = withStyles({
    root: {
        borderRadius: 4,
        boxShadow: 'none',
        textTransform: 'uppercase',
        fontSize: 14,
        fontWeight: 600,
        width: '100%',
        padding: '6px 12px',
        border: 'none',
        lineHeight: 1.5,
        backgroundColor: '#E1C1C1',
        fontFamily: [
            'Open Sans',
            '-apple-system',
            'BlinkMacSystemFont',
            '"Segoe UI"',
            'Roboto',
            '"Helvetica Neue"',
            'Arial',
            'sans-serif',
        ].join(','),
        '&:hover': {
            backgroundColor: '#DAB2B2',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#DAB2B2',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(212, 212, 212,.5)',
        },
    },
})(Button);


const useStyles = makeStyles(theme => ({
    root: {
        display: 'flex',
        flexWrap: 'wrap',
    },
    margin: {
        marginBottom: theme.spacing(2),
    },
    
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0A8576',
        }
    },
});

var voteRight = false;

export default class DownVoteButton extends Component {

    //locationInfo includes:
    // ingredientID
    // locationID
    // upvotes
    // downvotes
    // userID
    // dateFirstReport
    // lat
    // long
    // address
    // name
    constructor(props) {
        super(props);

        this.locationInfo = props.locationInfo;
    }
    
    render() {
        return (
            <button>work in ~progress~</button>
            //<button onClick={componentDidUpdate(locationInfo)}> <b>{locationInfo.downvotes}</b> DIDN'T FIND</button>
        )
    }

}

// updates vote counter when clicked
function componentDidUpdate(locationInfo) {
    //this right now is taking in the user's ID that initially logged the location.
    //we need to pass the CURRENT user's ID as a prop somehow
    if (canVote(locationInfo.userID)) {
        voteTotal(locationInfo.ingredientID, locationInfo.userID, locationInfo.locationID, false, true);
        voteRight = true;
    }
}



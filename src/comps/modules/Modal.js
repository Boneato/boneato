import React, { Component, useEffect } from 'react';
import NewIngredientsController from '../../cont/NewIngredientsController';
import {
    Dialog, DialogTitle,
    TextField,
    DialogContent, DialogContentText, Tab
} from '@material-ui/core';
import checkmark from '../../assets/checkmark.svg';
import SvgIcon from '@material-ui/core/SvgIcon';
import { classes } from 'istanbul-lib-coverage';

import {
    fade,
    ThemeProvider,
    withStyles,
    makeStyles,
    createMuiTheme,
} from '@material-ui/core/styles';
import InputBase from '@material-ui/core/InputBase';
import InputLabel from '@material-ui/core/InputLabel';
import FormControl from '@material-ui/core/FormControl';
import FormHelperText from '@material-ui/core/FormHelperText';
import ErrorIcon from '@material-ui/icons/ErrorOutline';
import Button from '@material-ui/core/Button';
import GooglePlacesAutocomplete from 'react-google-places-autocomplete';
import firebase from 'firebase';
import { db } from '../../firestore';
import { geocodeByAddress, getLatLng } from 'react-google-places-autocomplete';

require('firebase/firestore');

const BootstrapInput = withStyles(theme => ({
    root: {
        'label + &': {
            marginTop: '1.6em',
        },
    },
    input: {
        borderRadius: 6,
        position: 'relative',
        backgroundColor: '#F2F2F2',
        border: '1px solid #999999',
        fontSize: '16px',
        width: '100%',
        padding: '10px 12px',
        transition: theme.transitions.create(['border-color', 'box-shadow']),
        // Use the system font instead of the default Roboto font.
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
        '&:focus': {
            boxShadow: `${fade(theme.palette.primary.main, 0.25)} 0 0 0 0.2rem`,
            borderColor: theme.palette.primary.main,
        },
    },
}))(InputBase);

const BootstrapButton = withStyles({
    root: {
        borderRadius: 6,
        boxShadow: 'none',
        textTransform: 'none',
        fontSize: 16,
        fontWeight: 600,
        width: '100%',
        padding: '6px 12px',
        border: 'none',
        lineHeight: 1.5,
        backgroundColor: '#0A8576',
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
            backgroundColor: '#087568',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#087568',
        },
        '&:focus': {
            boxShadow: '0 0 0 0.2rem rgba(10, 133, 118,.5)',
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

// pre-conditions: 
//      props must be filled with a Header text 
//      and DOM elements to fill Modal.
// post-conditions:
//      passes props and renders modal in render function
export function Modal(props) {
    const classes = useStyles();
    const [open, setOpen] = React.useState(true);
    // have an if statement outside of component that renders this component
    // to keep button seperate from this component
    const handleClickOpen = () => {
        setOpen(true);
    }
    const handleClose = () => {
        setOpen(false);
    }
    // renders given DOM elements inside of modal
    return (
        <Dialog open={props.open} onClose={props.handleClose}>
            <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
            <DialogContent>
                {props.content}
            </DialogContent>
        </Dialog>
    );
}

export function NewIngredientModal(props) {
    const classes = useStyles();
    const [submit, setSubmit] = React.useState(false);
    const [ingredName, setIngredName] = React.useState("");
    const handleClose = () => {
        //e.preventDefault();
        console.log(ingredName);
        if (ingredName.length > 0) {
            setSubmit(true);
            return true;
        } else {
            return false;
        }
    }
    var ingredItems = (
        <form className={classes.root} noValidate>
            <ThemeProvider theme={theme}>

                <FormControl fullWidth className={classes.margin}>
                    <InputLabel shrink required htmlFor="bootstrap-input">
                        Ingredient Name
                    </InputLabel>
                    <BootstrapInput inputProps={{ maxLength: 150 }} aria-label="ingredient name to submit" onChange={(e) => setIngredName(e.target.value)} id="bootstrap-input" />
                </FormControl>
                <FormControl fullWidth className={classes.margin}>
                    <InputLabel shrink htmlFor="bootstrap-input">
                        Comments
                    </InputLabel>
                    <BootstrapInput inputProps={{ maxLength: 1000 }} aria-label="comments on ingredient submission" id="bootstrap-input" />
                </FormControl>

                <BootstrapButton aria-label="submit the new ingredient form" variant="contained" color="primary" disableRipple className={classes.margin} onClick={handleClose}>
                    Submit
                </BootstrapButton>

                {/*error state for "Ingredient Name" field*/}
                <FormControl fullWidth className={classes.margin}>
                    <InputLabel shrink required>
                        Ingredient Name
                    </InputLabel>
                    <BootstrapInput inputProps={{ maxLength: 150 }} aria-label="ingredient name to input" id="bootstrap-input" />
                    <FormHelperText id="component-error-text">
                        <ErrorIcon style={{ height: '16px', width: '16px', paddingRight: '3px', marginBottom: '-3px' }} />
                        This field cannot be left blank.
                    </FormHelperText>
                </FormControl>

                {/* error state for "Submit" button*/}
                <BootstrapButton aria-label="submit the new ingredient form" variant="contained" color="primary" disableRipple className={classes.margin}>
                    Submit
                </BootstrapButton>
                <div id="form-error-container">
                    <FormHelperText id="form-error-text" className={classes.margin}>Please resolve the errors above.</FormHelperText>
                </div>

            </ThemeProvider>
        </form>
        /*
    <div>
        <TextField
            id="filled-basic"
            label="Ingredient Name"
            margin="dense"
            variant="filled"
            fullWidth
            onChange={(e) => setIngredName(e.target.value)}
            error={ingredName === ""}
            helperText={ingredName === "" ? "This field cannot be left blank" : ' '}
            value={ingredName}
        />
        <TextField
            id="filled-basic"
            label="Comments (optional)"
            margin="normal"
            variant="filled"
            fullWidth
        />
        <Button onClick={handleClose}>
            Submit Ingredient
        </Button>
    </div>
    */
    );
    if (submit) {
        ingredItems = (
            <div>
                <Tab icon={<img src={checkmark}></img>} />
            </div>
        )
    }
    return (
        <Modal title={"Suggest a new ingredient"} content={ingredItems} />
    );
}

// props must contain ingredientID
export function NewLocationModal(props) {
    const classes = useStyles();
    const [submit, setSubmit] = React.useState(false);
    const [userInput, setInput] = React.useState("");
    // {lat: number, lng: number}
     const [latLng, setLatLng] = React.useState({});
    const handleClose = () => {
        props.onClose(false);
    }
    // const [input, setLocationInput] = React.useState({
    //     id: "your"
    // });
    var autocompletionRequest = {
        bounds: [
            { lat: 47.720255, lng: -122.402083 },
            { lat: 47.589166, lng: -122.286779 }
          ],
        location: { lat: 47.6062, lng: -122.3321 },
        componentRestrictions: {
            country: ["us"]
        },
        types: ['establishment']
    }

    
    // TODO: RENDER ONLY WHEN USERINPUT IS EMPTY
    let error = (
        <FormHelperText id="component-error-text" error={userInput === ""}>
            <ErrorIcon style={{ height: '16px', width: '16px', 
            paddingRight: '3px', marginBottom: '-3px' }} />
                This field cannot be left blank.
        </FormHelperText>
    );
    
    const addNewLocation = (input, latLng) => {
        console.log("INPUT ID " + input["id"])
        console.log("Lat: " + " " + latLng["lat"])
        db.firestore().collection("ingredients").doc("fdZmHYK4ARcA87HRcDrZ").collection("locations")
        .doc(input["id"]).set(
            {
                name: input["structured_formatting"]["main_text"],
                address: input["description"],
                downvotes: 0,
                upvotes: 0,
                userid: props.user.uid,
                dvcounter: 0,
                id: input["id"],
                time: firebase.firestore.FieldValue.serverTimestamp(),
                lat: latLng["lat"],
                long: latLng["lng"],
                userName: props.user.displayName
            }
        ).then(function() {
            console.log("ingredient location has been stored")
        }).catch(function(error) {
            console.log("error in addNewLocation: " + error)
        });
    }

    const handleSelectLoc = (input) => {
        console.log("INPUT ID AFTER SET" + input["id"]);
        setInput(input);
        geocodeByAddress(input["description"]).then(results => getLatLng(results[0]))
        .then(({lat, lng}) => {
            // {lat: number, lng: number}
            setLatLng({lat, lng});

        }).catch((error) => {
            console.log("error: " + error)
        }).finally(() => {
        });
        console.log(input);
        // TODO: add date and change ID to props.ingredientID
        
    }
    
    const handleClick = () => {
        if (userInput) {
            addNewLocation(userInput, latLng);
            handleClose();
        } else {

        }
    }

    var locationItems = (
        <form className={classes.root} noValidate>
            <ThemeProvider theme={theme}>

                <FormControl fullWidth className={classes.margin}>
                    <GooglePlacesAutocomplete id="bootstrap-input"
                        placeholder="Store name or address..."
                        autocompletionRequest={autocompletionRequest}
                        onSelect={handleSelectLoc}
                        onChange={(event) => {
                            console.log(event.target.value)
                            setInput(event.target.value)
                        }
                        }
                        value={userInput}
                    />
                    {userInput === "" ? error: ""}
                </FormControl>

                <BootstrapButton aria-label="submit new ingredient location" variant="contained" color="primary" 
                disableRipple className={classes.margin} onClick={handleClick}>
                    Submit
                </BootstrapButton>
            </ThemeProvider>
        </form>
    )
        /*
        <div>
            <TextField
             id="filled-basic"
             label="Location"
             margin="normal"
             variant="filled"
             fullWidth
            />
            <Button onClick={NewIngredientsController}>
                Submit
            </Button>
        </div>
        */
    if (submit) {
        locationItems = (
            <div>
                <Tab icon={<img src={checkmark}></img>} />
            </div>
        )
    }
    return (
        <Modal open={props.open} title={"Report a new " + props.ingredName + " location"} content={locationItems} handleClose={handleClose}/>
    );
}
export default Modal;
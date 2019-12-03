import React, { Component } from 'react';
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

//////////////////////////////////////////////////////


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
        <Dialog open={open} onClose={handleClose}>
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
                    <BootstrapInput id="bootstrap-input" />
                </FormControl>
                <FormControl fullWidth className={classes.margin}>
                    <InputLabel shrink htmlFor="bootstrap-input">
                        Comments
                    </InputLabel>
                    <BootstrapInput id="bootstrap-input" />
                </FormControl>

                <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
                    Submit
                </BootstrapButton>

                {/*error state for "Ingredient Name" field*/}
                <FormControl fullWidth className={classes.margin}>
                    <InputLabel shrink required>
                        Ingredient Name
                    </InputLabel>
                    <BootstrapInput id="bootstrap-input" />
                    <FormHelperText id="component-error-text">
                        <ErrorIcon style={{ height: '16px', width: '16px', paddingRight: '3px', marginBottom: '-3px' }} />
                        This field cannot be left blank.
                    </FormHelperText>
                </FormControl>

                {/* error state for "Submit" button*/}
                <BootstrapButton variant="contained" color="primary" disableRipple className={classes.margin}>
                    Submit
                </BootstrapButton>
                <div id="form-error-container">
                <FormHelperText id="form-error-text">Please resolve the errors above.</FormHelperText>
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
            <Tab icon={<img src={checkmark}></img>}/>
        </div>
        )
    }
    return (
        <Modal title={"Suggest a new ingredient"} content={ingredItems}/>
    );
}

export function NewLocationModal(props) {
    const [submit, setSubmit] = React.useState(false);
    var locationItems = (
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
    );
    if (submit) {
        locationItems = (
        <div>
            <Tab icon={<img src={checkmark}></img>}/>
        </div>
        )
    }
    return (
        <Modal title={"Report a new " + props.ingredName + " location"} content={locationItems}/>
    );
}

export default Modal;
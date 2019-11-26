import React, { Component } from 'react';
import NewIngredientsController from '../../cont/NewIngredientsController';
import { 
    Dialog, DialogTitle, 
    Button, TextField, 
    DialogContent, DialogContentText, Tab
    } from '@material-ui/core';
import checkmark from '../../assets/checkmark.svg';
import SvgIcon from '@material-ui/core/SvgIcon';
import { makeStyles } from '@material-ui/core/styles';
import { classes } from 'istanbul-lib-coverage';

const useStyles = makeStyles({
    cls1: {
        fill: "none",
        stroke: "#7e7e7e",
        strokeLinecap: "round",
        strokeLinejoin: "round",
        strokeWidth: "5px"
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
        <Dialog open={open}>
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
    const [filled, setFilled] = React.useState(true);
    const [ingredName, setIngredName] = React.useState("");
    const verifySubmit = () => {
        if (filled) {
            setSubmit(true);
        }
    }
    const handleClose = (e) => {
        e.preventDefault();
        if (ingredName.length < 1) {
            return true;
        } else {
            return false;
        }
    }
    var ingredItems = (
    <div>
        <TextField
            id="filled-basic"
            label="Ingredient Name"
            margin="dense"
            variant="filled"
            fullWidth
            onChange={(e) => {
                setIngredName(e.target.value)
                console.log(ingredName.length)
                console.log(handleClose(e))
            }}
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
        <Button onClick={verifySubmit}>
            Submit Ingredient
        </Button>
    </div>
    );
    if (submit) {
        ingredItems = (
        <div>
            <Tab icon={<img src={checkmark}></img>}/>
        </div>
        )
    }
    return (
        <Modal title={"Suggest a new ingredient"} content={ingredItems} handleClose={handleClose}/>
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
import React, { Component } from 'react';
import NewIngredientsController from '../../cont/NewIngredientsController';
import { Dialog, DialogTitle, Button, TextField } from '@material-ui/core';


// pre-conditions: 
//      props must be filled with a Header text 
//      and DOM elements to fill Modal.
// post-conditions:
//      passes props and renders modal in render function
export function Modal(props) {
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
            <DialogTitle>{props.title}</DialogTitle>
            {props.content}
        </Dialog>
    );
}

export function NewIngredientModal(props) {
    var signInItems = (
        <form>
            <TextField required id='standard-required' 
                label="Ingredient Name", 
                variant="outlined">
            />
            <Button onClick={NewIngredientsController}>
                Submit Ingredient
            </Button>
        </form>
    
    );
    if ()
    return (
        <Modal title={"Suggest a new ingredient"} content={signInItems}>
        </Modal>
    );
}

export function LocationForm(props) {
    var form = (
        <form>
            <div>
                <TextField required id="standard-required" label="Required"
                    defaultValue="Suggest a new location"
                className={classes.textField}
                margin="normal"
                />
            </div>
        </form>
    );

    return (
        <Modal title={"Suggest a New Location"} content={form}></Modal>
    );
}

export default Modal;
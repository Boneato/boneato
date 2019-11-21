import React, { Component } from 'react';
import NewIngredientsController from '../../cont/NewIngredientsController';
import { Dialog, DialogTitle, 
        Button, TextField, DialogContent
       } from '@material-ui/core';

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
            <DialogTitle id="form-dialog-title">{props.title}</DialogTitle>
            <DialogContent>
                {props.content}
            </DialogContent>
        </Dialog>
    );
}

export function NewIngredientModal(props) {
    var ingredItems = (
    <div>
        <TextField
            id="filled-basic"
            label="Ingredient Name"
            margin="dense"
            variant="filled"
            fullWidth
        />
        <TextField
            id="filled-basic"
            label="Comments (optional)"
            margin="normal"
            variant="filled"
            fullWidth
        />
        <Button onClick={NewIngredientsController}>
            Submit Ingredient
        </Button>
    </div>
    );
    return (
        <Modal title={"Suggest a new ingredient"} content={ingredItems}/>
    )
}

export function NewLocationModal(props) {
    var locationItems = (
        <div>
            <TextField/>
            <Button onClick={NewIngredientsController}>
                Submit
            </Button>
        </div>
    );
    return (
        <Modal title={"Report a new " + props.ingredName + " location"}/>
    );
}

export default Modal;
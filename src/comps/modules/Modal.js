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
    ingredItems = (
        <div>
            <HomeIcon/>
        </div>
    )
    function HomeIcon(props) {
        return (
          <Tab icon={<img src={checkmark}></img>}/>
        );
      }
    //if (props.submitted) {
        
    //}<path d="M1043 106-85 522-77 627-64 366-69 471-56"/>
    //<path d="M1043 475-2v47-86A520-26 520-26 0 1 1 734-52 47-54"/>
    return (                

        <Modal title={"Suggest a new ingredient"} content={ingredItems}/>
    );
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

function CheckMark(props) {
    const classes = useStyles();

    return (
        <SvgIcon {...props}>
           
<path className={classes.cls1} d="M1043 106-85 522-77 627-64 366-69 471-56"/>
<path className={classes.cls1} d="M1043 475-2v47-86A520-26 520-26 0 1 1 734-52 47-54"/>
        </SvgIcon>
   );
}

export default Modal;
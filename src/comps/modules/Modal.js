import React, { Component } from 'react';
import NewIngredientsController from '../../cont/NewIngredientsController';
import { Dialog } from '@material-ui/core';

export function Modal(props) {

    // pre-conditions: 
    //      props must be filled with a Header text 
    //      and DOM elements to fill Modal.
    // post-conditions:
    //      passes props and renders modal in render function
    constructor(props) {

    }

    // renders given DOM elements inside of modal
    render() {
        return(<body></body>);
    }
}

export function Modal(props) {
    const [open, setOpen] = React.useState(false);

    const handleClickOpen = () => {
        setOpen(true);
    }

    const handleClose = () => {
        setOpen(false);
    }
    
    return (
        <Dialog>
            <DialogTitle>{props.title}</DialogTitle>
        </Dialog>
    );
}
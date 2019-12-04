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
        backgroundColor: '#CAE1C1',
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
            backgroundColor: '#BADBAE',
            boxShadow: 'none',
        },
        '&:active': {
            boxShadow: 'none',
            backgroundColor: '#BADBAE',
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
        marginBottom: theme.spacing(1),
    },
    
}));

const theme = createMuiTheme({
    palette: {
        primary: {
            main: '#0A8576',
        }
    },
});

export default function UpVoteButton(props) {
    let locationInfo = props.locationInfo;
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
    var upVoteButton = (
        <form className={classes.root} noValidate>
            <ThemeProvider theme={theme}>

                <BootstrapButton variant="contained" disableRipple className={classes.margin} onClick={componentDidUpdate(locationInfo)}>
                {locationInfo.upvotes} confirmed
                </BootstrapButton>

            </ThemeProvider>
        </form>
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
    );
    

    return (
        <div>
            {upVoteButton}    
        </div>


    );

}

// updates vote counter when clicked
function componentDidUpdate(locationInfo) {
    //this right now is taking in the user's ID that initially logged the location.
    //we need to pass the CURRENT user's ID as a prop somehow
    if (canVote(locationInfo.userID)) {
        voteTotal(locationInfo.ingredientID, locationInfo.userID, locationInfo.locationID, true, false);
        voteRight = true;
    }
}
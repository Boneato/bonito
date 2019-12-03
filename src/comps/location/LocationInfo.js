import React, {Component, useImperativeHandle} from 'react';
import UpVoteButton from '../location/UpVoteButton';
import DownVoteButton from '../location/DownVoteButton';
//import {loggedIn} from '../../cont/LoginController';
import Tab from '@material-ui/core/Tab';
//import {db} from '../../firestore';

export default function LocationInfo(props) {
    let locationInfo = props.locationInfo;
    // let locationInfo = {
    //     ingredientID: null,
    //     locationID:null,
    //     upVote: 0,
    //     downVote: 0,
    //     userID: null,
    //     dateFirstReport:null,
    // };
    let detailedLoca = getDetailedLocation(locationInfo.locationID)
    let index = props.index;
    let upDownVoteRight = null;
    let errorWarning = null;

<<<<<<< HEAD
   // if(!loggedIn(locationInfo.userID)){
        upDownVoteRight = <p>Please <Tab label="sign in with Google" href="../LoginPage" /> to share whether you foung this ingredient here. </p>
   // }
=======
    if(!loggedIn(locationInfo.userID)){
        upDownVoteRight = <p>Please <Tab label="sign in with Google" href="../LoginPage" /> to share whether you found this ingredient here. </p>
    }
>>>>>>> 76567df2bd34312c05a3a0b8baa30977a6bcdf9e

    if(locationInfo.downVote>= 5){
        errorWarning = <p>The 5 most recent voters reported that they didn't find this ingredient here.</p>
    }


    return(
        <div>
            {upDownVoteRight}
            {errorWarning}
            <span>
                <UpVoteButton locationInfo={locationInfo}/>
                <DownVoteButton locationInfo={locationInfo}/>
            </span>
            <span>
                <p><a>{index}</a>detailedLoca.locationName</p>
                <p>detailedLoca.locationAddress</p>
                <p>Reported By {detailedLoca.UserName} on {locationInfo.dateFirstReport}.</p>
            </span>
        </div>
        )
    
}

function getDetailedLocation(locationID) {
    let detailedLoca = {
        locationID: null,
        locationName: null,
        locationAddress: null,
        UserName: null,
    };
    //function to fetch other location infomation in location model
    return detailedLoca
}
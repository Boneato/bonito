import React, { Component } from 'react';
import { voteTotal, canVote } from '../../cont/VotingController';

//var voteRight = true;

export default class DownVote extends Component {

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

        this.state = {
            locationInfo: props.locationInfo
        }

    }

    handleClick = () => {
        voteTotal(this.props.updatefunction, this.props.ingredID, this.props.locID, this.state.locationInfo, false)
    }    

    render() {
        return (
            <button className="button-downvote" onClick={this.handleClick}>
                <b>{this.state.locationInfo.downvotes}</b> DIDN'T FIND
            </button>
        )
    }
}
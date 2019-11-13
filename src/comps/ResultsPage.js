import React, { Component } from 'react';
import { NavLink } from 'react-router-dom';
import {List, ListItem, ListItemLink, ListItemText} from '@material-ui/core';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';

function ListItemLink(props) {
    return <ListItem button component="a" {...props} />;
  }

export default class ResultsPage extends Component {
    // takes in list of links with attached ingredient IDs
    constructor(props) {
        
    }
    
    
    // pre-conditions: 
    //      must be accessed directly from the HomePage
    // post-conditions: 
    //      renders relevant search results provided by SearchBarView (AgoliaController)
    //      Each relevant result will be linked to their respective SpecingPage.
    render() {
        const { ingredientData } = this.props;

        <List component="nav" aria-label="search results">
        <ListItem button>
          <ListItemText primary="Trash" />
        </ListItem>
        <ListItemLink href="#simple-list">
          <ListItemText primary="Spam" />
        </ListItemLink>
      </List>

        return(
            <p>hello</p>
        )
    }
}
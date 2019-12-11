import React, { Component } from 'react';
import logo from '../assets/logo.svg';
import '../css/App.css';
import Navbar from './modules/Navbar.js';
import HomePage from './HomePage';
import LoginPage from './LoginPage';
import SpecingPage from './SpecingPage';
import AboutPage from './AboutPage';
import ResultsPage from './ResultsPage';
import { Route, Switch, Redirect, withRouter } from 'react-router-dom';
//import LoginController from '../cont/LoginController';
import { Modal, NewIngredientModal, NewLocationModal } from './modules/Modal';
import {CircularProgress} from '@material-ui/core';
import firebase from 'firebase';
import {GoogleSearch} from '../cont/PlacesController';
import axios from 'axios';
const NutrixURL = 'https://trackapi.nutritionix.com/v2/search/instant';
require("firebase/firestore");

// renders application with all neccesary components
export class App extends Component {
  constructor(props) {
    super(props);
    //this.signedIn = this.signedIn.bind(this);
    //var user = new LoginController(this.signedIn);
    this.state = {
      user: null,
      userInput: "",
      ingredList: [],
      loading: false
    }
  }

  handleSignIn = () => {
   
  }

  handleSignOut = () => {
    firebase.auth().signOut().then(function() {
      console.log("sign out successfull")
    }).catch(function(error) {
      // An error happened.
    });
  }

  componentDidMount() {
    this.authUnsubFunction = firebase.auth().onAuthStateChanged((firebaseUser) => {
      if (firebaseUser) {
        this.setState({user: firebaseUser, loading: false});
      } else {
        this.setState({user: null, loading: false});
      }
    });
  }

	// if the user is signed-in, will log user out when exiting the web application
  componentDidUpdate() {
  }

  componentWillUnmount(){
    this.authUnsubFunction();

    this.setState({errorMessage: null});
    firebase.auth().signOut().then(function() {
      console.log("sign out successfull")}).catch(
      (error) => {
        this.setState({errorMessage : error.message});
      }
    );
  }

  grabSearchInput = (input) => {
    this.setState({userInput: input});
  }  // getNutrix = (food) => {
  //   console.log("getNutrix called")
  //   return axios.get(NutrixURL, {
  //     headers: {
  //       'x-app-id': '3e44cfbe',
  //       'x-app-key': 'be52ed410ebd23630810aa7ca9807c74'
  //     },
  //     params: {
  //       query: food,
  //       self: false,
  //       common_general: false,
  //       common_restaurant: false
  //     }
  //   });
  // }


  // grabSearchInput = (input) => {
  //   this.setState({loading: true});
  //   this.setState({userInput: input});
  //   let nutrixPromise = this.getNutrix(input);
  //   let tempList = [];
  //   nutrixPromise.then((response) => {
  //     response.data['branded'].forEach((item) => {
  //       //console.log("inside for each loop")
  //       //console.log(food.toLowerCase());
  //       let itemName = item['food_name'].toLowerCase();
  //       if (itemName.includes(input.toLowerCase()) && !itemName.includes("/")) {
  //         //console.log("food name contains query")
  //         tempList.push(item["food_name"]);
  //         //console.log(tempList);
  //       }
  //     })
  //     this.setState({ingredList: tempList});
  //     this.setState({loading: false});
  //   })
  //   .catch((error) => {
  //     console.log("searchInput error: " + error)
  //   })
  // }

  // useEffect(() => {
	// 	const getNutrix = async food => {
	// 		console.log("getNutrix called")
	// 		var tempList = [];
	// 		try {
	// 			setList([]);
	// 			setFetch(true);
	// 			const response = await axios.get(NutrixURL, {
	// 				headers: {
	// 					'x-app-id': '3e44cfbe',
	// 					'x-app-key': 'be52ed410ebd23630810aa7ca9807c74'
	// 				},
	// 				params: {
	// 					query: food,
	// 					self: false,
	// 					common_general: false,
	// 					common_restaurant: false
	// 				}
	// 			});
	// 			response.data['branded'].forEach((item) => {
	// 				//console.log("inside for each loop")
	// 				//console.log(food.toLowerCase());
	// 				let itemName = item['food_name'].toLowerCase();
	// 				if (itemName.includes(food.toLowerCase()) && !itemName.includes("/")) {
	// 					//console.log("food name contains query")
	// 					tempList.push(item["food_name"])
	// 					//console.log(tempList);
	// 				}
	// 			})
	// 			setList(tempList);
	// 			//console.log("templist is:")
	// 			//console.log(tempList);
	// 			setFetch(false);
	// 		} catch (e) {
	// 			//console.log(e);
	// 			setList([]);
	// 			setFetch(false);
	// 		}
	// 	};
	// 	getNutrix(props.userInput);
  // }, []);
  
  // TODO: USE REDIRECT WHEN SEARCH IS INITIATED DO NOT USE TO= ON BUTTON PRESS
  render() {
    // if (this.state.loading) {
    //   return <CircularProgress />;
    // } else {
      console.log("app userinput" + this.state.userInput);
      let signedIn = false;
      let navbar = (
        <Navbar loggedIn={false} handleSignOut={this.handleSignOut}/>
      );
      if (this.state.user) {
        navbar = <Navbar loggedIn={true} handleSignOut={this.handleSignOut}/>
        signedIn = true;
      }

        return (
          <div>
            {navbar}
            <main>
              <Switch>
                <Route exact path="/" render={(routerProps) => (
                  <HomePage {...routerProps} grabSearchInput={this.grabSearchInput} />
                )}/>
                <Route path="/AboutPage" component={AboutPage} />
                <Route path="/LoginPage" render={(routerProps) => (
                  <LoginPage {...routerProps} signInCallback={this.handleSignIn} />
                )} />
                <Route path='/SpecIngPage/:ingredientID' render={(routerProps) => (
                  <SpecingPage {...routerProps} signedIn={this.state.user} />
                )} />
                <Route path='/results/:ingredientName' render={(routerProps) => (
                  <ResultsPage {...routerProps} 
                  userInput={this.state.userInput} 
                  />
                )} />
              </Switch>
            </main>
          </div>
        );
      }

}

export default withRouter(App);
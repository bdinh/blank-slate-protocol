import React, { Component } from 'react';
import './App.css';
import $ from 'jquery';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import '../node_modules/bootstrap/dist/js/bootstrap.min.js.map';
import { bindAll } from 'lodash';
import LoginView from './views/Login';
import SignUpView from './views/SignUp';
import Dashboard from './views/Dashboard';
import { Switch, Route, Redirect } from 'react-router-dom';
import firebase from 'firebase/app';
import CreateChannel from './views/CreateChannel';

let config = {
    apiKey: "AIzaSyAVu-yWQVgP-NQMz9xuKxjMJTfdDK5bNKw",
    authDomain: "react-chat-3c399.firebaseapp.com",
    databaseURL: "https://react-chat-3c399.firebaseio.com",
    projectId: "react-chat-3c399",
    storageBucket: "",
    messagingSenderId: "132053997914"
};
firebase.initializeApp(config);

// Main wrapper component in our application that handles the routing for our application as well
// as manages top level information in order to pass it on to other props
class App extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: "",
            displayName: "",
            activeSession: false,
            userId: "",
            allUsers: [],
            errorMessage: "",
            loginLoading: false,
        };
        bindAll(this, [
            'loginCallback',
            'signUpCallback',
            'signOutCallback',
            'updateUserList',
            'checkUserAuth'
        ]);
    }

    componentDidMount() {
        this.checkUserAuth();
    }


    updateUserList() {
        let usersArray = [];
        let usersRef = firebase.database().ref('users');
        usersRef.once('value')
            .then((snapshot) => {
                snapshot.forEach((user) => {
                    let data = user.val();
                    if (data.userId !== this.state.userId) {
                        usersArray.push({
                            label: data.displayName,
                            value: data.userId,
                            email: data.userEmail
                        });
                    }
                });
                this.setState({
                    allUsers: usersArray
                });
            });

    }


    componentWillUnmount() {
        this.authUnregFunc();
    }


    loginCallback() {

        let email = $('#loginEmail').val();
        let password = $('#loginPassword').val();

        firebase.auth().signInWithEmailAndPassword(email, password)
            .then(() => {
                this.checkUserAuth();
            })
            .catch((error) => {
                this.setState({
                    errorMessage: error
                });
            });
    }

    checkUserAuth() {

        let gloablThis = this;
        this.authUnregFunc = firebase.auth().onAuthStateChanged((user) => {
            if (user) {
                let displayName = user.displayName;
                let email = user.email;

                gloablThis.setState({
                    activeSession: true,
                    email: email,
                    displayName: displayName,
                    userId: user.uid
                });

                this.updateUserList();
            } else {
                return (<Redirect to='login'/>);
            }
        });

    }

    signUpCallback() {
        let email = $('#createEmail').val();
        let password = $('#createPassword').val();
        let displayName = $('#createDisplayName').val();

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                let user = firebase.auth().currentUser;

                user.updateProfile({
                    displayName: displayName,
                }).then(() => {

                    let usersRef = firebase.database().ref('users');
                    usersRef.push({
                        displayName: user.displayName,
                        userId: user.uid,
                        userEmail: user.email
                    });

                    this.updateUserList();

                    this.setState({
                        displayName: user.displayName,
                        userId: user.uid,
                        email: user.email
                    });

                }).catch(function(error) {
                    this.setState({
                        errorMessage: error
                    });
                });

                this.setState({
                    activeSession: true
                });

            })
            .catch((error) => {
                this.setState({
                    errorMessage: error
                });
            })
    }

    signOutCallback() {
        this.setState({
            activeSession: false
        });
        firebase.auth().signOut()
            .catch(err => console.log(err)); //log any errors for debugging
    }


  render() {
    return (

      <div className="App">
        <Switch>
            <Route exact path='/' push render={(routerProps) => (
                !this.state.activeSession ? <Redirect to='/login'/>
                :   ( <Dashboard
                        {...routerProps}
                        activeSession={this.state.activeSession}
                        displayName={this.state.displayName}
                        userId={this.state.userId}
                        userEmail={this.state.email}
                        allUsers={this.state.allUsers}
                        signOutCallback={this.signOutCallback} />)
            )}/>
            <Route exact path='/channels' render={(routerProps) => (
                ( <Dashboard
                    {...routerProps}
                    activeSession={this.state.activeSession}
                    displayName={this.state.displayName}
                    userId={this.state.userId}
                    userEmail={this.state.email}
                    allUsers={this.state.allUsers}
                    signOutCallback={this.signOutCallback} />)
            )}/>
            <Route path='/channels/:channelName' render={(routerProps) => (
                ( <Dashboard
                    {...routerProps}
                    activeSession={this.state.activeSession}
                    displayName={this.state.displayName}
                    userEmail={this.state.email}
                    userId={this.state.userId}
                    allUsers={this.state.allUsers}
                    signOutCallback={this.signOutCallback} />)
            )}/>
          <Route path='/login' exact render={(routerProps) => (
              <LoginView
                  {...routerProps}
                  loginCallback={this.loginCallback}
                  activeSession={this.state.activeSession}
                  errorMessage={this.state.errorMessage}
              />
          )}/>
          <Route path='/join' exact render={(routerProps) => (
              <SignUpView
                  {...routerProps}
                  activeSession={this.state.activeSession}
                  signUpCallback={this.signUpCallback}
                  errorMessage={this.state.errorMessage}
              />
          )}/>
          <Route path='/create' exact render={(routerProps) => (
              <CreateChannel
                  {...routerProps}
                  activeSession={this.state.activeSession}
                  userId={this.state.userId}
                  displayName={this.state.displayName}
                  userEmail={this.state.email}
                  allUsers={this.state.allUsers}
              /> )
          }/>
            <Redirect from='/channel' to='/'/>
        </Switch>
      </div>
    );
  }
}

export default App;

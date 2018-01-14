import React, { Component } from 'react';
import './App.css';
import firebase from 'firebase/app';
import $ from 'jquery';
import { bindAll } from 'lodash';
import Landing from './views/landing/landing';
import LoginView from './views/login/login';
import SignUpView from './views/signup/signup';
import Dashboard from './views/dashboard/dashboard';
import Detail from './views/detail/detail'

let config = {
    apiKey: "AIzaSyCpQ_x0hf9YySPVz_gQPgEEIsHPuw6L-vo",
    authDomain: "blank-state-protocol.firebaseapp.com",
    databaseURL: "https://blank-state-protocol.firebaseio.com",
    projectId: "blank-state-protocol",
    storageBucket: "blank-state-protocol.appspot.com",
    messagingSenderId: "79651232490"
};
firebase.initializeApp(config);


class App extends Component {
  constructor(props) {
    super(props);
      this.state = {
        user: null,
        errorMessage: "",
        activeSession: false,

      };

      bindAll(this, [
          'checkUserAuth',
          'signUpCallback',
          'signOutCallback'
      ])
  }

    componentDidMount() {
        this.checkUserAuth();
    }

    componentWillUnmount() {
        this.authUnregFunc();
    }

    checkUserAuth() {

        let gloablThis = this;
        this.authUnregFunc = firebase.auth().onAuthStateChanged((user) => {
            if (user) {

                let id = user.uid;

                firebase.database().ref('users/' + id).once('value')
                    .then((snapshot) => {
                        gloablThis.setState({
                            user: Object.values(snapshot.val())[0]
                        });

                        console.log(this.state);

                    });


            } else {
                // Redirect to login

            }
        });

    }

    signUpCallback() {
        let email = $('#createEmail').val();
        let password = $('#createPassword').val();
        let firstName = $('#createFirstName').val();
        let lastName = $('#createLastName').val();
        let organization = $('#targetToggler').checked;

        firebase.auth().createUserWithEmailAndPassword(email, password)
            .then(() => {
                let user = firebase.auth().currentUser;

                user.updateProfile({
                    displayName: firstName,
                }).then(() => {


                let insertUser = {
                    firstName: user.displayName,
                    lastName: lastName,
                    userId: user.uid,
                    userEmail: user.email,
                    organization: organization
                };

                if (organization || organization === undefined) {
                    organization = true;
                    let organizationName = $('#createOrganizationName');
                    insertUser = {
                        firstName: user.displayName,
                        lastName: lastName,
                        userId: user.uid,
                        userEmail: user.email,
                        organization: organization,
                        organizationName: organizationName,

                    };
                }

                let usersRef = firebase.database().ref('users/' + user.uid);
                usersRef.push(insertUser);

                this.setState({
                    user: insertUser
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
        <Landing/>
        {/*<LoginView/>*/}
        {/*<SignUpView/>*/}
        {/*<Dashboard/>*/}
        {/*<Detail/>*/}
        {/*<SignUpView*/}
            {/*signUpCallback={this.signUpCallback}/>*/}
      </div>
    );
  }
}

export default App;

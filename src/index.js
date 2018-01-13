import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import * as firebase from "firebase";

var config = {
    apiKey: "AIzaSyCpQ_x0hf9YySPVz_gQPgEEIsHPuw6L-vo",
    authDomain: "blank-state-protocol.firebaseapp.com",
    databaseURL: "https://blank-state-protocol.firebaseio.com",
    projectId: "blank-state-protocol",
    storageBucket: "blank-state-protocol.appspot.com",
    messagingSenderId: "79651232490"
  };
  firebase.initializeApp(config);

ReactDOM.render(<App />, document.getElementById('root'));

registerServiceWorker();

// window.onload = function() {
//     console.log("javascript loaded");
//     firebase.auth();
// }

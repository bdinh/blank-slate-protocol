import React, { Component } from 'react';
import './App.css';
import Landing from './views/landing/landing';
import LoginView from './views/login/login';
import SignUpView from './views/signup/signup';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Landing/>*/}
        <LoginView/>
        {/*<SignUpView/>*/}
      </div>
    );
  }
}

export default App;

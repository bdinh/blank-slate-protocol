import React, { Component } from 'react';
import './App.css';
import Landing from './views/landing/landing';
import LoginView from './views/login/login';

class App extends Component {
  render() {
    return (
      <div className="App">
        {/*<Landing/>*/}
        <LoginView/>
      </div>
    );
  }
}

export default App;

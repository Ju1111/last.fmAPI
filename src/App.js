import React, { Component } from 'react';
import logo from './LP2.png';
import './App.css';
import { Welcome } from './containers/LandingPage'

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
        </header>
        <Welcome />
      </div>
    );
  }
}

export default App;

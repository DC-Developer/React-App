import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import HelloDiv from './components/hello.js';
import About from './components/about.js';
import Button from './components/button.js';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          <HelloDiv />
        </p>
        <About />
        <Button />
      </div>
    );
  }
}

export default App;

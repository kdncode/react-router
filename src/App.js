import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Link } from 'react-router';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React Router</h1>
        </header>

          <ul>
            <li><Link to="/Hello">Hello</Link></li>
            <li><Link to="/Work">Work</Link></li>
            <li><Link to="/Contact">Contact</Link></li>
          </ul>
      </div>
    );
  }
}

export default App;

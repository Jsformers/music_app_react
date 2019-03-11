import React, { Component } from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import './App.css';
import NavBar from './components/layout/NavBar';

class App extends Component {
  render() {
    return (
      <Router>
      <>
        <NavBar />
      </>
      </Router>
    );
  }
}

export default App;

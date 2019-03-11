import React, { Component } from 'react';
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom';
import './App.css';
import NavBar from './components/layout/NavBar';
import Index from './components/layout/Index'

class App extends Component {
  render() {
    return (
      <Router>
      <>
        <NavBar />
        <div className="container">
          <Switch>
            <Route exact path="/" component={Index} />
          </Switch>
        </div>
      </>
      </Router>
    );
  }
}

export default App;

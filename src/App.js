import React, { Component } from 'react'
import {BrowserRouter as Router , Route , Switch} from 'react-router-dom'
import './App.css';
import NavBar from './components/layout/NavBar'
import Index from './components/layout/Index'
import Lyrics from './components/tracks/Lyrics'
import { Provider } from './context'

class App extends Component {
  render() {
    return (
      <Provider>
        <Router basename="components">
        <>
          <NavBar />
          <div className="container">
            <div>Hello World</div>
            <Switch>
              <Route exact path="/" component={Index} />
              <Route path="/lyrics/track/:id" component={Lyrics} />
            </Switch>
          </div>
        </>
        </Router>
      </Provider>
    );
  }
}

export default App;

import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import Contact from './Contact.js';
import NavBar from './NavBar.js';
import Home from './Home.js';
import '../styles/App.scss';

/**
 * Main starting app component
 */
class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <NavBar/>
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Home/>
          </Route>
          <Route path="/users">
            <p>Hello users!</p>
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
        </Switch>
      </BrowserRouter>
    );
  }
}

export default App;

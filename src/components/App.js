import React, {Component} from 'react';
import {Route, Switch, BrowserRouter} from 'react-router-dom';
import '../styles/App.scss';
import Contact from './Contact.js';
import NavBar from './NavBar.js';
import Home from './Home.js';
import Footer from './Footer.js';
import Internal from './Internal.js';
import External from './External.js';
import Blogs from './Blogs.js';
import NotFound from './NotFound';

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
          <Route path="/external">
            <External/>
          </Route>
          <Route path="/internal">
            <Internal/>
          </Route>
          <Route path="/blogs">
            <Blogs/>
          </Route>
          <Route path="/contact">
            <Contact/>
          </Route>
          <Route exact path="/">
            <Home/>
          </Route>
          <Route>
            <NotFound/>
          </Route>
        </Switch>
        <Footer/>
      </BrowserRouter>
    );
  }
}

export default App;

import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import '../styles/App.scss';
import Contact from './Contact';
import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';
import Internal from './Internal';
import External from './External';
import Blogs from './Blogs';
import NotFound from './NotFound';
import Showcase from './Showcase';

/**
 * Main starting app component
 */
// eslint-disable-next-line react/prefer-stateless-function
class App extends Component {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    return (
      <BrowserRouter>
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/external">
            <External />
          </Route>
          <Route path="/internal">
            <Internal />
          </Route>
          <Route path="/blogs">
            <Blogs />
          </Route>
          <Route path="/contact">
            <Contact />
          </Route>
          <Route path="/showcase">
            <Showcase />
          </Route>
          <Route exact path="/">
            <Home />
          </Route>
          <Route>
            <NotFound />
          </Route>
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;

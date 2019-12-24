import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import '../styles/App.scss';
import About from './About';
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
          <Route path="/about" component={About} />
          <Route path="/external" component={External} />
          <Route path="/internal" component={Internal} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/contact" component={About} />
          <Route path="/showcase" component={Showcase} />
          <Route path="/home" component={Home} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;

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
import ScrollToTop from './ScrollToTop';

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
        <ScrollToTop />
        <NavBar />
        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path="/about" component={About} />
          <Route path="/external" component={External} />
          <Route path="/internal" component={Internal} />
          <Route path="/blogs" component={Blogs} />
          <Route path="/contact" component={About} />
          <Route
            path="/rush"
            component={() => (
              <Showcase
                title="Rush"
                gamePath="/projects/Rush/index.html"
                gameType="unity"
                description="Try to escape from jail!
                Created using ActionScript and FlashDevelop. This game requires flash to work.
                There are currently only 10 levels for this game. Assets were hand-drawn by me."
                controls="Up or W<br>
                    Left or A<br>
                    Down or S<br>
                    Right or D<br>
                    Spacebar - Interact with objects/Open doors<br>
                    Escape or P- Pauses the game<br>
                    R - Reset the level"
              />
            )}
          />
          <Route
            path="/hardescape"
            component={() => (
              <Showcase
                title="Hard Escape"
                gamePath="/projects/HardEscape.swf"
                gameType="actionscript"
                description="Try to escape from jail!
                Created using ActionScript and FlashDevelop. This game requires flash to work.
                There are currently only 10 levels for this game. Assets were hand-drawn by me."
                controls="Up or W<br>
                    Left or A<br>
                    Down or S<br>
                    Right or D<br>
                    Spacebar - Interact with objects/Open doors<br>
                    Escape or P- Pauses the game<br>
                    R - Reset the level"
              />
            )}
          />
          <Route
            path="/friendlyencounters"
            component={() => (
              <Showcase
                title="Friendly Encounters"
                gamePath="/projects/FE-Web/index.html"
                gameType="unity"
                description=""
                controls="Up or W<br>
                    Left or A<br>
                    Down or S<br>
                    Right or D<br>
                    Spacebar - Interact with objects/Open doors<br>
                    Escape or P- Pauses the game<br>
                    R - Reset the level"
              />
            )}
          />
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

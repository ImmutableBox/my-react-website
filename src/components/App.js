import React, { Component } from 'react';
import { Route, Switch, BrowserRouter } from 'react-router-dom';
import '../styles/App.scss';
import About from './About';
import NavBar from './NavBar';
import Home from './Home';
import Footer from './Footer';
import Internal from './Internal';
import External from './External';
import Blogs from './blog/Blogs';
import NotFound from './NotFound';
import Showcase from './Showcase';
import ScrollToTop from './ScrollToTop';
import SumoResults from './sumo/SumoResults';
import SumoForm from './sumo/SumoForm';
import SumoSearch from './sumo/SumoSearch';
import SumoPage from './sumo/SumoPage';

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
            path="/hardescape"
            component={() => (
              <Showcase
                title="Hard Escape"
                gamePath="/projects/HardEscape.swf"
                gameType="actionscript"
                description="Try to escape from jail! Created using ActionScript and FlashDevelop. This game requires flash to work. Assets were hand-drawn by me. This game was created using Flixel, a open source game making library."
                controls="Up or W
                          <br>
                          Left or A
                          <br>
                          Down or S
                          <br>
                          Right or D
                          <br>
                          Spacebar - Interact with objects/Open doors
                          <br>
                          Escape or P- Pauses the game
                          <br>
                          R - Reset the level"
                width="600"
                height="450"
              />
            )}
          />
          <Route
            path="/friendlyencounters"
            component={() => (
              <Showcase
                title="Friendly Encounter - Created for my Project Management Course"
                gamePath="/projects/FE-Web/index.html"
                gameType="unity"
                description="Created using Unity and C#. This game was created for my project management class This game is still in development."
                sourceCode="https://github.com/ThomasNolte/PRJ666-Friendly-Encounters"
                width="1280px"
                height="800px"
              />
            )}
          />
          <Route path="/showcase" component={Showcase} />
          <Route path="/home" component={Home} />
          <Route path="/sumoresults" component={SumoResults} />
          <Route path="/sumosearch" component={SumoSearch} />
          <Route path="/sumoform" component={SumoForm} />
          <Route path="/sumopage" component={SumoPage} />
          <Route exact path="/" component={Home} />
          <Route component={NotFound} />
        </Switch>
        <Footer />
      </BrowserRouter>
    );
  }
}

export default App;

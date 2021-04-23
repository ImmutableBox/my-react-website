import React from 'react';
import {
  FaChild,
  FaGamepad,
  FaWordpress,
} from 'react-icons/fa';
import '../styles/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import GameSlider from './GameSlider';
import BlogList from './blog/BlogList';

/**
 * Home component page
 */
class Home extends React.PureComponent {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    return (
      <div className="wrapper u-no-margin--top">
        <div className="p-suru">
          <div className="p-strip is-deep">
            <div className="row">
              <h2>
                <FaChild />
                &nbsp;Welcome to my website!
              </h2>
              <p className="p-heading--4">
                This is my personal website used for the purpose of displaying
                projects.
              </p>
            </div>
          </div>
        </div>
        <div
          className="p-strip is-bordered is-deep"
          style={{ background: '#2476ba', color: '#FFF' }}
        >
          <div className="row">
            <h2>
              <FaGamepad />
              &nbsp;Game development projects
            </h2>
            <p>
              I find great enjoyment in game development. Whenever I have free-time I tend
              to turn to game development. Below are the list of games I have worked on or
              developed.
            </p>
            <GameSlider />
          </div>
        </div>
        <div
          className="p-strip is-bordered is-deep"
          style={{ background: '#dcdcdc' }}
        >
          <div className="row">
            <h2>
              <FaWordpress />
              &nbsp;Blog feed
            </h2>
            <p>
              A blog created using WordPress to share my adventures in contributing to
              open source projects.
            </p>
            <BlogList />
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

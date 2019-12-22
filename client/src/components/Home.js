import React, { Component } from 'react';
import Slider from 'react-slick';
import '../styles/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * Home component page
 */
// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
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
              <h2>Welcome to my website!</h2>
              <p>This is my personal website used for the purpose of displaying projects.</p>
            </div>
          </div>
        </div>
        <div className="p-strip is-deep" style={{ background: '#3498db', color: '#FFF' }}>
          <div className="row">
            <h2>Game development projects</h2>
            <Slider dots infinite speed={500} slidesToShow={3} slidesToScroll={3}>
              <div className="p-card">
                <img src="/images/rush.png" alt="" />
                <p>Description</p>
              </div>
              <div className="p-card">
                <img src="/images/hardescape.png" alt="" />
                <p>
                  Created using ActionScript. This game was created
                  for the purpose of expanding my knowledge and
                  learning a new language (ActionScript). I was able
                  to improve my programming solving skills and
                  analytical skills while creating this game.
                </p>
              </div>
              <div className="p-card">
                <img src="/images/rush.png" alt="" />
                <p>Description</p>
              </div>
              <div className="p-card">
                <img src="/images/rush.png" alt="" />
                <p>Description</p>
              </div>
            </Slider>
          </div>
        </div>
        <div className="p-strip is-deep" style={{ background: '#5c8a8a', color: '#FFF' }}>
          <div className="row">
            <h2>Blog feed</h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

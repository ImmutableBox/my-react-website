import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FaChild, FaGamepad, FaWordpress } from 'react-icons/fa';
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
              <h2>
                <FaChild />
                &nbsp;Welcome to my website!
              </h2>
              <p>This is my personal website used for the purpose of displaying projects.</p>
            </div>
          </div>
        </div>
        <div className="p-strip is-deep" style={{ background: '#3498db', color: '#FFF' }}>
          <div className="row">
            <h2>
              <FaGamepad />
              &nbsp;Game development projects
            </h2>
            <Slider dots infinite speed={500} slidesToShow={3} slidesToScroll={3} autoplay>
              <div className="p-card">
                <Link to="/external">
                  <img src="/images/rush.png" alt="" />
                </Link>
                <p>
                  Created using Unity and C#. This game
                  is still in very early development. Assets were drawn by me.
                </p>
              </div>
              <div className="p-card">
                <Link to="/external">
                  <img src="/images/hardescape.png" alt="" />
                </Link>
                <p>
                  Created using ActionScript and FlashDevelop. This game requires
                  flash to work. There are currently only 10 levels for this game
                </p>
              </div>
              <div className="p-card">
                <Link to="/external">
                  <img src="/images/fe.png" alt="" />
                </Link>
                <p>
                  Created using Unity and C#. This game was created for my project management class
                  This game is still in development.
                </p>
              </div>
              <div className="p-card">
                <Link to="/external">
                  <img src="/images/rush.png" alt="" />
                </Link>
                <p>
                  Created by using Unity and C#. This game
                  is still in development.
                </p>
              </div>
            </Slider>
          </div>
        </div>
        <div className="p-strip is-deep" style={{ background: '#ff8080', color: '#FFF' }}>
          <div className="row">
            <h2>
              <FaWordpress />
              &nbsp;Blog feed
            </h2>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

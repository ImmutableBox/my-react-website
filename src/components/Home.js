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
        <div className="p-strip is-deep" style={{ background: '#3498db', color: '#fff' }}>
          <div className="row">
            <h2>Game development projects</h2>
            <Slider dots infinite speed={500} slidesToShow={1} slidesToScroll={1}>
              <div className="p-card--highlighted">
                <img src="/images/rush.png" alt="" />
              </div>
              <div className="p-card--highlighted">
                <img src="/images/hardescape.png" alt="" />
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

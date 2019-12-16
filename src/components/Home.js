import React, { Component } from 'react';
import { FaGamepad } from 'react-icons/fa';

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
      <div className="container">
        <div className="row">
          <div className="col-sm-6">
            <h2>
              Rush (Incomplete)
              <span className="logo">
                <FaGamepad />
              </span>
            </h2>
            <div className="thumbnail">
              <div className="caption" align="center">
                <img src="/images/hardescape.png" alt="" />
                <a className="btn-primary" href="/rush">
                  Click here to play
                </a>
              </div>
            </div>
          </div>

          <div className="col-sm-6">
            <h2>
              Hard Time
              <span className="logo">
                <i className="fas fa-gamepad" />
              </span>
            </h2>
            <div className="thumbnail">
              <div className="caption" align="center">
                <img src="/images/rush.png" alt="" />
                <a className="btn-primary" href="/hardescape">
                  Click here to play
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

import React, { Component } from 'react';
import { FaGamepad, FaAdobe } from 'react-icons/fa';
import { DiUnitySmall } from 'react-icons/di';
import { Link } from 'react-router-dom';
import GameSlider from './GameSlider';

/**
 * External project component.
 * This component contains projects I have worked on externally.
 */
// eslint-disable-next-line react/prefer-stateless-function
class External extends Component {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="p-suru">
            <div className="p-strip is-deep">
              <div className="row">
                <h2>
                  <FaGamepad />
                  &nbsp;Game development projects
                </h2>
                <p>
                  I find great enjoyment in game development. Whenever I have free-time
                  I tend to turn to game development. Below are the list of games I have developed.
                </p>
              </div>
            </div>
          </div>
          <div className="p-strip is-deep">
            <div className="row">
              <h2>
                <DiUnitySmall />
                &nbsp;Games developed in Unity:
              </h2>
              <div className="col-3">
                <div className="p-card">
                  <Link to="/rush">
                    <img src="/images/rush.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-3">
                <div className="p-card">
                  <Link to="/friendlyencounters">
                    <img src="/images/FE.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-3" />
              <div className="col-3" />
            </div>
          </div>
          <hr />
          <div className="p-strip is-deep">
            <div className="row">

              <h2>
                <FaAdobe />
                &nbsp;Games developed in Flash/ActionScript:
              </h2>
              <div className="col-3">
                <div className="p-card">
                  <Link to="/hardescape">
                    <img src="/images/hardescape.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-3" />
              <div className="col-3" />
              <div className="col-3" />
            </div>
          </div>
          <hr />
          <div
            className="p-strip is-deep"
            style={{ background: '#3498db', color: '#FFF' }}
          >
            <div className="row">
              <h2>
                <FaGamepad />
                &nbsp;Game development projects
              </h2>
              <GameSlider />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default External;

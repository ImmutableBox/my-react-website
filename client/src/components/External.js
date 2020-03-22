import React, { Component } from 'react';
import { FaGamepad, FaAdobe, FaJava } from 'react-icons/fa';
import { DiUnitySmall } from 'react-icons/di';
import { Link } from 'react-router-dom';

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
                  <Link to="/mobswarm">
                    <img src="/images/mobswarm.png" alt="" />
                    <h4 className="text-center">Mob Swarm</h4>
                  </Link>
                </div>
              </div>
              <div className="col-3">
                <div className="p-card">
                  <Link to="/friendlyencounters">
                    <img src="/images/FE.png" alt="" />
                    <h4 className="text-center">Friendly Encounters</h4>
                  </Link>
                </div>
              </div>
              <div className="col-3" />
              <div className="col-3" />
            </div>
          </div>
          <div className="p-strip is-deep" style={{ background: '#dcdcdc' }}>
            <div className="row">
              <h2>
                <FaAdobe />
                &nbsp;Games developed in Flash/ActionScript:
              </h2>
              <div className="col-3">
                <div className="p-card">
                  <Link to="/hardescape">
                    <img src="/images/hardescape.png" alt="" />
                    <h4 className="text-center">Hard Escape</h4>
                  </Link>
                </div>
              </div>
              <div className="col-3">
                <div className="p-card">
                  <Link to="/farming">
                    <img src="/images/farming.png" alt="" />
                    <h4 className="text-center">Farming</h4>
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
                <FaJava />
                &nbsp;Games developed in Java:
              </h2>
              <div className="col-3">
                <div className="p-card">
                  <a href="https://play.google.com/store/apps/details?id=com.immutablevoid.dontmoveback">
                    <img src="/images/feature_graphic_dontmoveback.png" alt="" />
                    <h4 className="text-center">Don&apos;t Move Back!</h4>
                  </a>
                </div>
              </div>
              <div className="col-3" />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default External;

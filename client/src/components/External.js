import React, { Component } from 'react';
import { FaGamepad, FaAdobe } from 'react-icons/fa';
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
          <hr />
          <div className="p-strip is-deep">
            <div className="row">
              <h2>
                <DiUnitySmall />
                &nbsp;Games developed in Unity:
              </h2>
              <div className="col-3">
                <div className="p-card">
                  <Link to="/external">
                    <img src="/images/FE.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-3">
                <div className="p-card">
                  <Link to="/external">
                    <img src="/images/FE.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-3">
                <div className="p-card">
                  <Link to="/external">
                    <img src="/images/FE.png" alt="" />
                  </Link>
                </div>
              </div>
              <div className="col-3">
                <div className="p-card">
                  <Link to="/external">
                    <img src="/images/FE.png" alt="" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
          <hr />
          <div className="p-strip is-deep">
            <div className="row">
              <div className="p-card">
                <h2>
                  Friendly Encounter - Created for my Project Management Course
                </h2>
                <iframe title="Friendly Encounter" src="/projects/FE-Web/index.html" name="FE" width="1024px" height="768px" />
                <div className="col-sm-12">
                  <div className="p-card">
                    Source code:
                    <a href="https://github.com/ThomasNolte/PRJ666-Friendly-Encounters">
                      https://github.com/ThomasNolte/PRJ666-Friendly-Encounters
                    </a>
                  </div>
                </div>
              </div>
              <hr />
              <div className="p-card">
                <h2>
                  Rush (Incomplete)
                </h2>
                <iframe title="Rush" src="/projects/Rush/index.html" name="Rush" width="1024px" height="768px" />
                <div className="col-sm-12">
                  <div className="p-card">
                    Controls: Up or W
                    <br />
                    Left or A
                    <br />
                    Down or S
                    <br />
                    Right or D
                    <br />
                    Click to shoot
                    <br />
                    Source code:
                    <a href="https://github.com/ImmutableBox/Mob-Swarm">
                      https://github.com/ImmutableBox/Mob-Swarm
                    </a>
                  </div>
                </div>
              </div>
              <hr />
            </div>
          </div>
          <div className="p-strip is-deep">
            <div className="row">
              <h2>
                <FaAdobe />
                &nbsp;Games developed in Flash/ActionScript:
              </h2>
              <div className="p-card">
                <h2>
                    Hard Time
                </h2>
                <object width="600" height="450" data="/projects/HardEscape.swf"> HardEscape </object>
                <div className="p-card">
                    Try to escape from jail!
                  <br />
                    Controls: Up or W
                  <br />
                    Left or A
                  <br />
                    Down or S
                  <br />
                    Right or D
                  <br />
                    Spacebar - Interact with objects/Open doors
                  <br />
                    Escape or P- Pauses the game
                  <br />
                    R - Reset the level
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default External;

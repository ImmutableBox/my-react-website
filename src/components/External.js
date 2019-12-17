import React, { Component } from 'react';

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
          <div className="row">
            <h1>External Projects</h1>
            <div className="row">
              <div className="col-sm-6">
                <h2>
Rush (Incomplete)
                  <span className="logo">
                    <i className="fas fa-gamepad" />
                  </span>
                </h2>
                <div className="thumbnail">
                  <div className="caption" align="center">
                    <img className="p-image--bordered" src="/images/rush.png" alt="" />
                    <a className="btn-primary" href="/hardescape">Click here to play</a>
                  </div>
                </div>
                <div className="col-sm-12">
                  <section>
                    <iframe title="Rush" src="/projects/Rush/index.html" name="Rush" width="1024px" height="768px" />
                    <article>
                      <p>Controls: Up or W</p>
                      <p> Left or A</p>
                      <p> Down or S</p>
                      <p> Right or D</p>
                      <p> Click to shoot</p>
                    </article>
                  </section>
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
                    <img src="/images/hardescape.png" alt="" />
                    <a className="btn-primary" href="/rush">Click here to play</a>
                  </div>
                </div>
                <div className="p-card">
                  <h2>
Hard Time
                    <span className="logo" />
                  </h2>
                  <div className="col-sm-6">
                    <object width="600" height="450" data="/projects/HardEscape.swf"> HardEscape </object>
                  </div>
                  <section>
                    <article>
                      <p>
Try to escape from jail!
                    (More levels will be added later)
                      </p>
                      <p>Controls: Up or W</p>
                      <p> Left or A</p>
                      <p> Down or S</p>
                      <p> Right or D</p>
                      <p> Spacebar - Interact with objects</p>
                      <p> Q - Go to level menu</p>
                      <p> R - Reset the level</p>
                    </article>
                  </section>
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

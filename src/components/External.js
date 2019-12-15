import React, {Component} from 'react';

/**
 * External project component.
 * This component contains projects I have worked on externally.
 */
class External extends Component {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    return (
      <div className="container">
        <h1>External Projects</h1>
        <div className="row">
          <div className="col-sm-6">
            <h2>Rush (Incomplete)
              <span className="logo"><i className="fas fa-gamepad">
              </i>
              </span>
            </h2>
            <div className="thumbnail">
              <div className="caption" align="center">
                <img src="../../public/images/hardtime.png" alt=""/>
                <a className="btn-primary" href="/hardtime">Click here to play</a>
              </div>
            </div>
            <div className="col-sm-12">
              <iframe src="../../assets/projects/NutshellRPG/index.html" name="Rush" width="1024px" height="768px"></iframe>
              <section>
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
            <h2>Hard Time
              <span className="logo"><i className="fas fa-gamepad">
              </i>
              </span>
            </h2>
            <div className="thumbnail">
              <div className="caption" align="center">
                <img src="../../public/images/rush.png" alt=""/>
                <a className="btn-primary" href="/rush">Click here to play</a>
              </div>
            </div>
            <div className="col-sm-6">
              <h2>Hard Time<span className="logo"></span></h2>
              <section>
                <article>
                  <p>Try to escape from jail!
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
    );
  }
}

export default External;

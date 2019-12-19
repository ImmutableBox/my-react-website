import React, { Component } from 'react';

/**
 * Showcase component.
 * This component will showcase games selected on.
 */
// eslint-disable-next-line react/prefer-stateless-function
class Showcase extends Component {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="row">
            <h1>Game</h1>
            <div className="container">
              <div className="row">
                <section id="main-slider" className="no-margin">
                  <div className="carousel slide">
                    <ol className="carousel-indicators">
                      <li
                        data-target="#main-slider"
                        data-slide-to="0"
                        className="active"
                      />
                      <li data-target="#main-slider" data-slide-to="1" />
                    </ol>
                    <div className="carousel-inner">
                      <div
                        className="item active"
                      >
                        <div className="container">
                          <div className="row slide-margin">
                            <div className="col-sm-12">
                              <div className="carousel-content">
                                <span className="thumbnail">
                              Created by using Unity and C#. Created for the
                              purpose of expanding my knowledge using Unity and
                              C#. I was able to improve my problem solving
                              abilities while working on this project. This game
                              is still incomplete.
                                </span>
                                <a className="btn-slide" href="/rush">
                              Click here to play!
                                </a>
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        className="item"
                      >
                        <div className="container">
                          <div className="row slide-margin">
                            <div className="col-sm-12">
                              <div className="carousel-content">
                                <span className="thumbnail">
                              Created using ActionScript. This game was created
                              for the purpose of expanding my knowledge and
                              learning a new language (ActionScript). I was able
                              to improve my programming solving skills and
                              analytical skills while creating this game.
                                </span>
                                <a className="btn-slide" href="/hardtime">
                              Click here to play!
                                </a>
                                {' '}
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <a className="prev hidden-xs" href="#main-slider">
                    {' '}
                    <i className="fa fa-chevron-left" />
                    {' '}
                  </a>
                  {' '}
                  <a className="next hidden-xs" href="#main-slider">
                    {' '}
                    <i className="fa fa-chevron-right" />
                    {' '}
                  </a>
                </section>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Showcase;

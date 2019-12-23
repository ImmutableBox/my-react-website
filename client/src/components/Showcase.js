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
          <div className="p-suru">
            <div className="p-strip is-deep">
              <div className="row">
                <h2>Game Title</h2>
              </div>
            </div>
          </div>
          <div className="row">
            <h1>Game</h1>
          </div>
        </div>
      </div>
    );
  }
}

export default Showcase;

import React, { Component } from 'react';

/**
 * Internal projects component.
 * This component contains projects I have worked on internally on the website.
 */
// eslint-disable-next-line react/prefer-stateless-function
class Internal extends Component {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="row">
            <p>Source code for this website:</p>
            <a href="https://github.com/ImmutableBox/my-react-website">
              https://github.com/ImmutableBox/my-react-website
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Internal;

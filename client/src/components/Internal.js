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
          <div className="p-suru">
            <div className="p-strip is-deep">
              <div className="row">
                <h2>Website source code/projects</h2>
                <p>
                  Here you can find the source code for the website. I also like
                  experimenting/developing different programs that involved with this
                  website listed below.
                </p>
              </div>
            </div>
          </div>
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

import React, { Component } from 'react';

/**
 * Blog component. Contains my blog feed.
 */
// eslint-disable-next-line react/prefer-stateless-function
class Blogs extends Component {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="row">
            <h1>Blogs feed</h1>
            <p>Link to blog:</p>
            <a href="https://paulopensourceblog.wordpress.com">
              https://paulopensourceblog.wordpress.com
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;

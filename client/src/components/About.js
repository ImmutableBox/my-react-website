import React, { Component } from 'react';

/**
 * Contact information component
 */
// eslint-disable-next-line react/prefer-stateless-function
class About extends Component {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="row">
            <h2>Contact information:</h2>
            <ul className="p-list">
              <li className="p-list__item">
                Email:
                <a href="mailto:paul_luu.work@hotmail.com">
                  paul_luu.work@hotmail.com
                </a>
              </li>
              <li className="p-list__item">
                Linkedin:
                <a href="http://www.linkedin.com/in/paul-luu-55bb0614a">
                  http://www.linkedin.com/in/paul-luu-55bb0614a
                </a>
              </li>
              <li className="p-list__item">
                GitHub:
                <a href="https://github.com/ImmutableBox">
                  https://github.com/ImmutableBox
                </a>
              </li>
              <li className="p-list__item">
                Blog:
                <a href="https://paulopensourceblog.wordpress.com">
                  https://paulopensourceblog.wordpress.com
                </a>
              </li>
            </ul>
            <ul className="p-list">
              <li className="p-list__item">
                Sumo icon link:
                <a href="https://icon-icons.com/icon/japan-culture-traditional-sumo-japanese-sport/127327">
                  https://icon-icons.com/icon/japan-culture-traditional-sumo-japanese-sport/127327
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

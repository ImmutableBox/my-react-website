import React, { Component } from 'react';
import {
  FaLinkedin, FaGithub, FaRegEnvelope, FaWordpress,
} from 'react-icons/fa';

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
          <div className="p-suru">
            <div className="p-strip is-deep">
              <div className="row">
                <h2>Contact information:</h2>
                <p>
                  Below are links if where you can find me! I tend to be active with
                  the social medias below.
                </p>
              </div>
            </div>
          </div>
          <div className="p-strip is-deep" style={{ background: '#f7f7f7', color: '#000000' }}>
            <div className="row">
              <ul className="p-list--divided">
                <li className="p-list__item">
                  <FaRegEnvelope />
                  &nbsp;Email:
                  <a href="mailto:paul_luu.work@hotmail.com">
                    paul_luu.work@hotmail.com
                  </a>
                </li>
                <li className="p-list__item">
                  <FaLinkedin />
                  &nbsp;Linkedin:
                  <a href="http://www.linkedin.com/in/paul-luu-55bb0614a">
                    http://www.linkedin.com/in/paul-luu-55bb0614a
                  </a>
                </li>
                <li className="p-list__item">
                  <FaGithub />
                  &nbsp;GitHub:
                  <a href="https://github.com/ImmutableBox">
                    https://github.com/ImmutableBox
                  </a>
                </li>
                <li className="p-list__item">
                  <FaWordpress />
                  &nbsp;Blog:
                  <a href="https://paulopensourceblog.wordpress.com">
                    https://paulopensourceblog.wordpress.com
                  </a>
                </li>
              </ul>
              <h2>Assests</h2>
              <hr />
              <ul className="p-list--divided">
                <li className="p-list__item">
                  <p>I love Japanese Grand Sumo! Hence the little sumo icon!</p>
                </li>
                <li className="p-list__item">
                  <img align="middle" src="logo96.png" alt="" width="50" />
                  Sumo icon link:
                  <a href="https://icon-icons.com/icon/japan-culture-traditional-sumo-japanese-sport/127327">
                    https://icon-icons.com/icon/japan-culture-traditional-sumo-japanese-sport/127327
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default About;

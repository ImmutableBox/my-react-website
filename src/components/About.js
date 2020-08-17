import React, { Component } from 'react';
import {
  FaLinkedin, FaGithub, FaWordpress, FaPersonBooth,
} from 'react-icons/fa';
import { AiFillPicture } from 'react-icons/ai';

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
          <div className="p-strip is-deep" style={{ background: '#68599a' }}>
            <div className="row">
              <h2>
                <FaPersonBooth />
                  &nbsp;Contact information:
              </h2>
              <p className="p-heading--4">
                Below are links if where you can find me! I tend to be active with
                the social medias below.
              </p>
            </div>
          </div>
          <div className="p-strip is-deep" style={{ background: '#f7f7f7', color: '#000000' }}>
            <div className="row">
              <h2>
                <FaPersonBooth />
                &nbsp;Links:
              </h2>
              <ul className="p-list--divided">
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
                  <a href="https://github.com/Immutablevoid">
                    https://github.com/Immutablevoid
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
              <h2>
                <AiFillPicture />
                &nbsp;Assets:
              </h2>
              <hr />
              <ul className="p-list--divided">
                <li className="p-list__item">
                  I love Japanese Grand Sumo! Hence the little sumo icon!
                  <br />
                  Click the icon for the source:
                  <br />
                  <a href="https://icon-icons.com/icon/japan-culture-traditional-sumo-japanese-sport/127327">
                    <img align="middle" src="logo96.png" alt="" width="50" />
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

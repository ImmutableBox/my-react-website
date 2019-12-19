import React, { Component } from 'react';
import {
  FaLinkedin, FaGithub, FaRegEnvelope, FaWordpress, FaSortUp,
} from 'react-icons/fa';

/**
 * Footer component, is displayed on every page.
 */
// eslint-disable-next-line react/prefer-stateless-function
class Footer extends Component {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    return (
      <footer id="footer" className="p-footer p-strip u-clearfix">
        <div className="u-fixed-width p-footer__container">
          <div className="row">
            <div className="col-8">
              <p className="u-hide--small p-inline-list__item">
                <p>© 2019 Paul Luu</p>
                <a href="#top">
                  Back to top
                  <FaSortUp />
                </a>
              </p>
            </div>
            <div className="col-4">
              <ul className="p-navigation__links">
                <li className="u-hide--small p-inline-list__item">
                  <a
                    href="http://www.linkedin.com/in/paul-luu-55bb0614a"
                    style={{ color: '#0099ff' }}
                  >
                    <FaLinkedin size={64} />
                  </a>
                </li>
                <li className="u-hide--small p-inline-list__item">
                  <a
                    href="https://github.com/ImmutableBox"
                    style={{ color: '#000000' }}
                  >
                    <FaGithub size={64} />
                  </a>
                </li>
                <li className="u-hide--small p-inline-list__item">
                  <a
                    href="mailto:paul_luu.work@hotmail.com"
                    style={{ color: '#000000' }}
                  >
                    <FaRegEnvelope size={64} />
                  </a>
                </li>
                <li className="u-hide--small p-inline-list__item">
                  <a
                    href="https://paulopensourceblog.wordpress.com"
                    style={{ color: '#80dfff' }}
                  >
                    <FaWordpress size={64} />
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

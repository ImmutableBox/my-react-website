import React, {Component} from 'react';

/**
 * Contact information component
 */
class Contact extends Component {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    return (
      <div>
        <div>
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
            <li className="p-list__item">GitHub:
              <a href="https://github.com/ImmutableBox">
                https://github.com/ImmutableBox
              </a>
            </li>
            <li className="p-list__item">Blog:
              <a href="https://paulopensourceblog.wordpress.com">
                https://paulopensourceblog.wordpress.com
              </a>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Contact;

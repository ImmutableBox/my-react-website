import React, { Component } from 'react';

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
          <ul className="p-navigation__links">
            <li className="u-hide--small p-inline-list__item">
                © 2019 Paul Luu
            </li>
            <li className="u-hide--small p-inline-list__item">
              <button type="button" className="p-button--neutral">About me</button>
            </li>
          </ul>
        </div>
      </footer>
    );
  }
}

export default Footer;

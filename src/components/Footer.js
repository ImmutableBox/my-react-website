import React, {Component} from 'react';

/**
 * Footer component, is displayed on every page.
 */
class Footer extends Component {
  render() {
    return (
      <footer id="footer" class="p-footer p-strip u-clearfix">
        <div className="u-fixed-width p-footer__container">
            <ul className="p-navigation__links">
                <li className="u-hide--small p-inline-list__item">
                    Copyright Paul Luu-2019
                </li>
                <li className="u-hide--small p-inline-list__item">
                  <button class="p-button--neutral" onClick="/contact">About me</button>
                </li>
            </ul>
            <div className="col-sm-6">
              <div className="follow-us">
                <button class="p-button--neutral" onClick="/contact">About me</button>
              </div>
            </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

import React, {Component} from 'react';

/**
 * Footer component, is displayed on every page.
 */
class Footer extends Component {
  render() {
    return (
      <footer id="footer" className="p-navigation is-dark">
        <div className="p-navigation__row">
          <div className="p-navigation__nav" role="menu">
            <ul className="p-navigation__links" role="menuitem">
                <li className="p-navigation__link is-selected" role="menuitem">
                    Copyright Paul Luu-2018
                </li>
            </ul>
            <div className="col-sm-6">
              <div className="follow-us">
                <button class="p-button--neutral" onClick="/contact">About me</button>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

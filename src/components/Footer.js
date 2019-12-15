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
                <a className="fa fa-envelope big-icon" href="mailto:paul_luu.work@hotmail.com">E-mail</a>
                <a className="fab fa-linkedin big-icon" href="http://www.linkedin.com/in/paul-luu-55bb0614a">Linkedin</a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    );
  }
}

export default Footer;

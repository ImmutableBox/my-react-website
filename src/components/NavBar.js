import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/**
 * Navigation bar component. Is displayed throughout all pages.
 */
class NavBar extends Component {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    return (
      <header id="navigation" className="p-navigation is-dark">
        <div className="p-navigation__row">
          <nav className="p-navigation__nav">
            <ul className="p-navigation__links" role="menu">
              <li className="p-navigation__link is-selected" role="menuitem">
                <Link to="/">Home</Link>
              </li>
              <li className="p-navigation__link is-selected" role="menuitem">
                <Link to="/external">External Projects</Link>
              </li>
              <li className="p-navigation__link is-selected" role="menuitem">
                <Link to="/internal">Website Projects</Link>
              </li>
              <li className="p-navigation__link is-selected" role="menuitem">
                <Link to="/blogs">Blogs</Link>
              </li>
              <li className="p-navigation__link is-selected" role="menuitem">
                <Link to="/contact">Contact</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;

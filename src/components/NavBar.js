import React from 'react';
import { Link } from 'react-router-dom';

/**
 * Navigation bar component. Is displayed throughout all pages.
 */
class NavBar extends React.PureComponent {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    return (
      <header id="navigation" className="p-navigation is-dark">
        <div className="p-navigation__row">
          <div className="p-navigation__banner">
            <div className="p-navigation__logo">
              <Link to="/">
                <img align="middle" src="favicon.ico" alt="" width="50" />
              </Link>
            </div>
            <a href="#navigation" className="p-navigation__toggle--open" title="menu">Menu</a>
            <a href="#navigation-closed" className="p-navigation__toggle--close" title="close menu">Close menu</a>
          </div>
          <nav className="p-navigation__nav">
            <span className="u-off-screen">
              <a href="#main-content">Jump to main content</a>
            </span>
            <ul className="p-navigation__links" role="menu">
              <li className="p-navigation__link" role="menuitem">
                <Link to="/external">Game Development Projects</Link>
              </li>
              <li className="p-navigation__link" role="menuitem">
                <Link to="/internal">Website Source Code</Link>
              </li>
              <li className="p-navigation__link" role="menuitem">
                <Link to="/blogs">Blog Feed</Link>
              </li>
              <li className="p-navigation__link" role="menuitem">
                <Link to="/about">Contact Information</Link>
              </li>
            </ul>
          </nav>
        </div>
      </header>
    );
  }
}

export default NavBar;

import React, {Component} from 'react';
import {Link} from 'react-router-dom';

/**
 * Navigation bar component. Is displayed throughout all pages.
 */
class NavBar extends Component {
  render() {
    return (
      <header id="navigation" class="p-navigation is-dark">
        <div class="p-navigation__row">
          <nav class="p-navigation__nav">
            <ul class="p-navigation__links" role="menu">
              <li class="p-navigation__link is-selected" role="menuitem">
                <Link to="/">Home</Link>
              </li>
              <li class="p-navigation__link is-selected" role="menuitem">
                <Link to="/about">About</Link>
              </li>
              <li class="p-navigation__link is-selected" role="menuitem">
                <Link to="/users">Users</Link>
              </li>
              <li class="p-navigation__link is-selected" role="menuitem">
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

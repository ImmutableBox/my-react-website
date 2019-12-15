import React, {Component} from 'react';
import {Link} from 'react-router-dom';

class Footer extends Component{
    render(){
        return(
            <header id="navigation" class="p-navigation is-dark">
            <div class="p-navigation__row">
              <nav class="p-navigation__nav">
                <ul class="p-navigation__links" role="menu">
                  <li class="p-navigation__link is-selected" role="menuitem">
                    <Link to="/">Github</Link>
                  </li>
                  <li class="p-navigation__link is-selected" role="menuitem">
                    <Link to="/about">Linkedin</Link>
                  </li>
                  <li class="p-navigation__link is-selected" role="menuitem">
                    <Link to="/users">Email</Link>
                  </li>
                  <li class="p-navigation__link is-selected" role="menuitem">
                    <Link to="/contact">Blog</Link>
                  </li>
                </ul>
              </nav>
            </div>
          </header>
        );
    }
}

export default Footer;

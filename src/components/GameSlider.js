import React, { Component } from 'react';
import { Link } from 'react-router-dom';

/**
 * GameSlider component.
 * This is a slider with my game development projects
 */
// eslint-disable-next-line react/prefer-stateless-function
class GameSlider extends Component {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    return (
      <div className="row">
        <div className="p-card--highlighted col-4">
          <a className="center" href="https://play.google.com/store/apps/details?id=com.immutablevoid.dontmoveback">
            <img src="/images/dontmoveback.png" alt="" />
          </a>
          <h4 className="text-center">Don&apos;t Move Back!</h4>
        </div>
        <div className="p-card--highlighted col-4">
          <Link to="/hardescape">
            <img src="/images/hardescape.png" alt="" />
          </Link>
          <h4 className="text-center">Hard Escape</h4>
        </div>
        <div className="p-card--highlighted col-4">
          <Link to="/friendlyencounters">
            <img src="/images/FE.png" alt="" />
          </Link>
          <h4 className="text-center">Friendly Encounters</h4>
        </div>
        <div className="p-card--highlighted col-4">
          <Link to="/tmt">
            <img src="/images/tmt.png" alt="" />
          </Link>
          <h4 className="text-center">The Mysterious Farm</h4>
        </div>
      </div>
    );
  }
}

export default GameSlider;

import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

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
      <Slider
        dots
        infinite
        speed={500}
        slidesToShow={3}
        slidesToScroll={3}
        autoplay
      >
        <div className="p-card">
          <a href="https://play.google.com/store/apps/details?id=com.immutablevoid.dontmoveback">
            <img src="/images/feature_graphic_dontmoveback.png" alt="" />
          </a>
          <h4 className="text-center">Don&apos;t Move Back!</h4>
        </div>
        <div className="p-card">
          <Link to="/mobswarm">
            <img src="/images/mobswarm.png" alt="" />
          </Link>
          <h4 className="text-center">Mob Swarm</h4>
        </div>
        <div className="p-card">
          <Link to="/hardescape">
            <img src="/images/hardescape.png" alt="" />
          </Link>
          <h4 className="text-center">Hard Escape</h4>
        </div>
        <div className="p-card">
          <Link to="/friendlyencounters">
            <img src="/images/FE.png" alt="" />
          </Link>
          <h4 className="text-center">Friendly Encounters</h4>
        </div>
        <div className="p-card">
          <Link to="/farming">
            <img src="/images/farming.png" alt="" />
          </Link>
          <h4 className="text-center">Farming</h4>
        </div>
      </Slider>
    );
  }
}

export default GameSlider;

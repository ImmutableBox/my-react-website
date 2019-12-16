import React, { Component } from 'react';
import Slider from './Slider';

/**
 * Internal projects component.
 * This component contains projects I have worked on internally on the website.
 */
// eslint-disable-next-line react/prefer-stateless-function
class Internal extends Component {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    return (
      <div>
        <div className="p-slider__wrapper">
          <Slider />
          <input
            className="p-slider"
            type="range"
            min="0"
            max="100"
            id="slider3"
          />
          <input className="p-slider__input" type="text" maxLength="3" id="slider3-input" />
        </div>
        <div className="p-slider__wrapper">
          <input className="p-slider__input" type="text" maxLength="3" id="slider3-input" />
        </div>
        <div className="p-slider__wrapper">
          <input className="p-slider__input" type="text" maxLength="3" id="slider3-input" />
        </div>
        <p>Source code for this website: https://github.com/ImmutableBox/my-react-website</p>
      </div>
    );
  }
}

export default Internal;

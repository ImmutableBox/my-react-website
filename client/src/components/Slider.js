import React, { Component } from 'react';

class Slider extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="row">
        <div className="p-slider__wrapper">
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
      </div>
    );
  }
}

export default Slider;

import React, { Component } from 'react';
import { FaCubes } from 'react-icons/fa';
import { fullColourHex, rgbToHex } from '../utils/colour';
/**
 * Internal projects component.
 * This component contains projects I have worked on internally on the website.
 */
class Internal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      texts: ['R- Red', 'B - Blue', 'G - Green'],
      sliders: [255, 255, 255],
    };
  }

  onChange(index, event) {
    /**
     * The setState function is executed in asynchronous context.
     * By the time the state is updated the event.target reference might or might not be gone
     * const can be used to "remember" the value as in your example.
     */
    const value = parseFloat(event.target.value);
    this.setState((previousState) => {
      const sliders = [...previousState.sliders];
      sliders[index] = value;
      return { sliders };
    });
  }

  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    const { sliders } = this.state;
    const { texts } = this.state;
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="p-suru">
            <div className="p-strip is-deep">
              <div className="row">
                <h2>
                  <FaCubes />
                  &nbsp;
                  Website source code/projects
                </h2>
                <p>
                  Here you can find the source code for this website. I like
                  experimenting/developing different programs using this website
                  as a testing ground.
                </p>
                <p>
                  Source code for this website:&nbsp;
                  <a href="https://github.com/ImmutableBox/my-react-website">
                    https://github.com/ImmutableBox/my-react-website
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="p-strip is-deep" style={{ backgroundColor: `#${fullColourHex(...sliders)}` }}>
            <div className="row">
              <h2>Color Picker</h2>
              {sliders.map((slider, index) => (
                // eslint-disable-next-line
                <div key={index}>
                  <p>
                    {texts[index]}
                    - Decimal value:
                    {slider}
                    : Hex value:
                    {rgbToHex(slider)}
                  </p>
                  <input
                    className="p-slider"
                    type="range"
                    min="0"
                    max="255"
                    step="1"
                    // eslint-disable-next-line
                    key={index}
                    onChange={(event) => this.onChange(index, event)}
                    value={slider}
                  />
                </div>
              ))}
              <p>
                Full hex value:
                {fullColourHex(...sliders)}
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Internal;

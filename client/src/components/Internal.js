import React, { Component } from 'react';

/**
 * Internal projects component.
 * This component contains projects I have worked on internally on the website.
 */
class Internal extends Component {
  constructor(props) {
    super(props);
    this.state = {
      sliders: [50, 50, 50],
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
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="p-suru">
            <div className="p-strip is-deep">
              <div className="row">
                <h2>Website source code/projects</h2>
                <p>
                  Here you can find the source code for the website. I also like
                  experimenting/developing different programs that involved with this
                  website listed below.
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            <p>Source code for this website:</p>
            <a href="https://github.com/ImmutableBox/my-react-website">
              https://github.com/ImmutableBox/my-react-website
            </a>
          </div>
          <br />
          <hr />
          <div className="row">
            <h2>Color Picker</h2>
            <p>R- Red</p>
            <p>G- Green</p>
            <p>B- Blue</p>
            {sliders.map((slider, index) => (
              // eslint-disable-next-line
              <div key={index}>
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
                <p>{slider}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }
}

export default Internal;

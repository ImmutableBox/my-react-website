import React, { Component } from 'react';
import { FaCubes } from 'react-icons/fa';
import { UnControlled as CodeMirror } from 'react-codemirror2';
import { Link } from 'react-router-dom';
import { fullColourHex, rgbToHex } from '../utils/colour';
import 'codemirror/lib/codemirror.css';
import 'codemirror/theme/material.css';

require('codemirror/mode/xml/xml');
require('codemirror/mode/javascript/javascript');

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
    const { sliders, texts } = this.state;
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="p-strip is-deep" style={{ background: '#3c7cff', color: '#FFF' }}>
            <div className="row">
              <h2>
                <a
                  href="https://github.com/Immutablevoid/my-react-website"
                  style={{ color: '#FFF' }}
                >
                  <FaCubes />
                </a>
                &nbsp;
                Website source code/projects
              </h2>
              <p className="p-heading--4">
                Here you can find the source code for this website. My testing ground
                for React/Javascript code.
              </p>
              <p>
                Click on the icon for the source code!
              </p>
            </div>
          </div>
          <div className="p-strip is-deep is-bordered" style={{ backgroundColor: `#${fullColourHex(...sliders)}` }}>
            <div className="row">
              <h2>Color Picker</h2>
              <hr />
              {sliders.map((slider, index) => (
                // eslint-disable-next-line
                <div key={index}>
                  <p>
                    {texts[index]}
                    <br />
                    Decimal value:&nbsp;
                    {slider}
                    <br />
                    Hex value:&nbsp;
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
                Full hex value: #
                {fullColourHex(...sliders)}
              </p>
            </div>
          </div>
          <div className="p-strip is-deep is-bordered">
            <div className="row">
              <h2>
                Undirected graph - Java
              </h2>
              <div>
                <CodeMirror
                  value="Java undirected graph code goes here!"
                  options={{
                    mode: 'xml',
                    theme: 'material',
                    lineNumbers: true,
                  }}
                />
              </div>
            </div>
          </div>
          <div className="p-strip is-deep is-bordered">
            <div className="row">
              <h2>
                Sumo form
              </h2>
              <div className="p-card">
                <h4>
                  Aug 15 2020 - Sumo form
                </h4>
                <p>
                  Pulling sumo tournament information from&nbsp;
                  <a href="http://sumo.or.jp">
                    http://sumo.or.jp
                  </a>
                  &nbsp;basically keeping track of scores/adding scores.
                  If you know Paul, you know he&apos;s cray cray for Sumo :)
                  This project is pretty much fantasy football.
                  This project is mostly for me and my friends, I will count the points
                  and send a message at the end of the sumo tournament.
                  <br />
                  <br />
                  Project link:&nbsp;
                  <Link to="/sumoform">Sumo Form</Link>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Internal;

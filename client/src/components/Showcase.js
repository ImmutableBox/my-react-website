import React, { Component } from 'react';
import { FaGamepad } from 'react-icons/fa';
import GameSlider from './GameSlider';
/**
 * Showcase component.
 * This component will showcase games selected on.
 */
// eslint-disable-next-line react/prefer-stateless-function
class Showcase extends Component {
  /**
   * Rendering showcase component
   * @return { html } Rendering html
   */
  render() {
    const {
      title,
      gamePath,
      gameType,
      description,
      controls,
      sourceCode,
      width,
      height,
    } = this.props;
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div
            className="p-strip is-deep"
            style={{ background: '#4d638d', color: '#FFF' }}
          >
            <div className="row">
              <h2 className="text-center">
                {title}
              </h2>
              <hr />
            </div>
            {gameType === 'actionscript' ? (
              <object width={width} height={height} data={gamePath}>Game</object>
            ) : (
              <iframe title={title} src={gamePath} name={title} width={width} height={height} />
            )}
            <div className="row">
              <div>
                <div
                  className="p-card"
                  style={{ background: '#7b90b7', color: '#FFF' }}
                >
                  {description}
                  <br />
                  <br />
                  <p>
                    {controls !== undefined ? (
                      <p>
                        <h5>Controls:</h5>
                        {controls.split('<br>').map((item, i) =>
                          // eslint-disable-next-line
                          <div key={i}>{item}<br/></div> )}
                      </p>
                    ) : null}
                    {sourceCode !== undefined ? (
                      <p>
                        Source code:&nbsp;
                        <a href={sourceCode}>{sourceCode}</a>
                      </p>
                    ) : null}
                  </p>
                </div>
              </div>
            </div>
          </div>
          <div
            className="p-strip is-deep"
            style={{ background: '#3498db', color: '#FFF' }}
          >
            <div className="row">
              <h2>
                <FaGamepad />
                &nbsp;Game development projects
              </h2>
              <GameSlider />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Showcase;

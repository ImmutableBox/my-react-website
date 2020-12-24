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
            style={{ background: '#787878', color: '#FFF' }}
          >
            <div className="row">
              <h2 className="text-center">
                {title}
              </h2>
              <hr />
            </div>
            {gameType === 'actionscript' ? (
              <object width={width} height={height} data={gamePath}>
                Please enable Flash to play the game
              </object>
            ) : (
              <iframe title={title} src={gamePath} name={title} width={width} height={height} />
            )}
            <div className="row">
              <div>
                <div
                  className="p-card"
                  style={{ background: '#969696', color: '#FFF' }}
                >
                  {description}
                  <br />
                  <br />
                  <div>
                    {controls !== undefined ? (
                      <div>
                        <p className="p-heading--4">Controls:</p>
                        <hr />
                        {controls.split('<br>').map((item, i) =>
                          // eslint-disable-next-line
                          <div key={i}>{item}<br/></div> )}
                      </div>
                    ) : null}
                    {sourceCode !== undefined ? (
                      <p>
                        Source code:&nbsp;
                        <a href={sourceCode}>{sourceCode}</a>
                      </p>
                    ) : null}
                  </div>
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

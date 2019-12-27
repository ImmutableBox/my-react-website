import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';
import { FaGamepad } from 'react-icons/fa';

/**
 * Showcase component.
 * This component will showcase games selected on.
 */
// eslint-disable-next-line react/prefer-stateless-function
class Showcase extends Component {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    const {
      title,
      gamePath,
      gameType,
      description,
      controls,
    } = this.props;
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div
            className="p-strip is-deep"
            style={{ background: '#808080', color: '#FFF' }}
          >
            <div className="row">
              <h2 className="text-center">
                {title}
              </h2>
              <div
                className="p-card"
                style={{ background: '#bfbfbf', color: '#FFF' }}
              >
                {gameType === 'actionscript' ? (
                  <object width="600" height="450" data={gamePath}> HardEscape </object>
                ) : (
                  <iframe title="Rush" src={gamePath} name="Rush" width="1024px" height="768px" />
                )}
                <div className="p-card">
                  <p>
                    {description}
                    <br />
                    <br />
                    {controls.split('<br>').map((item, i) =>
                    // eslint-disable-next-line
                      <div key={i}>{item}<br/></div> )}
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
              <Slider
                dots
                infinite
                speed={500}
                slidesToShow={3}
                slidesToScroll={3}
                autoplay
              >
                <div className="p-card">
                  <Link to="/rush">
                    <img src="/images/rush.png" alt="" />
                  </Link>
                  <h4 className="text-center">Rush</h4>
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
                  <Link to="/rush">
                    <img src="/images/rush.png" alt="" />
                  </Link>
                  <h4 className="text-center">Rush</h4>
                </div>
              </Slider>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Showcase;

import React from 'react';
import {
  FaTools,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import Slider from 'react-slick';

/**
 * News component page
 */
class News extends React.PureComponent {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    return (
      <div className="wrapper u-no-margin--top">
        <div
          className="p-strip is-bordered is-deep"
          style={{ background: '#FFF' }}
        >
          <div className="row">
            <h2>
              <FaTools />
              &nbsp;News!
            </h2>
            <h3>About projects I am currently working on!</h3>
            <Slider
              dots
              infinite
              speed={1000}
              slidesToShow={1}
              slidesToScroll={1}
              adaptiveHeight
              autoplay
              centerMode
            >
              <div
                className="p-card"
              >
                <h4>
                  <b>The Mysterious Town</b>
                  <br />
                  Dec 24 2020 - WIP
                </h4>
                <p>
                  Working to create another flash game to end the year!
                  <br />
                  This is an old project that I&apos;m bring back to life!
                  I wanted to finish the year off with a project.
                  <br />
                  <br />
                  Project link:&nbsp;
                  <Link className="p-button--brand" to="/tmt">The Mysterious Farm</Link>
                  <br />
                </p>
              </div>
              <div
                className="p-card"
              >
                <h4>
                  <b>Sumo Form</b>
                  <br />
                  Aug 15 2020 - Sep 15 2020
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
                  <Link className="p-button--brand" to="/sumoform">Sumo Form</Link>
                  <br />
                  Project link:&nbsp;
                  <Link className="p-button--brand" to="/sumoresults">Sumo Results</Link>
                  <br />
                  Project link:&nbsp;
                  <Link className="p-button--brand" to="/sumosearch">Sumo Search</Link>
                  <br />
                  I finished the core stuff I wanted to accomplish at Sep 15 2020.
                  There are some QOL/features I will probably add in the future
                  but I&apos;ve pretty much finished core development.
                </p>
              </div>
            </Slider>
          </div>
        </div>
      </div>
    );
  }
}

export default News;

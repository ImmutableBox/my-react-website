import React from 'react';
import {
  FaTools,
} from 'react-icons/fa';
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
                  <b>Project name here</b>
                  <br />
                  Date Here
                </h4>
                <p>
                  Nothing at the moment :(
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

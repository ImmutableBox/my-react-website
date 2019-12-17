import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { FaGamepad } from 'react-icons/fa';

/**
 * Home component page
 */
// eslint-disable-next-line react/prefer-stateless-function
class Home extends Component {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="row">
            <div className="carousel-wrapper">
              <div className="carousel">
                <img className="carousel__photo initial" src="assets/img_1.jpg" alt="" />
                <Link to="https://medium.com/@marcusmichaels/how-to-build-a-carousel-from-scratch-in-vanilla-js-9a096d3b98c9" />
                <FaGamepad />
                <img className="carousel__photo" src="assets/img_2.jpg" alt="" />
                <img className="carousel__photo" src="assets/img_3.jpg" alt="" />
                <img className="carousel__photo" src="assets/img_4.jpg" alt="" />
                <img className="carousel__photo" src="assets/img_5.jpg" alt="" />
                <div className="carousel__button--next" />
                <div className="carousel__button--prev" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Home;

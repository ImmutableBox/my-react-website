import React, { Component } from 'react';
import '../styles/Carousel.css';
import '../styles/Home.css';

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
        <section className="p-takeover--dark js-takeover">
          <div className="p-strip is-deep">
            <div className="row">
              <h2>Welcome to my website!</h2>
              <p>This is my personal website used for the purpose of displaying projects.</p>
            </div>
          </div>
        </section>
        <div className="p-strip is-deep">
          <div className="row">
            <h2>Game development projects</h2>
            <div className="carousel-wrapper">
              <div className="carousel">
                <img className="carousel_photo initial" src="/images/rush.png" alt="" />
                <img className="carousel_photo" src="/images/rush.png" alt="" />
                <img className="carousel_photo" src="/images/hardescape.png" alt="" />
                <img className="carousel_photo" src="/images/rush.png" alt="" />
                <img className="carousel_photo" src="/images/hardescape.png" alt="" />
                <div className="carousel_button--next" />
                <div className="carousel_button--prev" />
              </div>
            </div>
          </div>
        </div>
        <div className="p-strip is-deep">
          <div className="row">
            <div className="carousel-wrapper">
              <div className="carousel">
                <img className="carousel_photo initial" src="/images/rush.png" alt="" />
                <img className="carousel_photo" src="/images/rush.png" alt="" />
                <img className="carousel_photo" src="/images/hardescape.png" alt="" />
                <img className="carousel_photo" src="/images/rush.png" alt="" />
                <img className="carousel_photo" src="/images/hardescape.png" alt="" />
                <div className="carousel_button--next" />
                <div className="carousel_button--prev" />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

window.addEventListener('load', () => {
  const itemClassName = 'carousel_photo';
  const items = document.getElementsByClassName(itemClassName);
  const totalItems = items.length;
  let slide = 0;
  let moving = true;

  // Set classes
  function setInitialClasses() {
    // Target the previous, current, and next items
    // This assumes there are at least three items.
    items[totalItems - 1].classList.add('prev');
    items[0].classList.add('active');
    items[1].classList.add('next');
  }

  function disableInteraction() {
    // Set 'moving' to true for the same duration as our transition.
    // (0.5s = 500ms)

    moving = true;

    // SetTimeout runs its function once after the given time
    setTimeout(() => {
      moving = false;
    }, 500);
  }

  function moveCarouselTo(index) {
    // Check if carousel is moving, if not allow interaction
    if (!moving) {
      // Temporarily disable interactivity
      disableInteraction();

      // Update the "old" adjacent slides with "new" onces
      let newPrevious = index - 1;
      let newNext = index + 1;
      let oldPrevious = index - 2;
      let oldNext = index + 2;

      // Test if carousel has more than three items
      if ((totalItems - 1) > 3) {
        // Checks and updates if the new sliders are out of bounds
        if (newPrevious <= 0) {
          oldPrevious = (totalItems - 1);
        } else if (newNext >= (totalItems - 1)) {
          oldNext = 0;
        }

        // Checks and updates if the new sliders are out of bounds
        if (slide === 0) {
          newPrevious = (totalItems - 1);
          oldPrevious = (totalItems - 2);
          oldNext = (index + 1);
        } else if (index === (totalItems - 1)) {
          newNext = 0;
          oldNext = 1;
        }

        // Now we've worked out where we are and where we're going,
        // by adding/removing classes we'll trigger the transitions

        // Reset old next/prev elements to default classes
        items[oldPrevious].className = itemClassName;
        items[oldNext].className = itemClassName;

        // Add new classes
        items[newPrevious].className = `${itemClassName} prev`;
        items[index].className = `${itemClassName} active`;
        items[newNext].className = `${itemClassName} next`;
      }
    }
  }

  // Next navigation handler
  function moveNext() {
    // Check if moving
    if (!moving) {
      // If it's the last slide, reset to 0 else +1
      if (slide === (totalItems - 1)) {
        slide = 0;
      } else {
        slide += 1;
      }

      // Move carousel to updated slide
      moveCarouselTo(slide);
    }
  }

  // Previous navigation handler
  function movePrev() { // Check if moving
    if (!moving) { // If it's the first slide, set as the last slide, else -1
      if (slide === 0) {
        slide = (totalItems - 1);
      } else {
        slide -= 1;
      }

      // Move carousel to updated slide
      moveCarouselTo(slide);
    }
  }

  // Set event listeners
  function setEventListeners() {
    const next = document.getElementsByClassName('carousel_button--next')[0];
    const prev = document.getElementsByClassName('carousel_button--prev')[0];
    next.addEventListener('click', moveNext);
    prev.addEventListener('click', movePrev);
  }

  function initCarousel() {
    setInitialClasses();
    setEventListeners();

    // Set moving to false so that the carousel becomes interactive
    moving = false;
  }

  initCarousel();
});
export default Home;

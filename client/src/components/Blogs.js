import React from 'react';
import { FaWordpress } from 'react-icons/fa';
import BlogList from './BlogList';

/**
 * Blog component. Contains my blog feed.
 */
class Blogs extends React.PureComponent {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="p-suru">
            <div className="p-strip is-deep">
              <div className="row">
                <h2>
                  <a
                    href="https://paulopensourceblog.wordpress.com"
                    style={{ color: '#FFF' }}
                  >
                    <FaWordpress />
                  </a>
            &nbsp;My Blog feed
                </h2>
                <p>
                  A blog created using WordPress to share my adventures in contributing to
                  open source projects.
                </p>
                <p>
                  Click on the icon for the source!
                </p>
              </div>
            </div>
          </div>
          <div className="p-strip is-deep" style={{ background: '#dcdcdc' }}>
            <div className="row">
              <BlogList />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;

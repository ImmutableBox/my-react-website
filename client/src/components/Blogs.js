import React, { Component } from 'react';

/**
 * Blog component. Contains my blog feed.
 */
class Blogs extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
    };
  }

  // Fetch the list of first mount
  componentDidMount() {
    this.getFeed();
  }

  getFeed = () => {
    fetch('/api/getBlogFeed')
      .then((res) => res.json())
      .then((feeds) => this.setState({ feeds }));
  }

  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    const { feeds } = this.state;
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="p-suru">
            <div className="p-strip is-deep">
              <div className="row">
                <h2>My Blog feed</h2>
                <p>
                  A blog created to share my adventures in contributing to open source projects.
                  I also blog about software optimization for my software optimization course.
                  Created with WordPress.
                </p>
                <p>
                  Link to blog:
                  <a href="https://paulopensourceblog.wordpress.com">
                    https://paulopensourceblog.wordpress.com
                  </a>
                </p>
              </div>
            </div>
          </div>
          <div className="row">
            {/* Check to see if any items are found */}
            {feeds.length ? (
              <div>
                {feeds.map((item) => (
                  <div>
                    {item.summary}
                  </div>
                ))}
              </div>
            ) : (
              <div>
                <h2>No items were found.</h2>
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;

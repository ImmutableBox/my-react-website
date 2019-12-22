import React, { Component } from 'react';
import ReactLoading from 'react-loading';

/**
 * Blog component. Contains my blog feed.
 */
class Blogs extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      feeds: [],
      loading: false,
    };
  }

  // Fetch the list of first mount
  componentDidMount() {
    this.getFeed();
  }

  getFeed = () => {
    this.setState({ loading: true }, () => {
      fetch('/api/getBlogFeed')
        .then((res) => res.json())
        .then((feeds) => this.setState({
          feeds,
          loading: false,
        }));
    });
  }

  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    const { feeds } = this.state;
    const { loading } = this.state;
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
          <div className="p-strip is-deep" style={{ background: '#5c8a8a', color: '#FFF' }}>
            <div className="row">
              {loading ? (
                <div className="center">
                  <ReactLoading type="spin" color="#FFF" height="20%" width="20%" />
                </div>
              ) : (
                <div className="p-card">
                  {feeds.length ? (
                    <div>
                      {/* Check to see if any items are found */}
                      {feeds.map((item) => (
                        <div className="p-card">
                          {item.summary}
                        </div>
                      ))}
                    </div>
                  ) : (
                    <div>
                        No data found!
                    </div>
                  )}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;

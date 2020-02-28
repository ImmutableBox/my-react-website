import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { FaWordpress } from 'react-icons/fa';

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
        })).catch((err) => {
          // eslint-disable-next-line
          console.log(err);
          this.setState({
            loading: false,
          });
        });
    });
  }

  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    const { feeds, loading } = this.state;
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
              <div>
                {loading ? (
                  <div className="center">
                    <ReactLoading
                      type="spin"
                      color="#FFF"
                      height="20%"
                      width="20%"
                    />
                  </div>
                ) : (
                  <div>
                    {feeds.length ? (
                      <div className="row">
                        {/* Check to see if any items are found */}
                        {feeds.map((item) => (
                          <div key={item.title} className="col-4">
                            <div className="p-card">
                              <h3>
                                <a href={item.link}>{item.title}</a>
                              </h3>
                              <hr />
                              {item.summary
                                .replace('[&#8230;]', '...')
                                .replace('&#8217;', '\'')}
                              <a href={item.link}>Read more</a>
                              <br />
                              <br />
                                Published Date:&nbsp;
                              {new Date(item.pubDate).toDateString()}
                              <br />
                            </div>
                          </div>
                        ))}
                      </div>
                    ) : (
                      <div>No data found!</div>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Blogs;

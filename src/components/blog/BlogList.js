import React, { Component } from 'react';
import ReactLoading from 'react-loading';

const RSSParser = require('rss-parser');

const parser = new RSSParser();
// Note: some RSS feeds can't be loaded in the browser due to CORS security.
// To get around this, you can use a proxy.
const CORS_PROXY = 'http://cors-anywhere.herokuapp.com/';

/**
 * Blog component. Contains my blog feed.
 */
class BlogList extends Component {
  mounted = false;

  // Initialize the state
  constructor() {
    super();
    this.state = {
      feeds: [],
      loading: false,
    };
  }

  // Fetch the list of first mount
  componentDidMount() {
    this.mounted = true;
    if (this.mounted) {
      this.getFeed();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getFeed = () => {
    this.setState({ loading: true }, (async () => {
      await parser.parseURL(`${CORS_PROXY}https://paulopensourceblog.wordpress.com/feed/`, (err, feed) => {
        if (err) {
          // eslint-disable-next-line
          console.log(err);
          this.setState({
            loading: false,
          });
        }
        this.setState({
          feeds: feed.items,
          loading: false,
        });
      });
    }));
  }

  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    const { feeds, loading } = this.state;
    return (

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
                    <div className="p-card--highlighted">
                      <h3>
                        <a href={item.link}>{item.title}</a>
                      </h3>
                      <hr />
                      {item.content
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
              <h2>Could not load blogs!</h2>
            )}
          </div>
        )}
      </div>
    );
  }
}

export default BlogList;

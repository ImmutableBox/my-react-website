import React, { Component } from 'react';

/**
 * Blog component. Contains my blog feed.
 */
class Blogs extends Component {
  // Initialize the state
  constructor(props) {
    super(props);
    this.state = {
      items: [],
    };
  }

  // Fetch the list of first mount
  componentDidMount() {
    this.getFeed();
  }

  getFeed = () => {
    fetch('http://localhost:5000/getFeed')
      .then((res) => res.json())
      .then((items) => this.setState({ items }));
  }

  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    const { items } = this.state;
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="row">
            <h1>Blogs feed</h1>
            <p>Link to blog:</p>
            <a href="https://paulopensourceblog.wordpress.com">
              https://paulopensourceblog.wordpress.com
            </a>
            {/* Check to see if any items are found */}
            {items.length ? (
              <div>
                {items.map((item) => (
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

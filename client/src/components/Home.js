import React, { Component } from 'react';
import Slider from 'react-slick';
import { Link } from 'react-router-dom';
import { FaChild, FaGamepad, FaWordpress } from 'react-icons/fa';
import ReactLoading from 'react-loading';
import '../styles/style.css';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

/**
 * Home component page
 */
class Home extends Component {
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
    const { feeds } = this.state;
    const { loading } = this.state;
    return (
      <div className="wrapper u-no-margin--top">
        <div className="p-suru">
          <div className="p-strip is-deep">
            <div className="row">
              <h2>
                <FaChild />
                &nbsp;Welcome to my website!
              </h2>
              <p>
                This is my personal website used for the purpose of displaying
                projects.
              </p>
            </div>
          </div>
        </div>
        <div
          className="p-strip is-deep"
          style={{ background: '#3498db', color: '#FFF' }}
        >
          <div className="row">
            <h2>
              <FaGamepad />
              &nbsp;Game development projects
            </h2>
            <Slider
              dots
              infinite
              speed={500}
              slidesToShow={3}
              slidesToScroll={3}
              autoplay
            >
              <div className="p-card">
                <Link to="/external">
                  <img src="/images/rush.png" alt="" />
                </Link>
                <h4 className="text-center">Rush</h4>
              </div>
              <div className="p-card">
                <Link to="/external">
                  <img src="/images/hardescape.png" alt="" />
                </Link>
                <h4 className="text-center">Hard Escape</h4>
              </div>
              <div className="p-card">
                <Link to="/external">
                  <img src="/images/FE.png" alt="" />
                </Link>
                <h4 className="text-center">Friendly Encounters</h4>
              </div>
              <div className="p-card">
                <Link to="/external">
                  <img src="/images/rush.png" alt="" />
                </Link>
                <h4 className="text-center">Rush</h4>
              </div>
            </Slider>
          </div>
        </div>
        <div
          className="p-strip is-deep"
          style={{ background: '#ff8080', color: '#FFF' }}
        >
          <div className="row">
            <h2>
              <FaWordpress />
              &nbsp;Blog feed
            </h2>
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
              <div className="p-card">
                {feeds.length ? (
                  <div>
                    {/* Check to see if any items are found */}
                    {feeds.map((item) => (
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
    );
  }
}

export default Home;

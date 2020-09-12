import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';

// Note: some RSS feeds can't be loaded in the browser due to CORS security.
// To get around this, you can use a proxy.
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

class SumoForm extends Component {
  constructor() {
    super();
    this.state = {
      hoshitori: [],
      loading: false,
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  // Fetch the list of first mount
  componentDidMount() {
    this.getFeed();
  }

  getFeed = () => {
    this.setState({ loading: true }, () => {
      fetch(`${CORS_PROXY}http://sumo.or.jp/ResultData/hoshitori_ajax/1/1/`)
        .then((res) => res.json())
        .then((feed) => {
          const {
            hoshitori,
            torikumi,
          } = this.state;
          this.setState({
            hoshitori: hoshitori.concat(feed.BanzukeTable),
            torikumi: Object.assign(feed.TorikumiData, torikumi),
            loading: false,
          });
        }).catch((err) => {
          // eslint-disable-next-line
          console.log(err);
          this.setState({
            loading: false,
          });
        });
      fetch(`${CORS_PROXY}http://sumo.or.jp/ResultData/hoshitori_ajax/1/2/`)
        .then((res) => res.json())
        .then((feed) => {
          const {
            hoshitori,
            torikumi,
          } = this.state;
          this.setState({
            hoshitori: hoshitori.concat(feed.BanzukeTable),
            torikumi: Object.assign(feed.TorikumiData, torikumi),
            loading: false,
          });
        }).catch((err) => {
          // eslint-disable-next-line
          console.log(err);
          this.setState({
            loading: false,
          });
        });
    });
  }

  handleChange(event) { this.setState({ value: event.target.value }); }

  handleSubmit(event) {
    const { value } = this.state;
    // alert(`Your favorite flavor is: ${value}`);
    if (value === 'lime');
    event.preventDefault();
  }

  render() {
    const {
      loading,
      hoshitori,
      torikumi,
    } = this.state;
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="p-strip is-deep" style={{ background: '#51ab6e', color: '#FFF' }}>
            <div className="row">
              <h2>
                Paul&apos;s fantasy sumo/Sumo Form
              </h2>
              <p className="p-heading--4">
                Pulling sumo tournament information from&nbsp;
                <a href="http://sumo.or.jp">
                  http://sumo.or.jp
                </a>
                &nbsp;basically keeping track of scores/adding scores.
                If you know Paul, you know he&apos;s cray cray for Sumo :)
                This project is pretty much fantasy football.
                This project is mostly for me and my friends,
                I will count the points and send a message at the
                end of the sumo tournament.
              </p>
            </div>
          </div>
          <div className="p-strip is-deep" style={{ background: '#FFF' }}>
            <div className="row">
              <form onSubmit={this.handleSubmit}>
                <div>
                  <h2>Yokozuna/Ozeki:</h2>
                  {loading ? (
                    <div className="center">
                      <ReactLoading
                        type="spin"
                        color="#000"
                        height="20%"
                        width="20%"
                      />
                    </div>
                  ) : (
                    <div>
                      {hoshitori.length ? (
                        <div className="row">
                          {hoshitori
                            .filter((i) => i.banzuke_name_eng === 'Yokozuna'
                              || i.banzuke_name_eng === 'Ozeki')
                            .filter((i) => torikumi[i.rikishi_id].rest_number === 0)
                            .map((s) => (
                              <label
                                htmlFor="sumoform"
                                key={s.rikishi_id}
                                className="p-card col-3"
                              >
                                <a href={`http://sumo.or.jp/EnSumoDataRikishi/profile/${s.rikishi_id.trim()}`}>
                                  <img
                                    src={`http://sumo.or.jp/img/sumo_data/rikishi/60x60/${s.photo.trim()}`}
                                    alt={s.kakuzuke_id}
                                  />
                                </a>
                                <p>
                                  Name:&nbsp;
                                  {s.shikona_eng}
                                  <br />
                                  Rank:&nbsp;
                                  {s.banzuke_name_eng}
                                </p>
                                <input type="radio" name="RadioOptions1" id="Radio1" value="option1" />
                                <br />
                              </label>
                            ))}
                        </div>
                      ) : (
                        <h2>Could not load wrestlers!</h2>
                      )}
                    </div>
                  )}
                </div>
                <hr />
                <div>
                  <h2>Sekiwake/Komusubi:</h2>
                  {loading ? (
                    <div className="center">
                      <ReactLoading
                        type="spin"
                        color="#000"
                        height="20%"
                        width="20%"
                      />
                    </div>
                  ) : (
                    <div>
                      {hoshitori.length ? (
                        <div className="row">
                          {hoshitori
                            .filter((i) => i.banzuke_name_eng === 'Sekiwake'
                              || i.banzuke_name_eng === 'Komusubi')
                            .map((s) => (
                              <label htmlFor="sumoform" key={s.rikishi_id} className="p-card col-3">
                                <a href={`http://sumo.or.jp/EnSumoDataRikishi/profile/${s.rikishi_id.trim()}`}>
                                  <img
                                    src={`http://sumo.or.jp/img/sumo_data/rikishi/60x60/${s.photo.trim()}`}
                                    alt={s.kakuzuke_id}
                                  />
                                </a>
                                <p>
                                  Name:&nbsp;
                                  {s.shikona_eng}
                                  <br />
                                  Rank:&nbsp;
                                  {s.banzuke_name_eng}
                                </p>
                                <input type="radio" name="RadioOptions2" id="Radio2" value="option2" />
                                <br />
                              </label>
                            ))}
                        </div>
                      ) : (
                        <h2>Could not load wrestlers!</h2>
                      )}
                    </div>
                  )}
                </div>
                <hr />
                <div>
                  <h2>Upper Maegashria (1-5):</h2>
                  {loading ? (
                    <div className="center">
                      <ReactLoading
                        type="spin"
                        color="#000"
                        height="20%"
                        width="20%"
                      />
                    </div>
                  ) : (
                    <div>
                      {hoshitori.length ? (
                        <div className="row">
                          {hoshitori
                            .filter((i) => i.banzuke_name_eng.replace(/\D/g, '') >= 1
                              && i.banzuke_name_eng.replace(/\D/g, '') <= 5)
                            .sort((a, b) => a.banzuke_name_eng.replace(/\D/g, '') - b.banzuke_name_eng.replace(/\D/g, ''))
                            .map((s) => (
                              <label
                                htmlFor="sumoform"
                                key={s.rikishi_id}
                                className={torikumi[s.rikishi_id].rest_day > 0 ? 'p-card--highlighted col-3' : 'p-card col-3'}
                              >
                                <a href={`http://sumo.or.jp/EnSumoDataRikishi/profile/${s.rikishi_id.trim()}`}>
                                  <img
                                    src={`http://sumo.or.jp/img/sumo_data/rikishi/60x60/${s.photo.trim()}`}
                                    alt={s.kakuzuke_id}
                                  />
                                </a>
                                <p>
                                  Name:&nbsp;
                                  {s.shikona_eng}
                                  <br />
                                  Rank:&nbsp;
                                  {s.banzuke_name_eng}
                                </p>
                                <input type="radio" name="RadioOptions3" id="Radio3" value="option3" />
                                <br />
                              </label>
                            ))}
                        </div>
                      ) : (
                        <h2>Could not load wrestlers!</h2>
                      )}
                    </div>
                  )}
                </div>
                <hr />
                <div>
                  <h2>Middle Maegashria (6-10):</h2>
                  {loading ? (
                    <div className="center">
                      <ReactLoading
                        type="spin"
                        color="#000"
                        height="20%"
                        width="20%"
                      />
                    </div>
                  ) : (
                    <div>
                      {hoshitori.length ? (
                        <div className="row">
                          {hoshitori
                            .filter((i) => i.banzuke_name_eng.replace(/\D/g, '') >= 6
                                && i.banzuke_name_eng.replace(/\D/g, '') <= 10)
                            .sort((a, b) => a.banzuke_name_eng.replace(/\D/g, '') - b.banzuke_name_eng.replace(/\D/g, ''))
                            .map((s) => (
                              <label htmlFor="sumoform" key={s.rikishi_id} className="p-card col-3">
                                <a href={`http://sumo.or.jp/EnSumoDataRikishi/profile/${s.rikishi_id.trim()}`}>
                                  <img
                                    src={`http://sumo.or.jp/img/sumo_data/rikishi/60x60/${s.photo.trim()}`}
                                    alt={s.kakuzuke_id}
                                  />
                                </a>
                                <p>
                                  Name:&nbsp;
                                  {s.shikona_eng}
                                  <br />
                                  Rank:&nbsp;
                                  {s.banzuke_name_eng}
                                </p>
                                <input type="radio" name="RadioOptions4" id="Radio4" value="option4" />
                                <br />
                              </label>
                            ))}
                        </div>
                      ) : (
                        <h2>Could not load wrestlers!</h2>
                      )}
                    </div>
                  )}
                </div>
                <hr />
                <div>
                  <h2>Lower Maegashria (11-17):</h2>
                  {loading ? (
                    <div className="center">
                      <ReactLoading
                        type="spin"
                        color="#000"
                        height="20%"
                        width="20%"
                      />
                    </div>
                  ) : (
                    <div>
                      {hoshitori.length ? (
                        <div className="row">
                          {hoshitori
                            .filter((i) => i.banzuke_name_eng.replace(/\D/g, '') >= 11)
                            .sort((a, b) => a.banzuke_name_eng.replace(/\D/g, '') - b.banzuke_name_eng.replace(/\D/g, ''))
                            .map((s) => (
                              <label htmlFor="sumoform" key={s.rikishi_id} className="p-card col-3">
                                <a href={`http://sumo.or.jp/EnSumoDataRikishi/profile/${s.rikishi_id.trim()}`}>
                                  <img
                                    src={`http://sumo.or.jp/img/sumo_data/rikishi/60x60/${s.photo.trim()}`}
                                    alt={s.kakuzuke_id}
                                  />
                                </a>
                                <p>
                                  Name:&nbsp;
                                  {s.shikona_eng}
                                  <br />
                                  Rank:&nbsp;
                                  {s.banzuke_name_eng}
                                </p>
                                <input type="radio" name="RadioOptions5" id="Radio5" value="option5" />
                                <br />
                              </label>
                            ))}
                        </div>
                      ) : (
                        <h2>Could not load wrestlers!</h2>
                      )}
                    </div>
                  )}
                </div>
                <hr />
                <div className="row">
                  <input className="p-button--positive" type="submit" value="Submit" />
                </div>
              </form>
            </div>
          </div>
          <div className="p-strip is-deep" style={{ background: '#51ab6e', color: '#FFF' }}>
            <div className="row">
              <h2>See sumo results</h2>
              <Link className="p-button--brand" to="/sumoresults">Sumo results</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SumoForm;

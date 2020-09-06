import React, { Component } from 'react';
import ReactLoading from 'react-loading';

// Note: some RSS feeds can't be loaded in the browser due to CORS security.
// To get around this, you can use a proxy.
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

class SumoSearch extends Component {
  constructor(props) {
    super(props);
    this.state = {
      torikumi: [],
      hoshitori: [],
      loading: false,
      wrestler: '',
    };
    this.handleChange = this.handleChange.bind(this);
  }

  // Fetch the list of first mount
  componentDidMount() {
    this.getFeed();
  }

  getFeed = () => {
    this.setState({ loading: true }, () => {
      fetch(`${CORS_PROXY}http://sumo.or.jp/EnHonbashoMain/hoshitori_ajax/1/1/`)
        .then((res) => res.json())
        .then((feed) => {
          const {
            hoshitori,
            torikumi,
          } = this.state;
          this.setState({
            hoshitori: hoshitori.concat(feed.BanzukeTable),
            torikumi: torikumi.concat(feed.TorikumiData),
            loading: false,
          });
        }).catch((err) => {
          // eslint-disable-next-line
          console.log(err);
          this.setState({
            loading: false,
          });
        });
      fetch(`${CORS_PROXY}http://sumo.or.jp/EnHonbashoMain/hoshitori_ajax/1/2/`)
        .then((res) => res.json())
        .then((feed) => {
          const {
            hoshitori,
            torikumi,
          } = this.state;
          this.setState({
            hoshitori: hoshitori.concat(feed.BanzukeTable),
            torikumi: torikumi.concat(feed.TorikumiData),
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

  handleChange(event) { this.setState({ wrestler: event.target.value }); }

  render() {
    const {
      torikumi,
      loading,
      hoshitori,
      wrestler,
    } = this.state;
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="p-strip is-deep" style={{ background: '#51ab6e', color: '#FFF' }}>
            <div className="row">
              <h2>
                Sumo wrestler search page
              </h2>
              <p className="p-heading--4">
                Enter any sumo wrestler in the Makuuchi rank to see their score/profile.
                Press on their profile picture for more details on the wrestler
              </p>
              <br />
              <p className="p-heading--4">
                Information is pulled from&nbsp;
                <a href="http://sumo.or.jp">
                  http://sumo.or.jp
                </a>
              </p>
              <hr />
            </div>
          </div>
          <div className="p-strip is-deep" style={{ background: '#FFF' }}>
            <div className="row">
              <label htmlFor="formName">
                <h2>Wrestler Name</h2>
                <input type="text" id="formName" placeholder="Enter name here" onChange={this.handleChange} />
              </label>
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
                        .filter((i) => i.shikona_eng.toLowerCase().includes(wrestler))
                        .map((s) => (
                          <div key={s.rikishi_id} className="col-3">
                            <div className="p-card--highlighted">
                              <p>
                                {s.shikona_eng}
                                <br />
                                {s.banzuke_name_eng}
                              </p>
                              <a href={`http://sumo.or.jp/EnSumoDataRikishi/profile/${s.rikishi_id.trim()}`}>
                                <img
                                  src={`http://sumo.or.jp/img/sumo_data/rikishi/60x60/${s.photo.trim()}`}
                                  alt={s.kakuzuke_id}
                                />
                              </a>
                              <br />
                              {
                                torikumi[0][s.rikishi_id] !== undefined ? (
                                  <p>
                                    Wins:&nbsp;
                                    {torikumi[0][s.rikishi_id].won_number}
                                    <br />
                                    Losses:&nbsp;
                                    {torikumi[0][s.rikishi_id].lost_number}
                                    <br />
                                    Rest days:&nbsp;
                                    {torikumi[0][s.rikishi_id].rest_number}
                                  </p>
                                ) : (
                                  <p>
                                    Wins:&nbsp;
                                    {torikumi[1][s.rikishi_id].won_number}
                                    <br />
                                    Losses:&nbsp;
                                    {torikumi[1][s.rikishi_id].lost_number}
                                    <br />
                                    Rest days:&nbsp;
                                    {torikumi[1][s.rikishi_id].rest_number}
                                  </p>
                                )
                              }
                            </div>
                          </div>
                        ))}
                    </div>
                  ) : (
                    <h2>Could not load wrestlers!</h2>
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

export default SumoSearch;

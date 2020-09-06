import React, { Component } from 'react';
import ReactLoading from 'react-loading';

// Note: some RSS feeds can't be loaded in the browser due to CORS security.
// To get around this, you can use a proxy.
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

class SumoResults extends Component {
  constructor(props) {
    super(props);
    this.state = {
      torikumi: [],
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

  handleChange(event) { this.setState({ value: event.target.value }); }

  handleSubmit(event) {
    const { value } = this.state;
    // alert(`Your favorite flavor is: ${value}`);
    if (value === 'lime');
    event.preventDefault();
  }

  render() {
    const {
      torikumi,
      loading,
      hoshitori,
    } = this.state;
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="p-strip is-deep" style={{ background: '#51ab6e', color: '#FFF' }}>
            <div className="row">
              <h2>
                Sumo results
              </h2>
              <p className="p-heading--4">
                Information is pulled from&nbsp;
                <a href="http://sumo.or.jp">
                  http://sumo.or.jp
                </a>
              </p>
              <hr />
            </div>
          </div>
          <div className="p-strip is-deep">
            <div className="row">
              <h2>
                Sumo results here:
              </h2>
              <table className="p-table--sortable" role="grid">
                <thead>
                  <tr>
                    <th>Name</th>
                    <th>Image</th>
                    <th>Rank</th>
                    <th>Wins</th>
                    <th>Losses</th>
                  </tr>
                </thead>
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
                  <>
                    {hoshitori.length ? (
                      <tbody>
                        {hoshitori
                          .map((s) => (
                            <tr key={s.rikishi_id}>
                              <td>
                                {s.shikona_eng}
                              </td>
                              <td>
                                <a href={`http://sumo.or.jp/EnSumoDataRikishi/profile/${s.rikishi_id.trim()}`}>
                                  <img
                                    src={`http://sumo.or.jp/img/sumo_data/rikishi/60x60/${s.photo.trim()}`}
                                    alt={s.kakuzuke_id}
                                  />
                                </a>
                              </td>
                              {
                                  torikumi[0][s.rikishi_id] !== undefined ? (
                                    <>
                                      <td>
                                        {s.banzuke_name_eng}
                                      </td>
                                      <td>
                                        {torikumi[0][s.rikishi_id].won_number}
                                      </td>
                                      <td>
                                        {torikumi[0][s.rikishi_id].lost_number}
                                      </td>
                                    </>
                                  ) : (
                                    <>
                                      <td>
                                        {s.banzuke_name_eng}
                                      </td>
                                      <td>
                                        {torikumi[1][s.rikishi_id].won_number}
                                      </td>
                                      <td>
                                        {torikumi[1][s.rikishi_id].lost_number}
                                      </td>
                                    </>
                                  )
                                }
                            </tr>
                          ))}
                      </tbody>
                    ) : (
                      <h2>Could not load wrestlers!</h2>
                    )}
                  </>
                )}
              </table>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SumoResults;

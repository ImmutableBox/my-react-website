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
          <div className="p-strip is-deep" style={{ background: '#ff4c70', color: '#FFF' }}>
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
                    <th id="t-yo" aria-sort="none" role="columnheader" className="u-align--right">Yokozuna/Ozeki</th>
                    <th id="t-sk" aria-sort="none" role="columnheader" className="u-align--right">Sekiwake/Komusubi</th>
                    <th id="t-um" aria-sort="none" role="columnheader" className="u-align--right">Upper Maegashria (1-5)</th>
                    <th id="t-mm" aria-sort="none" role="columnheader" className="u-align--right">Middle Maegashria (6-10)</th>
                    <th id="t-lm" aria-sort="none" role="columnheader" className="u-align--right">Lower Maegashria (11-17)</th>
                  </tr>
                </thead>
                <tbody>
                  <tr role="row">
                    <td role="gridcell" className="u-align--right">1</td>
                    <td role="gridcell" className="u-align--right">1 GiB</td>
                    <td role="gridcell" className="u-align--right">2</td>
                  </tr>
                  <tr role="row">
                    <td role="gridcell" className="u-align--right">1</td>
                    <td role="gridcell" className="u-align--right">1 GiB</td>
                    <td role="gridcell" className="u-align--right">2</td>
                  </tr>
                  <tr role="row">
                    <td role="gridcell" className="u-align--right">8</td>
                    <td role="gridcell" className="u-align--right">31.9 GiB</td>
                    <td role="gridcell" className="u-align--right">3</td>
                  </tr>
                  <tr role="row">
                    <td role="gridcell" className="u-align--right">8</td>
                    <td role="gridcell" className="u-align--right">3.9 GiB</td>
                    <td role="gridcell" className="u-align--right">3</td>
                  </tr>
                  <tr role="row">
                    <td role="gridcell" className="u-align--right">4</td>
                    <td role="gridcell" className="u-align--right">4 GiB</td>
                    <td role="gridcell" className="u-align--right">2</td>
                  </tr>
                  <tr role="row">
                    <td role="gridcell" className="u-align--right">8</td>
                    <td role="gridcell" className="u-align--right">2 GiB</td>
                    <td role="gridcell" className="u-align--right">31</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
          <div className="p-strip is-deep" style={{ background: '#ff4c70', color: '#FFF' }}>
            <div className="row">
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

export default SumoResults;

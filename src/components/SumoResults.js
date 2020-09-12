import React, { Component } from 'react';
import ReactLoading from 'react-loading';

// Note: some RSS feeds can't be loaded in the browser due to CORS security.
// To get around this, you can use a proxy.
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

class SumoResults extends Component {
  constructor() {
    super();
    this.state = {
      torikumi: [],
      hoshitori: [],
      loading: false,
      wrestler: '',
      ranking: 'None',
      wins: 'Not set',
      losses: 'Not set',
      showSittingOut: 'Yes',
      cardFormat: 'Table Format',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);
    this.handleRankingChange = this.handleRankingChange.bind(this);
    this.handleShowSittingOutChange = this.handleShowSittingOutChange.bind(this);
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

  handleSearchChange(event) { this.setState({ wrestler: event.target.value }); }

  handleRankingChange(event) { this.setState({ ranking: event.target.value }); }

  handleShowSittingOutChange(event) {
    if (event.target.value === 'Yes') {
      this.setState({ showSittingOut: 'No' });
    } else {
      this.setState({ showSittingOut: 'Yes' });
    }
  }

  handleFormatChange(event) {
    if (event.target.value === 'Card Format') {
      this.setState({ cardFormat: 'Table Format' });
    } else {
      this.setState({ cardFormat: 'Card Format' });
    }
  }

  render() {
    const {
      torikumi,
      loading,
      hoshitori,
      wrestler,
      cardFormat,
      wins,
      losses,
      ranking,
      showSittingOut,
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
                Enter any sumo wrestler in the Makuuchi rank to see their score/profile.
                Press on their profile picture for more details on the wrestler
              </p>
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
              <h2>Search for a wrestler</h2>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h4>Name</h4>
                      <input type="search" placeholder="Enter name here" onChange={this.handleSearchChange} />
                    </td>
                    <td>
                      <h4>Rank</h4>
                      <select value={ranking} onChange={this.handleRankingChange}>
                        <option value="" disabled="disabled" defaultValue="">Select an option</option>
                        <option value="None">None</option>
                        <option value="Yokozuna">Yokozuna</option>
                        <option value="Ozeki">Ozeki</option>
                        <option value="Sekiwake">Sekiwake</option>
                        <option value="Komusubi">Komusubi</option>
                        <option value="Maegashira #1">Maegashira #1</option>
                        <option value="Maegashira #2">Maegashira #2</option>
                        <option value="Maegashira #3">Maegashira #3</option>
                        <option value="Maegashira #4">Maegashira #4</option>
                        <option value="Maegashira #5">Maegashira #5</option>
                        <option value="Maegashira #6">Maegashira #6</option>
                        <option value="Maegashira #7">Maegashira #7</option>
                        <option value="Maegashira #8">Maegashira #8</option>
                        <option value="Maegashira #9">Maegashira #9</option>
                        <option value="Maegashira #10">Maegashira #10</option>
                        <option value="Maegashira #11">Maegashira #11</option>
                        <option value="Maegashira #12">Maegashira #12</option>
                        <option value="Maegashira #13">Maegashira #13</option>
                        <option value="Maegashira #14">Maegashira #14</option>
                        <option value="Maegashira #15">Maegashira #15</option>
                        <option value="Maegashira #16">Maegashira #16</option>
                        <option value="Maegashira #17">Maegashira #17</option>
                      </select>
                    </td>
                    <td>
                      <h4>
                        Wins:&nbsp;
                        {wins}
                      </h4>
                      <input
                        className="p-slider"
                        type="range"
                        min="0"
                        max="15"
                        step="1"
                        onChange={(event) => this.setState({ wins: event.target.value })}
                        value={wins}
                      />
                    </td>
                    <td>
                      <h4>
                        Losses:&nbsp;
                        {losses}
                      </h4>
                      <input
                        className="p-slider"
                        type="range"
                        min="0"
                        max="15"
                        step="1"
                        onChange={(event) => this.setState({ losses: event.target.value })}
                        value={losses}
                      />
                    </td>
                    <td>
                      <label htmlFor="form">
                        <h4>Show sitting out?</h4>
                        <input type="button" className="p-button--positive" value={showSittingOut} onClick={this.handleShowSittingOutChange} />
                      </label>
                    </td>
                    <td>
                      <label htmlFor="form">
                        <h4>Format</h4>
                        <input type="button" className="p-button--positive" value={cardFormat} onClick={this.handleFormatChange} />
                      </label>
                    </td>
                  </tr>
                </tbody>
              </table>
              {cardFormat === 'Card Format' ? (
                <div>
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
                            .filter((i) => i.shikona_eng.toLowerCase()
                              .includes(wrestler.toLowerCase()))
                            .map((s) => (
                              <div
                                key={s.rikishi_id}
                                className="p-card--highlighted col-3"
                                style={torikumi[s.rikishi_id].rest_number > 0 ? { backgroundColor: '#c7162b', color: '#FFF' } : {}}
                              >
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
                                <p>
                                  Wins:&nbsp;
                                  {torikumi[s.rikishi_id].won_number}
                                  <br />
                                  Losses:&nbsp;
                                  {torikumi[s.rikishi_id].lost_number}
                                  <br />
                                  Rest days:&nbsp;
                                  {torikumi[s.rikishi_id].rest_number}
                                </p>
                              </div>
                            ))}
                        </div>
                      ) : (
                        <h2>Could not load wrestlers!</h2>
                      )}
                    </div>
                  )}
                </div>
              ) : (
                <div>
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
                      <thead>
                        <tr>
                          <th className="center">
                            <ReactLoading
                              type="spin"
                              color="#000"
                              height="20%"
                              width="20%"
                            />
                          </th>
                        </tr>
                      </thead>
                    ) : (
                      <>
                        {hoshitori.length ? (
                          <tbody>
                            {hoshitori
                              .filter((i) => i.shikona_eng.toLowerCase()
                                .includes(wrestler.toLowerCase()))
                              .filter((i) => {
                                if (ranking === 'None') {
                                  return i;
                                }
                                return i.banzuke_name_eng === ranking;
                              })
                              .filter((i) => {
                                if (showSittingOut === 'Yes') {
                                  return i;
                                }
                                return torikumi[i.rikishi_id].rest_number === 0;
                              })
                              .filter((i) => {
                                if (wins === 'Not set') {
                                  return i;
                                }
                                return +torikumi[i.rikishi_id].won_number === +wins;
                              })
                              .filter((i) => {
                                if (losses === 'Not set') {
                                  return i;
                                }
                                return +torikumi[i.rikishi_id].lost_number === +losses;
                              })
                              .map((s) => (
                                <tr key={s.rikishi_id} style={torikumi[s.rikishi_id].rest_number > 0 ? { backgroundColor: '#c7162b', color: '#FFF' } : {}}>
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
                                  <td>
                                    {s.banzuke_name_eng}
                                  </td>
                                  <td>
                                    {torikumi[s.rikishi_id].won_number}
                                  </td>
                                  <td>
                                    {torikumi[s.rikishi_id].lost_number}
                                  </td>
                                </tr>
                              ))}
                          </tbody>
                        ) : (
                          <thead>
                            <tr>
                              <th>Could not load wrestlers!</th>
                            </tr>
                          </thead>
                        )}
                      </>
                    )}
                  </table>
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

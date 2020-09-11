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
      wrestler: '',
      cardFormat: 'Table Format',
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleFormatChange = this.handleFormatChange.bind(this);
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
      fetch(`${CORS_PROXY}http://sumo.or.jp/ResultData/hoshitori_ajax/1/2/`)
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

  handleSearchChange(event) { this.setState({ wrestler: event.target.value }); }

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
              <h2>
                Sumo results:
              </h2>
              <h3>Search for a wrestler</h3>
              <table>
                <tbody>
                  <tr>
                    <td>
                      <h4>Name</h4>
                      <input type="search" placeholder="Enter name here" onChange={this.handleSearchChange} />
                    </td>
                    <td>
                      <h4>Rank</h4>
                      <select name="exampleSelect" id="exampleSelect">
                        <option value="" disabled="disabled" defaultValue="">Select an option</option>
                        <option value="None">None</option>
                        <option value="Yokozuna">Yokozuna</option>
                        <option value="Ozeki">Ozeki</option>
                        <option value="Sekiwake">Sekiwake</option>
                        <option value="Komusubi">Komusubi</option>
                        <option value="Maegashira1">Maegashira #1</option>
                        <option value="Maegashira2">Maegashira #2</option>
                        <option value="Maegashira3">Maegashira #3</option>
                        <option value="Maegashira4">Maegashira #4</option>
                        <option value="Maegashira5">Maegashira #5</option>
                        <option value="Maegashira6">Maegashira #6</option>
                        <option value="Maegashira7">Maegashira #7</option>
                        <option value="Maegashira8">Maegashira #8</option>
                        <option value="Maegashira9">Maegashira #9</option>
                        <option value="Maegashira10">Maegashira #10</option>
                        <option value="Maegashira11">Maegashira #11</option>
                        <option value="Maegashira12">Maegashira #12</option>
                        <option value="Maegashira13">Maegashira #13</option>
                        <option value="Maegashira14">Maegashira #14</option>
                        <option value="Maegashira15">Maegashira #15</option>
                        <option value="Maegashira16">Maegashira #16</option>
                        <option value="Maegashira17">Maegashira #17</option>
                      </select>
                    </td>
                    <td>
                      <h4>Wins</h4>
                      <input
                        className="p-slider"
                        type="range"
                        min="0"
                        max="15"
                        step="1"
                      />
                    </td>
                    <td>
                      <h4>Losses</h4>
                      <input
                        className="p-slider"
                        type="range"
                        min="0"
                        max="15"
                        step="1"
                      />
                    </td>
                  </tr>
                </tbody>
              </table>
              <input type="button" className="p-button--brand" value={cardFormat} onClick={this.handleFormatChange} />
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

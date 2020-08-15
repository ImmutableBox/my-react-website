import React, { Component } from 'react';
import ReactLoading from 'react-loading';

// Note: some RSS feeds can't be loaded in the browser due to CORS security.
// To get around this, you can use a proxy.
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';

class SumoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      torikumi: [],
      hoshitori: [],
      loading: false,
      value: 'coconut',
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
      fetch(`${CORS_PROXY}http://sumo.or.jp/EnHonbashoMain/torikumi_ajax/1/15/`)
        .then((res) => res.json())
        .then((feed) => {
          this.setState({
            torikumi: feed.TorikumiData,
            loading: false,
          });
          // eslint-disable-next-line
          console.log(feed.TorikumiData);
          // eslint-disable-next-line
          console.log(feed.TorikumiData.length);
        }).catch((err) => {
          // eslint-disable-next-line
          console.log(err);
          this.setState({
            loading: false,
          });
        });
      fetch(`${CORS_PROXY}http://sumo.or.jp/EnHonbashoMain/hoshitori_ajax/1/1/`)
        .then((res) => res.json())
        .then((feed) => {
          const {
            hoshitori,
          } = this.state;
          this.setState({
            hoshitori: hoshitori.concat(feed.BanzukeTable),
            loading: false,
          });
          // eslint-disable-next-line
          console.log(feed.BanzukeTable.length);
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
          } = this.state;
          this.setState({
            hoshitori: hoshitori.concat(feed.BanzukeTable),
            loading: false,
          });
          // eslint-disable-next-line
          console.log(feed.BanzukeTable.length);
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
      value,
      torikumi,
      loading,
      hoshitori,
    } = this.state;
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="p-suru">
            <div className="p-strip is-deep">
              <div className="row">
                <h2>
                  Paul&apos;s fantasy sumo. (Incomplete/Not open)
                  Next tournament is in September 2020
                </h2>
                <p>
                  This information is pulled from&nbsp;
                  <a href="http://sumo.or.jp">
                    http://sumo.or.jp
                  </a>
                </p>
                <form onSubmit={this.handleSubmit}>
                  <label htmlFor="sumoform">
                    Yokozuna/Ozeki:
                    <select value={value} onChange={this.handleChange}>
                      {' '}
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option value="coconut">Coconut</option>
                      <option value="mango">Mango</option>
                    </select>
                  </label>
                  <label htmlFor="sumoform">
                    Sekiwake/Komusubi:
                    <select value={value} onChange={this.handleChange}>
                      {' '}
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option value="coconut">Coconut</option>
                      <option value="mango">Mango</option>
                    </select>
                  </label>
                  <label htmlFor="sumoform">
                    Upper Maegashria (1-5):
                    <select value={value} onChange={this.handleChange}>
                      {' '}
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option value="coconut">Coconut</option>
                      <option value="mango">Mango</option>
                    </select>
                  </label>
                  <label htmlFor="sumoform">
                    Middle Maegashria (6-10):
                    <select value={value} onChange={this.handleChange}>
                      {' '}
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option value="coconut">Coconut</option>
                      <option value="mango">Mango</option>
                    </select>
                  </label>
                  <label htmlFor="sumoform">
                    Lower Maegashria (11-17):
                    <select value={value} onChange={this.handleChange}>
                      {' '}
                      <option value="grapefruit">Grapefruit</option>
                      <option value="lime">Lime</option>
                      <option value="coconut">Coconut</option>
                      <option value="mango">Mango</option>
                    </select>
                  </label>
                  <input type="submit" value="Submit" />
                </form>
              </div>
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
          <div className="p-strip is-deep">
            <div className="row">
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
                    {torikumi.length
                    && hoshitori.length ? (
                      <div className="row">
                        {/* Check to see if any items are found */}
                        {torikumi.map((s) => (
                          <div key={s.technic_name_eng} className="col-4">
                            <div className="p-card">
                              <h3>
                                <a href={s.link}>{s.title}</a>
                              </h3>
                              {hoshitori
                                .filter((i) => i.shikona_eng.trim() === s.east.shikona_eng.trim())
                                .map((img) => (
                                  <a key={img.rikishi_id} href={`http://sumo.or.jp/EnSumoDataRikishi/profile/${img.rikishi_id.trim()}`}>
                                    <img
                                      src={`http://sumo.or.jp/img/sumo_data/rikishi/60x60/${img.photo.trim()}`}
                                      alt={img.kakuzuke_id}
                                    />
                                  </a>
                                ))}
                              <p>
                                {s.east.shikona_eng}
                                <br />
                                Wins:
                                {s.east.won_number}
                                <br />
                                Losses:
                                {s.east.lost_number}
                              </p>
                              <hr />
                              {hoshitori
                                .filter((i) => i.shikona_eng.trim() === s.west.shikona_eng.trim())
                                .map((img) => (
                                  <a key={img.rikishi_id} href={`http://sumo.or.jp/EnSumoDataRikishi/profile/${img.rikishi_id.trim()}`}>
                                    <img
                                      src={`http://sumo.or.jp/img/sumo_data/rikishi/60x60/${img.photo.trim()}`}
                                      alt={img.kakuzuke_id}
                                    />
                                  </a>
                                ))}
                              <p>
                                {s.west.shikona_eng}
                                <br />
                                Wins:
                                {s.west.won_number}
                                <br />
                                Losses:
                                {s.west.lost_number}
                              </p>
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

export default SumoForm;

import React, { Component } from 'react';
import ReactLoading from 'react-loading';
import { Link } from 'react-router-dom';

// Note: some RSS feeds can't be loaded in the browser due to CORS security.
// To get around this, you can use a proxy.
const CORS_PROXY = 'https://cors-anywhere.herokuapp.com/';
const { GoogleSpreadsheet } = require('google-spreadsheet');

const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

class SumoResults extends Component {
  mounted = false;

  constructor() {
    super();
    this.state = {
      hoshitori: [],
      sumoLoading: false,
      gapiLoading: false,
      sortValue: 'Highest',
      name: '',
      spreadSheet: null,
      sumoDay: 0,
      closeResults: false,
    };
    this.handleSearchChange = this.handleSearchChange.bind(this);
    this.handleSortChange = this.handleSortChange.bind(this);
  }

  // Fetch the list of first mount
  componentDidMount() {
    this.mounted = true;
    if (this.mounted) {
      this.getFeed();
      this.getSpreadSheet();
    }
  }

  componentWillUnmount() {
    this.mounted = false;
  }

  getFeed = () => {
    this.setState({ sumoLoading: true }, () => {
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
            sumoLoading: false,
          });
        }).catch((err) => {
          // eslint-disable-next-line
          console.log(err);
          this.setState({
            sumoLoading: false,
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
            sumoLoading: false,
          });
        }).catch((err) => {
          // eslint-disable-next-line
          console.log(err);
          this.setState({
            sumoLoading: false,
          });
        });
    });
  }

  getSpreadSheet = async () => {
    // Setting loading to true
    this.setState({ gapiLoading: true });

    // use service account creds
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });

    await doc.loadInfo();

    const rows = await doc.sheetsByIndex[1].getRows();
    const day = await doc.sheetsByIndex[2].getRows();

    this.setState({ spreadSheet: rows, gapiLoading: false, sumoDay: day[22].Judge });
  };

  handleSearchChange(event) { this.setState({ name: event.target.value }); }

  handleSortChange(event) {
    if (event.target.value === 'Highest') {
      this.setState({ sortValue: 'Lowest' });
    } else {
      this.setState({ sortValue: 'Highest' });
    }
  }

  render() {
    const {
      hoshitori,
      torikumi,
      sumoLoading,
      gapiLoading,
      spreadSheet,
      name,
      sortValue,
      sumoDay,
      closeResults,
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
                Here are the point scores from the form spreadsheet!
                <br />
                <br />
                (If the wrestler images aren&apos;t appearing
                you may need to change the website setting to allow
                Insecure Content as the images come from http not https)
              </p>
              <hr />
              {!closeResults ? (
                <p className="p-heading--4">
                  This is the point spread on day&nbsp;
                  { sumoDay }
                  &nbsp;of 15
                </p>
              ) : (
                <p className="p-heading--4">
                  Today is&nbsp;
                  {new Date().toDateString()}
                </p>
              )}
            </div>
          </div>
          <hr />
          {!closeResults ? (
            <div className="row">
              <div className="p-card--highlighted p-side-navigation col-3">
                <h4>Search your name!</h4>
                <hr />
                <b>Name</b>
                <input type="search" placeholder="Enter name here" onChange={this.handleSearchChange} />
                <b>Sort by total points</b>
                <br />
                <input type="button" className="p-button--positive" value={sortValue} onClick={this.handleSortChange} />
                <hr />
                <h4>Other sumo stuff!</h4>
                <Link className="p-button--brand" to="/sumoform">Sumo Form</Link>
                <Link className="p-button--brand" to="/sumosearch">Sumo Search</Link>
                <hr />
              </div>
              <div className="col-9">
                <table className="p-table--sortable" role="grid">
                  <thead>
                    <tr>
                      <th>Name</th>
                      <th>Total Points</th>
                      <th>Yokozuna or Ozeki</th>
                      <th>Sekiwake or Komusubi</th>
                      <th>Upper Maegashria (1-5)</th>
                      <th>Middle Maegashria (6-10)</th>
                      <th>Lower Maegashria (11-17)</th>
                    </tr>
                  </thead>
                  {sumoLoading || gapiLoading ? (
                    <thead>
                      <tr>
                        <th className="center">
                          <ReactLoading
                            type="spin"
                            color="#000"
                            height="100%"
                            width="100%"
                          />
                        </th>
                      </tr>
                    </thead>
                  ) : (
                    <>
                      {spreadSheet !== null ? (
                        <tbody>
                          {spreadSheet
                            .filter((i) => i.Name.toLowerCase()
                              .includes(name.toLowerCase()))
                            .filter((i) => i.Points !== '#N/A')
                            .sort((a, b) => {
                              if (sortValue === 'Highest') {
                                return b.Points - a.Points;
                              }
                              return a.Points - b.Points;
                            })
                            .map((w) => (
                              <tr key={w.Name}>
                                <td>
                                  { w.Name }
                                </td>
                                <td>
                                  { w.Points }
                                </td>
                                <td>
                                  {hoshitori
                                    .filter((i) => i.shikona_eng === w.YokozunaOzeki)
                                    .map((s) => (
                                      <div key={s.rikishi_id}>
                                        <a href={`http://sumo.or.jp/EnSumoDataRikishi/profile/${s.rikishi_id.trim()}`}>
                                          <img
                                            src={`http://sumo.or.jp/img/sumo_data/rikishi/60x60/${s.photo.trim()}`}
                                            alt={s.kakuzuke_id}
                                          />
                                        </a>
                                        <br />
                                        {s.shikona_eng}
                                        <br />
                                        Wins:&nbsp;
                                        {torikumi[s.rikishi_id].won_number}
                                        <br />
                                        Losses:&nbsp;
                                        {torikumi[s.rikishi_id].lost_number}
                                      </div>
                                    ))}
                                </td>
                                <td>
                                  {hoshitori
                                    .filter((i) => i.shikona_eng === w.SekiwakeKomusubi)
                                    .map((s) => (
                                      <div key={s.rikishi_id}>
                                        <a href={`http://sumo.or.jp/EnSumoDataRikishi/profile/${s.rikishi_id.trim()}`}>
                                          <img
                                            src={`http://sumo.or.jp/img/sumo_data/rikishi/60x60/${s.photo.trim()}`}
                                            alt={s.kakuzuke_id}
                                          />
                                        </a>
                                        <br />
                                        {s.shikona_eng}
                                        <br />
                                        Wins:&nbsp;
                                        {torikumi[s.rikishi_id].won_number}
                                        <br />
                                        Losses:&nbsp;
                                        {torikumi[s.rikishi_id].lost_number}
                                      </div>
                                    ))}
                                </td>
                                <td>
                                  {hoshitori
                                    .filter((i) => i.shikona_eng === w.UpperMaegashria)
                                    .map((s) => (
                                      <div key={s.rikishi_id}>
                                        <a href={`http://sumo.or.jp/EnSumoDataRikishi/profile/${s.rikishi_id.trim()}`}>
                                          <img
                                            src={`http://sumo.or.jp/img/sumo_data/rikishi/60x60/${s.photo.trim()}`}
                                            alt={s.kakuzuke_id}
                                          />
                                        </a>
                                        <br />
                                        {s.shikona_eng}
                                        <br />
                                        Wins:&nbsp;
                                        {torikumi[s.rikishi_id].won_number}
                                        <br />
                                        Losses:&nbsp;
                                        {torikumi[s.rikishi_id].lost_number}
                                      </div>
                                    ))}
                                </td>
                                <td>
                                  {hoshitori
                                    .filter((i) => i.shikona_eng === w.MiddleMaegashria)
                                    .map((s) => (
                                      <div key={s.rikishi_id}>
                                        <a href={`http://sumo.or.jp/EnSumoDataRikishi/profile/${s.rikishi_id.trim()}`}>
                                          <img
                                            src={`http://sumo.or.jp/img/sumo_data/rikishi/60x60/${s.photo.trim()}`}
                                            alt={s.kakuzuke_id}
                                          />
                                        </a>
                                        <br />
                                        {s.shikona_eng}
                                        <br />
                                        Wins:&nbsp;
                                        {torikumi[s.rikishi_id].won_number}
                                        <br />
                                        Losses:&nbsp;
                                        {torikumi[s.rikishi_id].lost_number}
                                      </div>
                                    ))}
                                </td>
                                <td>
                                  {hoshitori
                                    .filter((i) => i.shikona_eng === w.LowerMaegashria)
                                    .map((s) => (
                                      <div key={s.rikishi_id}>
                                        <a href={`http://sumo.or.jp/EnSumoDataRikishi/profile/${s.rikishi_id.trim()}`}>
                                          <img
                                            src={`http://sumo.or.jp/img/sumo_data/rikishi/60x60/${s.photo.trim()}`}
                                            alt={s.kakuzuke_id}
                                          />
                                        </a>
                                        <br />
                                        {s.shikona_eng}
                                        <br />
                                        Wins:&nbsp;
                                        {torikumi[s.rikishi_id].won_number}
                                        <br />
                                        Losses:&nbsp;
                                        {torikumi[s.rikishi_id].lost_number}
                                      </div>
                                    ))}
                                </td>
                              </tr>
                            ))}
                        </tbody>
                      ) : (
                        <thead>
                          <tr>
                            <th>Could not load!</th>
                          </tr>
                        </thead>
                      )}
                    </>
                  )}
                </table>
              </div>
            </div>
          ) : (
            <div className="p-strip is-deep" style={{ background: '#FFF' }}>
              <div className="row">
                <p className="p-heading--3">
                  Thank you very much for playing!
                  The sumo results are now closed. See you next month!
                </p>
              </div>
            </div>
          )}
        </div>
      </div>
    );
  }
}

export default SumoResults;

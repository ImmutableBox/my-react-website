/* global gapi */
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
      yokozunaOzeki: '',
      yokozunaOzekiWins: 0,
      sekiwakeKomusubi: '',
      sekiwakeKomusubiWins: 0,
      highMaegashria: '',
      highMaegashriaWins: 0,
      midMaegashria: '',
      midMaegashriaWins: 0,
      lowMaegashria: '',
      lowMaegashriaWins: 0,
      modalTitle: 'Success!',
      modalText: 'Form has been submitted! Thank you so much!',
      modalVisible: 'none',
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleLogoutClick = this.handleLogoutClick.bind(this);
    this.toggleModal = this.toggleModal.bind(this);
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

  handleLogoutClick = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signOut().then(() => {
      // eslint-disable-next-line
      console.log('User signed out.');
    });
  };

  toggleModal() {
    const { modalVisible } = this.state;
    if (modalVisible === 'none') {
      this.setState({ modalVisible: 'flex' });
    } else {
      this.setState({ modalVisible: 'none' });
    }
  }

  handleSubmit(event) {
    event.preventDefault();
    const {
      yokozunaOzeki,
      yokozunaOzekiWins,
      sekiwakeKomusubi,
      sekiwakeKomusubiWins,
      highMaegashria,
      highMaegashriaWins,
      midMaegashria,
      midMaegashriaWins,
      lowMaegashria,
      lowMaegashriaWins,
    } = this.state;

    const {
      profile,
    } = this.props;

    const params = {
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Contestants',
      valueInputOption: 'RAW',
      insertDataOption: 'INSERT_ROWS',
    };

    const valueRangeBody = {
      values: [[
        profile.getName(),
        yokozunaOzeki,
        sekiwakeKomusubi,
        highMaegashria,
        midMaegashria,
        lowMaegashria,
        yokozunaOzekiWins,
        sekiwakeKomusubiWins,
        highMaegashriaWins,
        midMaegashriaWins,
        lowMaegashriaWins,
      ]],
      majorDimension: 'ROWS',
    };

    if (yokozunaOzeki === '') {
      this.setState({
        modalTitle: 'Required field!',
        modalText: 'You must pick a Yokozuna or Ozeki!',
      });
      this.toggleModal();
    } else if (sekiwakeKomusubi === '') {
      this.setState({
        modalTitle: 'Required field!',
        modalText: 'You must pick a Sekiwake or Komusubi!',
      });
      this.toggleModal();
    } else if (highMaegashria === '') {
      this.setState({
        modalTitle: 'Required field!',
        modalText: 'You must pick a Upper Maegashria!',
      });
      this.toggleModal();
    } else if (midMaegashria === '') {
      this.setState({
        modalTitle: 'Required field!',
        modalText: 'You must pick a Middle Maegashria!',
      });
      this.toggleModal();
    } else if (lowMaegashria === '') {
      this.setState({
        modalTitle: 'Required field!',
        modalText: 'You must pick a Lower Maegashria!',
      });
      this.toggleModal();
    } else {
      const request = gapi.client.sheets.spreadsheets.values.append(
        params,
        valueRangeBody,
      );
      request.then(
        // eslint-disable-next-line
        (response) => {
          // eslint-disable-next-line
          // console.log(response.result);
          this.setState({
            modalTitle: 'Success!',
            modalText: 'Form has been submitted! Thank you so much!',
          });
          this.toggleModal();
        },
        (reason) => {
          // eslint-disable-next-line
          console.error(`error: ${reason.result.error.message}`);
          this.setState({
            modalTitle: 'Error!',
            modalText: 'Oh no! A error has occurred. Please report to Paul :(',
          });
          this.toggleModal();
        },
      );
    }
  }

  render() {
    const {
      loading,
      hoshitori,
      torikumi,
      modalVisible,
      modalTitle,
      modalText,
    } = this.state;

    const {
      profile,
    } = this.props;

    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="p-strip is-deep" style={{ background: '#51ab6e', color: '#FFF' }}>
            <div className="p-modal" id="modal" style={{ display: modalVisible }}>
              <div className="p-modal__dialog" role="dialog" aria-labelledby="modal-title" aria-describedby="modal-description">
                <header className="p-modal__header">
                  <h2 className="p-modal__title" id="modal-title">{modalTitle}</h2>
                  <button type="button" className="p-modal__close" onClick={this.toggleModal}>Close</button>
                </header>
                <p id="modal-description">
                  {modalText}
                </p>
              </div>
            </div>
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
              <hr />
              <h3>
                Hi&nbsp;
                {profile.getName()}
                .&nbsp;You are logged in with your google account!
              </h3>
              <button type="button" className="p-button--negative" onClick={this.handleLogoutClick}>
                Sign Out
              </button>
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
                                  <br />
                                  Wins:&nbsp;
                                  {torikumi[s.rikishi_id].won_number}
                                  <br />
                                  Losses:&nbsp;
                                  {torikumi[s.rikishi_id].lost_number}
                                </p>
                                <input
                                  id={s.rikishi_id}
                                  name="firstWrestler"
                                  type="radio"
                                  value={s.shikona_eng}
                                  onChange={(e) => {
                                    this.setState(
                                      {
                                        yokozunaOzeki: e.target.value,
                                        yokozunaOzekiWins: torikumi[s.rikishi_id].won_number,
                                      },
                                    );
                                  }}
                                />
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
                            .filter((i) => torikumi[i.rikishi_id].rest_number === 0)
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
                                  <br />
                                  Wins:&nbsp;
                                  {torikumi[s.rikishi_id].won_number}
                                  <br />
                                  Losses:&nbsp;
                                  {torikumi[s.rikishi_id].lost_number}
                                </p>
                                <input
                                  id={s.rikishi_id}
                                  name="secondWrestler"
                                  type="radio"
                                  value={s.shikona_eng}
                                  onChange={(e) => {
                                    this.setState(
                                      {
                                        sekiwakeKomusubi: e.target.value,
                                        sekiwakeKomusubiWins: torikumi[s.rikishi_id].won_number,
                                      },
                                    );
                                  }}
                                />
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
                            .filter((i) => torikumi[i.rikishi_id].rest_number === 0)
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
                                  <br />
                                  Wins:&nbsp;
                                  {torikumi[s.rikishi_id].won_number}
                                  <br />
                                  Losses:&nbsp;
                                  {torikumi[s.rikishi_id].lost_number}
                                </p>
                                <input

                                  id={s.rikishi_id}
                                  name="thirdWrestler"
                                  type="radio"
                                  value={s.shikona_eng}
                                  onChange={(e) => {
                                    this.setState(
                                      {
                                        highMaegashria: e.target.value,
                                        highMaegashriaWins: torikumi[s.rikishi_id].won_number,
                                      },
                                    );
                                  }}
                                />
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
                            .filter((i) => torikumi[i.rikishi_id].rest_number === 0)
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
                                  <br />
                                  Wins:&nbsp;
                                  {torikumi[s.rikishi_id].won_number}
                                  <br />
                                  Losses:&nbsp;
                                  {torikumi[s.rikishi_id].lost_number}
                                </p>
                                <input

                                  id={s.rikishi_id}
                                  name="fourthWrestler"
                                  type="radio"
                                  value={s.shikona_eng}
                                  onChange={(e) => {
                                    this.setState(
                                      {
                                        midMaegashria: e.target.value,
                                        midMaegashriaWins: torikumi[s.rikishi_id].won_number,
                                      },
                                    );
                                  }}
                                />
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
                            .filter((i) => torikumi[i.rikishi_id].rest_number === 0)
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
                                  <br />
                                  Wins:&nbsp;
                                  {torikumi[s.rikishi_id].won_number}
                                  <br />
                                  Losses:&nbsp;
                                  {torikumi[s.rikishi_id].lost_number}
                                </p>
                                <input

                                  id={s.rikishi_id}
                                  name="fifthWrestler"
                                  type="radio"
                                  value={s.shikona_eng}
                                  onChange={(e) => {
                                    this.setState(
                                      {
                                        lowMaegashria: e.target.value,
                                        lowMaegashriaWins: torikumi[s.rikishi_id].won_number,
                                      },
                                    );
                                  }}
                                />
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
              <h2>Click button to see Sumo results!</h2>
              <Link className="p-button--brand" to="/sumoresults">Sumo results</Link>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SumoForm;

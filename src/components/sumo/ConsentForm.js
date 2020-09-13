/* global gapi */
import React from 'react';
import ReactLoading from 'react-loading';
import LoginManager from './LoginManager';

const config = {
  apiKey: process.env.API_KEY,
  clientId: process.env.CLIENT_ID,
  scope: 'https://www.googleapis.com/auth/spreadsheets',
  discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
};

class ConsentForm extends React.Component {
  constructor() {
    super();
    this.state = {
      gapiLoaded: false,
    };
  }

  componentDidMount() {
    const script = document.createElement('script');
    script.src = 'https://apis.google.com/js/client.js';

    script.onload = () => {
      const initClient = () => {
        gapi.client.init(config).then(() => {
          const auth2 = gapi.auth2.getAuthInstance();
          auth2.isSignedIn.listen(this.handleSigninStatusChange);

          const currentUser = auth2.currentUser.get();
          const authResponse = currentUser.getAuthResponse(true);
          if (authResponse && currentUser) {
            // save access token
          }
          this.setState({
            gapiLoaded: true,
          });
        });
      };
      gapi.load('client:auth2', initClient);
    };

    document.body.appendChild(script);
  }

  handleSigninStatusChange = (isSignedIn) => {
    const auth2 = gapi.auth2.getAuthInstance();
    if (isSignedIn) {
      const currentUser = auth2.currentUser.get();
      const authResponse = currentUser.getAuthResponse(true);
      if (authResponse) {
        // save access token
      }
    }
  };

  render() {
    const {
      gapiLoaded,
    } = this.state;

    return gapiLoaded ? (
      <LoginManager />
    ) : (
      <div className="wrapper u-no-margin--top" style={{ background: '#dcdcdc' }}>
        <div className="main-content inner-wrapper">
          <div className="p-strip is-deep">
            <div className="row">
              <div className="center">
                <ReactLoading
                  type="spin"
                  color="#000"
                  height="20%"
                  width="20%"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConsentForm;

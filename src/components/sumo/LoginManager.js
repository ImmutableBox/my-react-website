/* global gapi */
import React from 'react';
import SumoForm from './SumoForm';

class LoginManager extends React.Component {
  constructor() {
    super();
    this.state = {
      isLoggedIn: false,
      profile: null,
    };
    this.handleLoginClick = this.handleLoginClick.bind(this);
  }

  componentDidMount() {
    const auth2 = gapi.auth2.getAuthInstance();
    const getLoginState = () => auth2.isSignedIn.get();

    this.setState({
      isLoggedIn: getLoginState(),
      profile: auth2.currentUser.get().getBasicProfile(),
    });

    auth2.isSignedIn.listen(() => {
      this.setState({
        isLoggedIn: getLoginState(),
        profile: auth2.currentUser.get().getBasicProfile(),
      });
    });
  }

  handleLoginClick = () => {
    const auth2 = gapi.auth2.getAuthInstance();
    auth2.signIn().then((user) => {
      const profile = user.getBasicProfile();
      this.setState({ profile });
    });
  };

  render() {
    const { profile, isLoggedIn } = this.state;

    return isLoggedIn ? (
      <SumoForm profile={profile} />
    ) : (
      <div
        className="wrapper u-no-margin--top"
        style={{ background: '#dcdcdc' }}
      >
        <div className="main-content inner-wrapper">
          <div className="p-strip is-deep">
            <div className="row">
              <h2>Consent Form</h2>
              <hr />
              <p className="p-heading--4">
                My sumo form uses Google API Spreadsheet to keep track of the
                scores. You will need to login to your google account in order
                to fill in the form.
              </p>
              <div>
                <button
                  type="button"
                  className="p-button--positive"
                  onClick={this.handleLoginClick}
                >
                  Login to Google
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default LoginManager;

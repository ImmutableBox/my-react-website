import { Form, Text } from 'informed';
import React from 'react';

const SCOPE = 'https://www.googleapis.com/auth/spreadsheets';

class ContactForm extends React.Component {
  constructor(props) {
    super(props);
    this.onFormSubmit = this.onFormSubmit.bind(this);
    this.handleAuthClick = this.handleAuthClick.bind(this);
    this.handleSignoutClick = this.handleSignoutClick.bind(this);
  }

  componentDidMount() { // called automatically by React
    this.handleClientLoad();
  }

  // eslint-disable-next-line
  onFormSubmit = (submissionValues) => {
    const params = {
      // The ID of the spreadsheet to update.
      spreadsheetId: process.env.SPREADSHEET_ID,
      range: 'Sheet1',
      // How the input data should be interpreted.
      valueInputOption: 'RAW',
      // How the input data should be inserted.
      insertDataOption: 'INSERT_ROWS', // Choose OVERWRITE OR INSERT_ROWS
    };

    const valueRangeBody = {
      values: [
        [
          submissionValues.name,
        ],
      ],
      majorDimension: 'ROWS', // log each entry as a new row (vs column)
    };

    const request = window.gapi.client.sheets.spreadsheets.values.append(params, valueRangeBody);
    request.then((response) => {
      // eslint-disable-next-line
      console.log(response.result);
    }, (reason) => {
      // eslint-disable-next-line
      console.error(`error: ${reason.result.error.message}`);
    });
  }

  handleClientLoad =() => { // initialize the Google API
    window.gapi.load('client:auth2', this.initClient);
  }

  // eslint-disable-next-line
  updateSigninStatus(isSignedIn) {
    if (isSignedIn) {
      const authorizeButton = document.getElementById('authorize_button');
      const signoutButton = document.getElementById('signout_button');
      authorizeButton.style.display = 'none';
      signoutButton.style.display = 'block';
    } else {
      const authorizeButton = document.getElementById('authorize_button');
      const signoutButton = document.getElementById('signout_button');
      authorizeButton.style.display = 'block';
      signoutButton.style.display = 'none';
    }
  }

  // eslint-disable-next-line
  handleAuthClick = (event) => {
    window.gapi.auth2.getAuthInstance().signIn();
  }

  // eslint-disable-next-line
  handleSignoutClick = (event) => {
    window.gapi.auth2.getAuthInstance().signOut();
  }

  initClient =() => {
    window.gapi.client.init({
      apiKey: process.env.API_KEY,
      clientId: process.env.CLIENT_ID,
      scope: SCOPE,
      discoveryDocs: ['https://sheets.googleapis.com/$discovery/rest?version=v4'],
    }).then(() => {
      window.gapi.auth2.getAuthInstance().isSignedIn.listen(this.updateSignInStatus);
      // this.updateSignInStatus(window.gapi.auth2.getAuthInstance().isSignedIn.get());
    });
  }

  render() {
    return (
      <div>
        <Form onSubmit={this.onFormSubmit}>
          First name:
          <Text field="name" />
          <button type="submit">
            Submit
          </button>
        </Form>
        <button type="button" id="authorize_button" onClick={this.handleAuthClick}>Authorize</button>
        <button type="button" id="signout_button" onClick={this.handleSignoutClick}>Sign Out</button>
      </div>
    );
  }
}

export default ContactForm;

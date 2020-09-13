import React from 'react';

const { GoogleSpreadsheet } = require('google-spreadsheet');

const doc = new GoogleSpreadsheet(process.env.SPREADSHEET_ID);

class ConsentForm extends React.Component {
  // Fetch the list of first mount
  componentDidMount() {
    this.getSpreadSheet();
  }

  getSpreadSheet = async () => {
    // use service account creds
    await doc.useServiceAccountAuth({
      client_email: process.env.GOOGLE_SERVICE_ACCOUNT_EMAIL,
      private_key: process.env.GOOGLE_PRIVATE_KEY.replace(/\\n/g, '\n'),
    });

    doc.useApiKey(process.env.API_KEY);

    await doc.loadInfo(); // loads document properties and worksheets
    // eslint-disable-next-line
    console.log(doc.title);
    const sheet = doc.sheetsByIndex[0]; // or use doc.sheetsById[id]
    // eslint-disable-next-line
    console.log(sheet.title);
    // eslint-disable-next-line
    console.log(sheet.rowCount);
  };

  render() {
    return (
      <div
        className="wrapper u-no-margin--top"
        style={{ background: '#dcdcdc' }}
      >
        <div className="main-content inner-wrapper">
          <div className="p-strip is-deep">
            <div className="row">
              <div className="center">
                <p>Testing</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default ConsentForm;

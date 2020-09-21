import React from 'react';
import { Link } from 'react-router-dom';

class SumoPage extends React.PureComponent {
  render() {
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="p-strip is-deep" style={{ background: '#51ab6e', color: '#FFF' }}>
            <div className="row">
              <h2>
                Sumo stuff
              </h2>
              <p className="p-heading--4">
                I love Japanese Grand Sumo! Here are some stuff related stuff I made.
              </p>
              <hr />
            </div>
          </div>
          <hr />
          <div className="row">
            <h2>
              Sumo projects
            </h2>
            <div className="p-card--highlighted">
              <p>
                Pulling sumo tournament information from&nbsp;
                <a href="http://sumo.or.jp">
                  http://sumo.or.jp
                </a>
                &nbsp;basically keeping track of scores/adding scores.
                If you know Paul, you know he&apos;s cray cray for Sumo :)
                This project is pretty much fantasy football.
                This project is mostly for me and my friends, I will count the points
                and send a message at the end of the sumo tournament.
                <br />
                <br />
                Project link:&nbsp;
                <Link className="p-button--brand" to="/sumoform">Sumo Form</Link>
                <br />
                Project link:&nbsp;
                <Link className="p-button--brand" to="/sumoresults">Sumo Results</Link>
                <br />
                Project link:&nbsp;
                <Link className="p-button--brand" to="/sumosearch">Sumo Search</Link>
                <br />
              </p>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default SumoPage;

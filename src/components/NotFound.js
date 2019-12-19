import React from 'react';
import { FaBug } from 'react-icons/fa';

/**
 * NotFound component. Is displayed if user enters a link that doesn't exist.
 */
class NotFound extends React.PureComponent {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="row">
            <h1 style={{ margin: 'auto' }}>
              <FaBug />
              404
            </h1>
            <h2 style={{ margin: 'auto' }}>
              Page Not Found
            </h2>
            <p style={{ margin: 'auto' }}>
              The page you are looking for was not found.
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;

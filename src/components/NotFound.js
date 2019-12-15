import React from 'react';

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
      <div>
        <h1>Not Found</h1>
        <p>Page Not Found</p>
      </div>
    );
  }
}

export default NotFound;

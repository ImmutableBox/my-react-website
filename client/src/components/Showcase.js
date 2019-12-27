import React, { Component } from 'react';
/**
 * Showcase component.
 * This component will showcase games selected on.
 */
// eslint-disable-next-line react/prefer-stateless-function
class Showcase extends Component {
  /**
   * Rendering app component
   * @return { html } Rendering html
   */
  render() {
    const { title } = this.props;
    return (
      <div className="wrapper u-no-margin--top">
        <div className="main-content inner-wrapper">
          <div className="row">
            <h2 className="text-center">
              {title}
            </h2>
            <div className="p-card">
              <p>
                App
              </p>
              <div className="p-card">
                <p>
                  App
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Showcase;

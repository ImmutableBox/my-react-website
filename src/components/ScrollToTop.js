import { Component } from 'react';
import { withRouter } from 'react-router-dom';
/**
 * Scrolls page to top
 */
class ScrollToTop extends Component {
  componentDidUpdate(prevProps) {
    const location = this.props;
    if (location.pathname !== prevProps.location.pathname) {
      window.scrollTo(0, 0);
    }
  }

  render() {
    return null;
  }
}

export default withRouter(ScrollToTop);

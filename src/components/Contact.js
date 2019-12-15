import React, {Component} from 'react';

/**
 * Contact information component
 */
class Contact extends Component {
  render() {
    return (
      <div>
        <div>
          <h2>Contact information:</h2>
          <section>
            <article>
              <p>
                <a className="fab fa-envelope big-icon" href="mailto:paul_luu.work@hotmail.com">
                  paul_luu.work@hotmail.com
                </a>
              </p>
              <p>Linkedin:
                <a href="http://www.linkedin.com/in/paul-luu-55bb0614a">
                  www.linkedin.com/in/paul-luu-55bb0614a
                </a>
              </p>
              <p>GitHub:
                <i className="fab fa-github"></i>
                <a href="https://github.com/ImmutableBox">
                https://github.com/ImmutableBox
                </a>
              </p>
              <p>Blog:
                <a href="https://paulopensourceblog.wordpress.com">
                https://paulopensourceblog.wordpress.com
                </a>
              </p>
            </article>
          </section>
        </div>
      </div>
    );
  }
}

export default Contact;

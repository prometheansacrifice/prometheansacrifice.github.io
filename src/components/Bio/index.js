import React from "react";

// Import typefaces
import "typeface-montserrat";
import "typeface-merriweather";

import { rhythm } from "../../utils/typography";
import './sass/main.scss';

class Bio extends React.Component {
  render() {
    return (
      <div style={{ height: '100%', position: 'absolute', width: '100%' }}>
        <div className="psac-social-icons">
          <a href="http://github.com/prometheansacrifice">
            <span className="icon-github4" />
          </a>
          <a href="https://twitter.com/ManasJayanth">
            <span className="icon-twitter" />
          </a>
        </div>
        <div className="psac-home-view">
          <h1>Manas Jayanth</h1>
          <h2>(prometheansacrifice)</h2>
          <p>Looking for nirvana in code</p>
        </div>
      </div>
    );
  }
}

export default Bio;

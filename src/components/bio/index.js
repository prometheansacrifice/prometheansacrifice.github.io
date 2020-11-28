import React from "react";

// Import typefaces
import "../../utils/typography";
import './sass/main.scss';


class Bio extends React.Component {
  render() {
    return (
        <div className="psac-home-view">
          <h1>Manas Jayanth</h1>
          <h2>(prometheansacrifice)</h2>
          <p>This is my nerdy alter ego. You can find more about me <a href="https://manas-jayanth.com/"> here </a></p>
        </div>
    );
  }
}

export default Bio;

import React, { Component } from "react";
import { Link, Route } from "react-router-dom";

export class Nomatch extends Component {
  render() {
    return (
      <>
        <ul>
          <li>
            <Link to="/">Home</Link>
          </li>
          <li>
            <Link to="/old-match">Old Match, to be redirected</Link>
          </li>
          <li>
            <Link to="/will-match">Will Match</Link>
          </li>
          <li>
            <Link to="/will-not-match">Will Not Match</Link>
          </li>
          <li>
            <Link to="/also/will/not/match">Also Will Not Match</Link>
          </li>
        </ul>

        <Route path="/old-match">
          <Oldmatch />
        </Route>
        <Route path="*">
          <Willnotmatch />
        </Route>
      </>
    );
  }
}

export default Nomatch;

const Oldmatch = () => {
  <div>
    <h1>Old-match</h1>
  </div>;
};

const Willnotmatch = () => {
  <div>
    <h1>Will not match</h1>
  </div>;
};

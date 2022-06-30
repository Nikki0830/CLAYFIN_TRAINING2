import React, { Component } from "react";
import WithCounter from "./Withcounter";

export class ClickCounter extends Component {
  render() {
    // const { count } = this.state;
    const { count, incrementCount } = this.props;
    return (
      <div>
        <button onClick={incrementCount}>Clicked {count} times</button>
      </div>
    );
  }
}

export default WithCounter(ClickCounter);

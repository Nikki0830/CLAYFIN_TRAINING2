import React, { Component } from "react";
import WithCounter from "./Withcounter";

export class HoverCounter extends Component {
  render() {
    // const { count } = this.state;
    const { count, incrementCount } = this.props;
    return (
      <div>
        <h2 onMouseLeave={incrementCount}>Hoverd {count} times</h2>
      </div>
    );
  }
}

export default WithCounter(HoverCounter);

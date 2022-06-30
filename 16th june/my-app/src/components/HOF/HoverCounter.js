import React, { Component } from "react";
import UpdateComponent from "./Withcounter";

export class HoverCounter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }

  incrementCount = () => {
    console.log("clicked");
    this.setState((prevState) => {
      return { count: prevState.count + 1 };
    });
  };
  render() {
    const { count } = this.state;
    return (
      <div>
        <h2 onMouseLeave={this.incrementCount}>
          {this.props.name} Hoverd {count} times
        </h2>
      </div>
    );
  }
}

export default UpdateComponent(HoverCounter);

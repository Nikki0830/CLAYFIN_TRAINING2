import React, { Component } from "react";
import UpdateComponent from "./Withcounter";

export class ClickCounter extends Component {
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
    const {count} = this.state
    return (
      <div>
        <button onClick={this.incrementCount}>{this.props.name} Clicked {count} times</button>
      </div>
    );
  }
}

export default UpdateComponent(ClickCounter);

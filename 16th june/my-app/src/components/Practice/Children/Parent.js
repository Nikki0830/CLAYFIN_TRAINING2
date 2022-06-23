import React, { Component } from "react";
import Child from "./Child";

export class Parent extends Component {
//   age = 24
  render() {
    const age = 24;
    const name = "Nikita";
    return (
      <>
        <Child n={name} a={age} />
        <p>nikita</p>
        <h1>nikita</h1>
        {/* <Child n={name} a={this.age} /> */}
      </>
    );
  }
}

export default Parent;

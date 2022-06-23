import React, { Component } from "react";

export class Map extends Component {
  constructor() {
    super();
    this.state = {
      user: [
        {
          name: "nikita",
          age: 24,
          city: "chennai",
        },
        {
          name: "niki",
          age: 25,
          city: "bangalore",
        },
        {
          name: "nik",
          age: 26,
          city: "pune",
        },
      ],
    }
  }
  render() {
    return (
      <>
        {this.state.user.map((elem) => {
          return (
            <>
              <h1>{elem.name}</h1>
              <h1>{elem.age}</h1>
            </>
          );
        })}
      </>
    );
  }
}

export default Map;

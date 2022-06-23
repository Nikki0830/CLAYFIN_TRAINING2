import React, { Component } from "react";
import OneContext, { ProductConsumer } from "./Contextfile";

export class Contextfile4 extends Component {
    static contextType = OneContext;
  render() {
    return (
      <ProductConsumer>
        {(props) => {
          return (
            <div>
              <h1>{props.name}</h1>
              <h1>{props.age}</h1>
            </div>
          );
        }}
      </ProductConsumer>
    );
  }
}

export default Contextfile4;

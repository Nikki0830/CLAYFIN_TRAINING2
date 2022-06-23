import React, { Component } from "react";
import { ProductProvider } from "./Contextfile";
import Contextfile3 from "./Contextfile3";
import Contextfile4 from "./Contextfile4";

export class Contextfile2 extends Component {
  constructor() {
    super();
    this.state = {
      user: {
        name: "nikita",
        age: 24,
      },
    };
  }
  render() {
    return (
      <ProductProvider value={this.state.user}>
        <Contextfile3 />
        <Contextfile4/>
      </ProductProvider>
    );
  }
}

export default Contextfile2;

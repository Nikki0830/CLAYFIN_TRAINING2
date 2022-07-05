import React, { Component } from "react";
import { connect } from "react-redux";
import * as actionCreators from "./Action";

export class Store extends Component {
  render() {
    return (
      <div>
        <h1>Counter:{this.props.counter}</h1>
        <button onClick={() => this.props.onIncrementCount(1)}>+</button>
        <button onClick={() => this.props.onDecrementCount(1)}>-</button>
        <button onClick={() => this.props.onIncrementCount(10)}>+10</button>
        <button onClick={() => this.props.onDecrementCount(10)}>-10</button>
      </div>
    );
  }
}
const mapStateToProps = (state) => {
  //gets the data from store
  return {
    counter: state.count,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onIncrementCount: (val) => dispatch(actionCreators.increment(val)),
    onDecrementCount: (val) => dispatch(actionCreators.decrement(val)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Store);

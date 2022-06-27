import React from "react";
import { useReducer } from "react";

const initialState = {
  count: 0,
  count1: 1,
  age: 20,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { ...state, count: state.count + action.value };
    case "multiply":
      return { ...state, count1: state.count1 * action.value };
    case "decrement":
      return { ...state, count: state.count - action.value };
    case "incrementAge":
      return { ...state, age: state.age + action.value };
    case "decrementAge":
      return { ...state, age: state.age - action.value };
    default:
      return state;
  }
};

export default function Reducer3() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <>
      <h1>
        {state.count} {state.age} {state.count1}
      </h1>
      <button onClick={() => dispatch({ type: "increment", value: 1 })}>
        Increment
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
        Decrement
      </button>
      <button onClick={() => dispatch({ type: "multiply", value: 5 })}>
        Multiply by 5
      </button>
      <button onClick={() => dispatch({ type: "decrement", value: 5 })}>
        Decrement by 5
      </button>
      <button onClick={() => dispatch({ type: "incrementAge", value: 1 })}>
        Increment age
      </button>
      <button onClick={() => dispatch({ type: "decrementAge", value: 1 })}>
        Decrement age
      </button>
    </>
  );
}

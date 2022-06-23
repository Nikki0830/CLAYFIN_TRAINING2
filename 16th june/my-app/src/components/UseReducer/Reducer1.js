import React from "react";
import { useReducer } from "react";

const initialState = {
  count: 0,
};

const Reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + action.value };
    case "decrement":
      return { count: state.count - action.value };
    case "reset":
      return initialState;
    default:
      return state;
  }
};

export default function Reducer1() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <>
      <div>
        <h1>{state.count}</h1>
        <button onClick={() => dispatch({ type: "increment", value: 5 })}>
          Increment
        </button>
        <button onClick={() => dispatch({ type: "decrement", value: 1 })}>
          Decrement
        </button>
        <button onClick={() => dispatch({ type: "reset" })}>Reset</button>
      </div>
    </>
  );
}

import React from "react";
import { useReducer } from "react";
const initialState = {
  count: 0,
};
const Reducer = (state,action) => {
    switch(action.type){
        case "increment":
            return {}
    }
}

export default function Reducer4() {
  const [state, dispatch] = useReducer(Reducer, initialState);
  return (
    <>
      <h1>{state.count}</h1>
      <button
        onClick={() => dispatch({ type: "increment", value: 1 })}
      ></button>
         <button
        onClick={() => dispatch({ type: "decrement", value: 1 })}
      ></button>
         <button
        onClick={() => dispatch({ type: "reset"})}
      ></button>
    </>
  );
}

import React, { createContext, useContext } from "react";
import { countContext } from "./Context";

export default function Subchild(props) {
  const { setCount } = useContext(countContext);
  return (
    <div>
      <button
        onClick={() => {
          setCount((count) => count + 1);
        }}
      >
        Increase the button
      </button>
    </div>
  );
}

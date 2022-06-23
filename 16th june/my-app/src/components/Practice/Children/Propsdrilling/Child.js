import React, { useContext } from "react";
import { countContext } from "./Context";
import Subchild from "./Subchild";

export default function Child(props) {
    const {count} = useContext(countContext)
  return (
    <div>
      <h1>{count}</h1>
      <Subchild setCount = {props.setCount}/>
    </div>
  );
}

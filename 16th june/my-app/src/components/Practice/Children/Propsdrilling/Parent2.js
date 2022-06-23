import React, { useState } from "react";
import Child from "./Child";
import { countContext } from "./Context";

export default function Parent2() {
  const [count, setCount] = useState(0);
  return (
    <div>
      <countContext.Provider value={{ count, setCount }}>
        {/* <Child count={count} setCount = {setCount}/> */}
        <Child />
      </countContext.Provider>
    </div>
  );
}

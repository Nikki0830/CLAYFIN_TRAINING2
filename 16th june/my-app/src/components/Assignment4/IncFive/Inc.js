import React, { useState } from "react";

export default function Inc() {
  const [count, setCount] = useState(0);

  const handleClick = () => { 
      setCount(count+5); 
  };
  return (
    <div>
      <h1>{count}</h1>
      <button onClick={handleClick}>Click</button>
    </div>
  );
}

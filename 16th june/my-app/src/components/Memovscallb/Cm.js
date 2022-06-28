import React, { useState, useMemo, useCallback } from "react";
import Childc from "./Childc";

export default function Cm() {
  const [todo, setTodo] = useState([]);
  const [count, setCount] = useState(0);
  const [item, setItem] = useState(10);
  //useMemo
  const multiCountMemo = useMemo(
    function multiCount() {
      console.log("multicount");
      return count * 5;
    },
    [count]
  );

  const handleAddNewTodo = useCallback(() => {
    console.log("Add new todo");
  },[todo]);

  return (
    <>
      <div className="main_div3">
        <h1>usememo hook in react</h1>
        <h1>count :{count}</h1>
        <h1>item :{item}</h1>
        <h2>{multiCountMemo}</h2>
        <button onClick={() => setCount(count + 1)}>update count</button>
        <button onClick={() => setItem(item * 10)}>update item</button>
      </div>
      <Childc todo1={todo} addnew={handleAddNewTodo} />
    </>
  );
}

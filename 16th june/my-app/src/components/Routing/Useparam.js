import React from "react";
import { Link, Route, Switch, useParams } from "react-router-dom";

export default function Useparam() {
  return (
    <>
      <h1>Names</h1>
      <ul>
        <li>
          <Link to="/a">A</Link>
        </li>
        <li>
          <Link to="/b">B</Link>
        </li>
        <li>
          <Link to="/c">C</Link>
        </li>
      </ul>
      <Switch>
        <Route path="/:id" children={<Child />}></Route>
      </Switch>
    </>
  );
}

const Child = (props) => {
    console.log(props)
  let {id} = useParams();
  return (
    <div>
        <h3>ID: {id}</h3>
    </div>
  )
}

import React from "react";
import { Link, Route, useRouteMatch } from "react-router-dom";

export default function Nested() {
  return (
    <>
      <div>
        <ul>
          <li>
            <Link to="/home">Home</Link>
          </li>
          <li>
            <Link to="/topics">Topics</Link>
          </li>
        </ul>

        <Route path="/home">
          <Home />
        </Route>

        <Route path="/topics">
          <Topics />
        </Route>
      </div>
    </>
  );
}

const Home = () => {
  return (
    <div>
      <h1>Home</h1>
    </div>
  );
};

const Topics = () => {
    const {path,url} = useRouteMatch()
  return (
    <div>
      <ul>
        <li>
          <Link to={`${url}/topic1`}>Topic1</Link>
        </li>
        <li>
          <Link to={`${url}/topic2`}>Topic2</Link>
        </li>
        <li>
          <Link to={`${url}/topic3`}>Topic3</Link>
        </li>
      </ul>
      <Route path={`${path}/topic1`}>
        <Topic1 />
      </Route>

      <Route path={`${path}/topic2`}>
        <Topic2 />
      </Route>

      <Route path={`${path}/topic3`}>
        <Topic3 />
      </Route>
    </div>
  );
};

const Topic1 = () => {
  return (
    <div>
      <h1>Topic1</h1>
    </div>
  );
};
const Topic2 = () => {
  return (
    <div>
      <h1>Topic2</h1>
    </div>
  );
};
const Topic3 = () => {
  return (
    <div>
      <h1>Topic3</h1>
    </div>
  );
};

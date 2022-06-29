import React from "react";
import { Link, useLocation } from "react-router-dom";

const Child = ({ name }) => {
  return (
    <div>
      {name ? (
        <p>
          The name in the query is <strong>{name}</strong>
        </p>
      ) : (
        <h3>There is no name in the query string</h3>
      )}
    </div>
  );
};

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

export default function Queryparam() {
  let query = useQuery();
  return (
    <>
      <div>
        <h2>Movies</h2>
        <ul>
          <li>
            <Link to="/movies?name=iron-man">Iron maon</Link>
          </li>
          <li>
            <Link to="/movies?name=hulk">Hulk</Link>
          </li>
          <li>
            <Link to="/movies?name=avenger">Avenger</Link>
          </li>
          <li>
            <Link to="/movies?name=thor">Thor</Link>
          </li>
        </ul>
        <Child name = {query.get("name")}/>
      </div>
    </>
  );
}

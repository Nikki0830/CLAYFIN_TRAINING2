import React, { Component } from "react";
// import "./Gallery.js";
import "./Gallery.css";

import { data } from "./Gallery";
export class Gallery2 extends Component {
  render() {
    return (
      <div className="main_div">
        {data.map((elem, ind) => (
          <div className="second_div">
            <img src={elem.image} key={ind} alt="images" />
            <h2>{elem.name}</h2>
            <p>{elem.description}</p>
          </div>
        ))}
      </div>
    );
  }
}

export default Gallery2;

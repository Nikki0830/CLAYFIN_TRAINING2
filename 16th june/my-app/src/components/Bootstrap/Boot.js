import React from "react";
import  "../../../node_modules/bootstrap/dist/css/bootstrap.min.css"

export default function Boot() {
  return (
    <div>
      <div className="container">
        <div
          className="row"
        //   style={{ border: "1px solid red", height: "20px", height: "20px" }}
        >
          <div className="col-lg-4" style={{ border: "1px solid red" }}>column</div>
          <div className="col-lg-4" style={{ border: "1px solid red" }}>column</div>
          <div className="col-sm-8" style={{ border: "1px solid red" }}>column</div>
        </div>
      </div>
    </div>
  );
}

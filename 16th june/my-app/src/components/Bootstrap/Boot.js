import React from "react";
import "../../../node_modules/bootstrap/dist/css/bootstrap.min.css";
import Button from 'react-bootstrap/Button';

export default function Boot() {
  return (
    <>
    <Button>Text button</Button>
      {/* <div> */}
      {/* <div className="container">
          <div
            className="row"
        
          >
            <div className="col-lg-4" style={{ border: "1px solid red" }}>
              column
            </div>
            <div className="col-lg-4" style={{ border: "1px solid red" }}>
              column
            </div>
            <div className="col-sm-8" style={{ border: "1px solid red" }}>
              column
            </div> */}

      <div class="mb-3">
        <label for="exampleFormControlInput1" class="form-label">
          Email address
        </label>
        <input
          type="email"
          class="form-control"
          id="exampleFormControlInput1"
          placeholder="name@example.com"
        />
      </div>
      <div class="mb-3">
        <label for="exampleFormControlTextarea1" class="form-label">
          Example textarea
        </label>
        <textarea
          class="form-control"
          id="exampleFormControlTextarea1"
          rows="3"
        ></textarea>
      </div>
      {/* </div>
        </div>
      </div> */}

    </>
  );
}

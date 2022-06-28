import React, { useRef, useState } from "react";

export default function Useref() {
  const nickname = useRef(null);
  const[show,setShow] = useState(false)
  const submitForm = (e) => {
    e.preventDefault();
    const name = nickname.current.value
    name === "" ? alert("Please fill the data") : setShow(true)
  };
  return (
    <>
      <form action="" onSubmit={submitForm}>
        <div>
          <label htmlFor="nickname">Enter your nickname</label>
          <input type="text" id = "nickname" ref={nickname}></input>
          <button>submit</button>
        </div>
       
      </form>
      <h2>{show ? `Your nickname is ${nickname.current.value}`:""}</h2>
    </>
  );
}

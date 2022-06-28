import React, {memo} from "react";

 const Childc = ({todo1,addnew})  => {
  console.log("child is rendering");
  return (
    <>
      <div
        className="child"
        style={{
          border: "2px solid black",
          height: "90px",
          width: "90px",
          margin: "auto",
        }}
      >
        <h1>Child</h1>
     
      </div>
    </>
  );
}

export default memo(Childc)

import React, { useContext, useState } from "react";
import FormContext from "./Contextfile";

export default function Registry2() {
  const data = useContext(FormContext);
  const [mob, setMob] = useState({
    mobile: "",
    capche: (Math.random() * 10000).toFixed(),
    ...data,
    next2: true,
  });

  //   console.log(data)

  const handleChange = (e) => {
    const { value } = e.target;
    setMob({ ...mob, mobile: value });
    console.log(mob);
  };
  //   const handleChange2 = (e) => {
  //      const {value} = e.target
  //      setMob({...mob,capche:value})
  //   }
  const handleClick = () => {};
  console.log("hddsasfsaifsfsuf", mob);
  return (
    <>
      <div
        className="main_div"
        style={{
          border: "2px solid black",
          width: "400px",
          height: "200px",
          margin: "auto",
        }}
      >
        <h3 style={{ marginTop: "10px" }}>Mobile_no:</h3>
        <input
          style={{ height: "20px", marginTop: "10px" }}
          type="text"
          placeholder="Enter your number"
          value={mob.mobile}
          onChange={handleChange}
        ></input>

        <h4>{mob.capche}</h4>
        {/* <input
          style={{ height: "20px",marginTop:"10px"}}
          type="text"
          placeholder="Enter your number"
          value={mob.capche}
          onChange={handleChange2}
        ></input> */}
        {/* <h2>{data.name}</h2> */}
        <button onClick={handleClick}>Submit</button>
      </div>
    </>
  );
}

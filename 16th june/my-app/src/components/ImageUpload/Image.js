import React, { useState } from "react";
import "./Image.css"

export default function Image() {
  const [img, setImg] = useState();
  const uploadImage = (e) => {
    setImg(URL.createObjectURL(e.target.files[0]));
  };
  console.log("img:", img);

  return (
    <>
      <div>
        <input
          className="imagefile"
          type="file"
          accept="image/*"
          onChange={uploadImage}
        ></input>
        <div className="img_box">{img && <img src={img} alt="images" />}</div>
      </div>
    </>
  );
}

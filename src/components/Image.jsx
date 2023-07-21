import React from "react";
import images from "../Images";

function Image(props) {
  return (
    <div className="images">
      <img
        className="swagger"
        src={images[props.no].url}
        alt={images[props.no].fighterName}
      />

      <figcaption>{images[props.no].id}. {images[props.no].fighterName}</figcaption>
    </div>
  );
}

export default Image;
